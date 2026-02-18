import { useState, useEffect, useCallback } from 'react';
import { fetchCurrentWeather, fetchHistoricalWeather, fetchMarineWeather } from '../api/weatherService';

const RECENT_SEARCHES_KEY = 'weather_app_recent_searches';

export const useWeather = (initialCity = '') => {
    const [query, setQuery] = useState(initialCity);
    const [data, setData] = useState({
        current: null,
        historical: null,
        marine: null,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recentSearches, setRecentSearches] = useState([]);

    // Load recent searches on mount
    useEffect(() => {
        const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (stored) {
            try {
                setRecentSearches(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse recent searches', e);
            }
        }
    }, []);

    const saveToRecent = useCallback((city) => {
        setRecentSearches((prev) => {
            const filtered = prev.filter((item) => item.toLowerCase() !== city.toLowerCase());
            const updated = [city, ...filtered].slice(0, 5);
            localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
            return updated;
        });
    }, []);

    const fetchAllWeatherData = useCallback(async (searchQuery) => {
        if (!searchQuery) return;

        setLoading(true);
        setError(null);
        try {
            // We fetch current as primary. Historical/Marine might fail depending on subscription.
            const currentData = await fetchCurrentWeather(searchQuery);

            let historicalData = null;
            let marineData = null;

            // Attempt historical (yesterday as an example)
            try {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                const dateStr = yesterday.toISOString().split('T')[0];
                historicalData = await fetchHistoricalWeather(searchQuery, dateStr);
            } catch (e) {
                console.warn('Historical data not available:', e.message);
            }

            // Attempt marine
            try {
                marineData = await fetchMarineWeather(searchQuery);
            } catch (e) {
                console.warn('Marine data not available:', e.message);
            }

            setData({
                current: currentData,
                historical: historicalData,
                marine: marineData,
            });
            if (currentData?.location?.name) {
                saveToRecent(currentData.location.name);
            }
        } catch (err) {
            setError(err.message || 'An unexpected error occurred');
            setData({ current: null, historical: null, marine: null });
        } finally {
            setLoading(false);
        }
    }, [saveToRecent]);

    useEffect(() => {
        if (query) {
            fetchAllWeatherData(query);
        }
    }, [query, fetchAllWeatherData]);

    return {
        data,
        loading,
        error,
        recentSearches,
        search: setQuery,
        refresh: () => fetchAllWeatherData(query),
    };
};

import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;
const BASE_URL = 'http://api.weatherstack.com';

const weatherApi = axios.create({
    baseURL: BASE_URL,
    params: {
        access_key: API_KEY,
    },
});

export const fetchCurrentWeather = async (query) => {
    try {
        const response = await weatherApi.get('/current', {
            params: { query },
        });
        if (response.data.error) {
            throw new Error(response.data.error.info || 'Failed to fetch weather data');
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchHistoricalWeather = async (query, date) => {
    try {
        const response = await weatherApi.get('/historical', {
            params: {
                query,
                historical_date: date,
                hourly: 1
            },
        });
        if (response.data.error) {
            throw new Error(response.data.error.info || 'Failed to fetch historical data');
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchMarineWeather = async (query) => {
    try {
        // Marine endpoint might require premium, we handle the error gracefully
        const response = await weatherApi.get('/marine', {
            params: { query },
        });
        if (response.data.error) {
            throw new Error(response.data.error.info || 'Failed to fetch marine data');
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default weatherApi;

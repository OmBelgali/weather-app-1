import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import HistoricalWeatherCard from './components/HistoricalWeatherCard';
import MarineWeatherCard from './components/MarineWeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { useWeather } from './hooks/useWeather';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const { data, loading, error, recentSearches, search, refresh } = useWeather('New York');

    return (
        <div className="min-h-screen w-full bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-600/10 rounded-full blur-[100px]" />
            </div>

            <Navbar onRefresh={refresh} />

            <main className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                            Sky<span className="text-cyan-400">Glass</span>
                        </h1>
                        <p className="text-slate-400 max-w-md mx-auto font-medium">
                            Real-time weather insights with modern glass-morphic design.
                        </p>
                    </motion.div>

                    <SearchBar onSearch={search} recentSearches={recentSearches} />
                </div>

                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <LoadingSpinner />
                        </motion.div>
                    ) : error ? (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <ErrorMessage message={error} />
                        </motion.div>
                    ) : data.current ? (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        >
                            <div className="lg:col-span-2 space-y-8">
                                <WeatherCard data={data} />
                            </div>

                            <div className="space-y-8">
                                <HistoricalWeatherCard data={data} />
                                <MarineWeatherCard data={data} />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center p-20 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md"
                        >
                            <p className="text-slate-400 font-medium">Search for a location to see weather details.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <footer className="relative py-8 text-center text-slate-500 text-sm border-t border-white/5 mx-8 uppercase tracking-widest font-bold">
                Powered by Weatherstack API
            </footer>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import { Search, History, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = ({ onSearch, recentSearches }) => {
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
            setInput('');
            setIsFocused(false);
        }
    };

    const handleRecentClick = (city) => {
        onSearch(city);
        setInput('');
        setIsFocused(false);
    };

    return (
        <div className="relative w-full max-w-xl mx-auto z-50">
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder="Search for a city (e.g., London, Tokyo)..."
                    className="w-full bg-white/10 border border-white/20 backdrop-blur-md px-12 py-4 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                {input && (
                    <button
                        type="button"
                        onClick={() => setInput('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </form>

            <AnimatePresence>
                {isFocused && recentSearches.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-slate-900/80 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                    >
                        <div className="p-3 border-b border-white/5 flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-wider">
                            <History className="w-3 h-3" />
                            Recent Searches
                        </div>
                        <ul>
                            {recentSearches.map((city, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => handleRecentClick(city)}
                                        className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-3"
                                    >
                                        <Search className="w-4 h-4 text-white/20" />
                                        {city}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Click outside to close recent - simplified overlay */}
            {isFocused && (
                <div
                    className="fixed inset-0 -z-10"
                    onClick={() => setIsFocused(false)}
                />
            )}
        </div>
    );
};

export default SearchBar;

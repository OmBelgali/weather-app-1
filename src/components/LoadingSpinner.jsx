import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
        <p className="text-white/70 font-medium animate-pulse">Fetching weather data...</p>
    </div>
);

export default LoadingSpinner;

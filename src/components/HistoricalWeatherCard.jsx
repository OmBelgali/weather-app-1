import React from 'react';
import { Calendar, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';

const HistoricalWeatherCard = ({ data }) => {
    if (!data || !data.historical || !data.historical.historical) return null;

    const dateKey = Object.keys(data.historical.historical)[0];
    const history = data.historical.historical[dateKey];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white/60">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{dateKey}</span>
                </div>
                <span className="bg-white/10 text-white/40 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Historical</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl p-2 flex items-center justify-center border border-white/10">
                    <Thermometer className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                    <div className="text-2xl font-bold text-white leading-tight">
                        {history.avgtemp}°<span className="text-sm font-normal text-white/40 ml-1">avg</span>
                    </div>
                    <div className="text-xs text-white/50">
                        Min: {history.mintemp}° | Max: {history.maxtemp}°
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 text-sm">
                    <span className="text-white/40">Sunrise</span>
                    <span className="text-white font-medium">{history.astro.sunrise}</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5 text-sm">
                    <span className="text-white/40">Sunset</span>
                    <span className="text-white font-medium">{history.astro.sunset}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default HistoricalWeatherCard;

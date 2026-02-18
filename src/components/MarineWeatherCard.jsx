import React from 'react';
import { Anchor, Waves, ThermometerSide } from 'lucide-react';
import { motion } from 'framer-motion';

const MarineWeatherCard = ({ data }) => {
    // If no marine data, we might not render or show empty state.
    // The free tier often lacks marine data, handle gracefully.
    if (!data || !data.marine) {
        return (
            <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center opacity-40">
                <Waves className="w-8 h-8 text-white/40 mb-2" />
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Marine Data</p>
                <p className="text-[10px] text-white/20 mt-1">Not available for this location</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white/60">
                    <Anchor className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Marine Conditions</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                    <Waves className="w-6 h-6 text-cyan-400" />
                    <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase">Swell Height</p>
                        <p className="text-xl font-bold text-white">{data.marine.swell_height} m</p>
                    </div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                    <ThermometerSide className="w-6 h-6 text-blue-400" />
                    <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase">Water Temp</p>
                        <p className="text-xl font-bold text-white">{data.marine.water_temp}°C</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MarineWeatherCard;

import React from 'react';
import { Wind, Droplets, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const WeatherCard = ({ data }) => {
    if (!data || !data.current) return null;

    const { current, location } = data;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-white/60 mb-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium tracking-wide">{location.name}, {location.country}</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">Today</h2>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                        <Clock className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm font-medium">{current.observation_time}</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-4 shadow-inner flex items-center justify-center border border-white/10">
                            <img
                                src={current.weather_icons?.[0]}
                                alt={current.weather_descriptions?.[0]}
                                className="w-full h-full object-contain filter drop-shadow-lg"
                            />
                        </div>
                        <div>
                            <div className="text-7xl font-black text-white leading-none mb-1">
                                {current.temperature}°
                            </div>
                            <div className="text-xl text-white/70 font-medium capitalize tracking-wide">
                                {current.weather_descriptions[0]}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                            <Wind className="w-6 h-6 text-blue-400" />
                            <div>
                                <p className="text-white/40 text-[10px] font-bold uppercase">Wind</p>
                                <p className="text-white font-semibold text-sm">{current.wind_speed} km/h</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                            <Droplets className="w-6 h-6 text-cyan-400" />
                            <div>
                                <p className="text-white/40 text-[10px] font-bold uppercase">Humidity</p>
                                <p className="text-white font-semibold text-sm">{current.humidity}%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <p className="text-white/30 text-[10px] font-bold uppercase mb-1">Pressure</p>
                        <p className="text-white font-medium">{current.pressure} mb</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white/30 text-[10px] font-bold uppercase mb-1">Precip</p>
                        <p className="text-white font-medium">{current.precip} mm</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white/30 text-[10px] font-bold uppercase mb-1">UV Index</p>
                        <p className="text-white font-medium">{current.uv_index}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-white/30 text-[10px] font-bold uppercase mb-1">Visibility</p>
                        <p className="text-white font-medium">{current.visibility} km</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WeatherCard;

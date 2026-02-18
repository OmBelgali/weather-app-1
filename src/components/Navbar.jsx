import React from 'react';
import { CloudSun, RefreshCw } from 'lucide-react';

const Navbar = ({ onRefresh }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-2xl pointer-events-auto">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <CloudSun className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-black text-xl tracking-tight hidden sm:block">SkyGlass</span>
            </div>

            <button
                onClick={onRefresh}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all pointer-events-auto"
            >
                <RefreshCw className="w-5 h-5" />
            </button>
        </nav>
    );
};

export default Navbar;

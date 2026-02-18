import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ErrorMessage = ({ message }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-500/20 backdrop-blur-md border border-red-500/30 p-6 rounded-2xl flex items-center gap-4 text-white max-w-md mx-auto my-8"
    >
        <AlertCircle className="w-8 h-8 text-red-400 shrink-0" />
        <div>
            <h3 className="font-bold text-lg">Error Occurred</h3>
            <p className="text-white/80">{message}</p>
        </div>
    </motion.div>
);

export default ErrorMessage;

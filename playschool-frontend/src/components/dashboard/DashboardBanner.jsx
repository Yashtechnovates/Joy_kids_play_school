/* eslint-disable no-unused-vars */

import { motion } from 'framer-motion';
import { SparklesIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const DashboardBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 md:p-8 text-white shadow-2xl"
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🎉 Special Announcement
            </h2>
            <p className="text-white/90">
              Annual Day Celebration on December 15th! Parents are cordially invited.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
              <div className="text-2xl font-bold">15</div>
              <div className="text-xs">Days Left</div>
            </div>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <TrophyIcon className="w-32 h-32" />
      </div>
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 left-0 opacity-10"
      >
        <RocketLaunchIcon className="w-24 h-24" />
      </motion.div>
    </motion.div>
  );
};

export default DashboardBanner;
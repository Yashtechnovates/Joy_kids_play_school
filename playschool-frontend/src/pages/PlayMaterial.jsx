/* eslint-disable no-unused-vars */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  RocketLaunchIcon, 
  SwatchIcon, 
  CubeIcon,
  MusicalNoteIcon,
  HomeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';
import IndoorGames from '../components/playMaterial/IndoorGames';
import OutdoorGames from '../components/playMaterial/OutdoorGames';

const PlayMaterial = () => {
  const stats = [
    { value: '50+', label: 'Play Equipments', icon: CubeIcon, description: 'Variety of engaging toys' },
    { value: '100%', label: 'Safe Environment', icon: ShieldCheckIcon, description: 'Child-safe certified' },
    { value: '300+', label: 'Happy Kids', icon: HeartIcon, description: 'Loving our play area' },
  ];

  const safetyFeatures = [
    'Soft flooring throughout playground',
    'Rounded edges on all equipment',
    'Regular safety inspections',
    'First-aid trained staff',
    'Age-appropriate toys',
    'Non-toxic materials'
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-8 text-white"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kids Play Materials</h1>
            <p className="text-xl opacity-90">Learning through fun and play 🎮</p>
          </div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 right-10 text-8xl opacity-20"
          >
            🧸
          </motion.div>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <stat.icon className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-600 mt-2 font-semibold">{stat.label}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Indoor Games Section with Sliding Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <SparklesIcon className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl font-bold gradient-text">🎪 Indoor Play Materials</h2>
          </div>
          <IndoorGames />
        </motion.div>

        {/* Outdoor Games Section with Sliding Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center gap-3 mb-6 mt-12">
            <SparklesIcon className="w-8 h-8 text-green-500" />
            <h2 className="text-3xl font-bold gradient-text">🌳 Outdoor Play Area</h2>
          </div>
          <OutdoorGames />
        </motion.div>

        {/* Safety Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">🛡️ Safety Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50 cursor-pointer"
              >
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">🎨 Play Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['🧸', '🎪', '🎨', '🎭', '🎯', '🎮', '🧩', '🎲'].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                className="text-6xl p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl text-center cursor-pointer"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PlayMaterial;
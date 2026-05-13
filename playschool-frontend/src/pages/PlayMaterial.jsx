import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  SwatchIcon, 
  CubeIcon,
  MusicalNoteIcon,
  HomeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const PlayMaterial = () => {
  const indoorGames = [
    { name: 'Building Blocks', icon: CubeIcon, color: 'from-blue-400 to-cyan-500', desc: 'Creative construction sets' },
    { name: 'Puzzle Toys', icon: SwatchIcon, color: 'from-purple-400 to-pink-500', desc: 'Brain development games' },
    { name: 'Toy Cars', icon: RocketLaunchIcon, color: 'from-red-400 to-orange-500', desc: 'Mini vehicle collection' },
    { name: 'Musical Toys', icon: MusicalNoteIcon, color: 'from-green-400 to-emerald-500', desc: 'Sound and rhythm play' },
  ];

  const outdoorGames = [
    { name: 'Slides', icon: RocketLaunchIcon, color: 'from-orange-400 to-red-500' },
    { name: 'Swings', icon: HeartIcon, color: 'from-pink-400 to-rose-500' },
    { name: 'Ball Pool', icon: GlobeAltIcon, color: 'from-blue-400 to-indigo-500' },
    { name: 'Trampoline', icon: HomeIcon, color: 'from-green-400 to-teal-500' },
  ];

  const stats = [
    { value: '50+', label: 'Play Equipments', icon: CubeIcon },
    { value: '100%', label: 'Safe Environment', icon: ShieldCheckIcon },
    { value: '300+', label: 'Happy Kids', icon: HeartIcon },
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
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-16 h-16 mx-auto mb-4 text-purple-500" />
              <div className="text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Indoor Games */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">🎪 Indoor Play Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indoorGames.map((game, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`rounded-2xl p-6 bg-gradient-to-br ${game.color} text-white cursor-pointer`}
              >
                <game.icon className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="opacity-90 text-sm">{game.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outdoor Games */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">🌳 Outdoor Play Area</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorGames.map((game, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`rounded-2xl p-6 bg-gradient-to-br ${game.color} text-white text-center`}
              >
                <game.icon className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{game.name}</h3>
              </motion.div>
            ))}
          </div>
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
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50"
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
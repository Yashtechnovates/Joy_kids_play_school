import { motion } from 'framer-motion';
import { 
  HomeIcon,
  HeartIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CameraIcon,
  FireIcon
} from '@heroicons/react/24/solid';

const OutdoorGames = () => {
  const outdoorGamesList = [
    {
      id: 1,
      name: 'Giant Slides',
      icon: RocketLaunchIcon,
      color: 'from-orange-400 to-red-500',
      desc: 'Exciting spiral and straight slides for adventurous outdoor fun',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop',
      features: ['Safe landing zone', 'Multiple heights', 'Supervised area']
    },
    {
      id: 2,
      name: 'Musical Swings',
      icon: HeartIcon,
      color: 'from-pink-400 to-rose-500',
      desc: 'Joyful swinging experience with musical elements and safety harness',
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4c66b2257?w=400&h=300&fit=crop',
      features: ['Soft seats', 'Safety belts', 'Musical feature']
    },
    {
      id: 3,
      name: 'Ball Pool',
      icon: GlobeAltIcon,
      color: 'from-blue-400 to-indigo-500',
      desc: 'Colorful ball pit with thousands of safe, non-toxic plastic balls',
      image: 'https://images.unsplash.com/photo-1577696467903-ee4b9e2d7a6b?w=400&h=300&fit=crop',
      features: ['5000+ balls', 'Soft padding', 'Regular cleaning']
    },
    {
      id: 4,
      name: 'Trampoline Park',
      icon: HomeIcon,
      color: 'from-green-400 to-teal-500',
      desc: 'Safe, enclosed trampolines for healthy jumping exercise',
      image: 'https://images.unsplash.com/photo-1577696467903-ee4b9e2d7a6b?w=400&h=300&fit=crop',
      features: ['Safety nets', 'Supervised jumps', 'Age-appropriate zones']
    },
    {
      id: 5,
      name: 'Sand Play Area',
      icon: CameraIcon,
      color: 'from-yellow-400 to-amber-500',
      desc: 'Creative sandbox with tools for building and exploration',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      features: ['Clean sand', 'Play tools', 'Shaded area']
    },
    {
      id: 6,
      name: 'Climbing Frames',
      icon: FireIcon,
      color: 'from-purple-400 to-indigo-500',
      desc: 'Safe climbing structures for physical development and adventure',
      image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41e27c1?w=400&h=300&fit=crop',
      features: ['Soft landing', 'Grip handles', 'Multiple levels']
    }
  ];

  // Animation variants for sliding from left to right
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {outdoorGamesList.map((game) => (
        <motion.div
          key={game.id}
          variants={cardVariants}
          whileHover="hover"
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {/* Image Section */}
          <div className="relative h-48 overflow-hidden">
            <motion.img 
              src={game.image} 
              alt={game.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            <div className="absolute top-3 left-3">
              <div className={`p-2 rounded-full bg-gradient-to-br ${game.color} text-white shadow-lg`}>
                <game.icon className="w-6 h-6" />
              </div>
            </div>
            {/* Badge */}
            <div className="absolute bottom-3 right-3">
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-gray-700">
                Outdoor Fun
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 gradient-text">{game.name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{game.desc}</p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {game.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${game.color}`}></div>
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-2 w-full px-4 py-2 rounded-lg bg-gradient-to-r ${game.color} text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
            >
              View Details →
            </motion.button>
          </div>

          {/* Floating Animation Element */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: game.id * 0.2 }}
            className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br ${game.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OutdoorGames;
import { motion } from 'framer-motion';
import { 
  CubeIcon, 
  PuzzlePieceIcon, 
  RocketLaunchIcon, 
  MusicalNoteIcon,
  SwatchIcon,
  BookOpenIcon
} from '@heroicons/react/24/solid';

const IndoorGames = () => {
  const indoorGamesList = [
    {
      id: 1,
      name: 'Building Blocks',
      icon: CubeIcon,
      color: 'from-blue-400 to-cyan-500',
      desc: 'Creative construction sets that develop spatial awareness and motor skills',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop',
      benefits: ['Improves creativity', 'Enhances problem-solving', 'Develops fine motor skills']
    },
    {
      id: 2,
      name: 'Puzzle Toys',
      icon: PuzzlePieceIcon,
      color: 'from-purple-400 to-pink-500',
      desc: 'Brain development games that boost cognitive abilities and logical thinking',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=300&fit=crop',
      benefits: ['Enhances memory', 'Improves concentration', 'Develops patience']
    },
    {
      id: 3,
      name: 'Toy Cars',
      icon: RocketLaunchIcon,
      color: 'from-red-400 to-orange-500',
      desc: 'Mini vehicle collection for imaginative play and storytelling',
      image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=400&h=300&fit=crop',
      benefits: ['Encourages imagination', 'Develops hand-eye coordination', 'Teaches traffic rules']
    },
    {
      id: 4,
      name: 'Musical Toys',
      icon: MusicalNoteIcon,
      color: 'from-green-400 to-emerald-500',
      desc: 'Sound and rhythm play for auditory development and musical interest',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=300&fit=crop',
      benefits: ['Develops rhythm sense', 'Enhances listening skills', 'Boosts creativity']
    },
    {
      id: 5,
      name: 'Art & Craft',
      icon: SwatchIcon,
      color: 'from-pink-400 to-rose-500',
      desc: 'Creative expression through colors, shapes, and artistic materials',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
      benefits: ['Enhances creativity', 'Develops fine motor skills', 'Boosts self-expression']
    },
    {
      id: 6,
      name: 'Story Books',
      icon: BookOpenIcon,
      color: 'from-yellow-400 to-orange-500',
      desc: 'Interactive story books with colorful illustrations and engaging tales',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
      benefits: ['Improves vocabulary', 'Enhances imagination', 'Develops listening skills']
    }
  ];

  // Animation variants for sliding from right to left
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 30
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
      {indoorGamesList.map((game) => (
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
            <div className="absolute top-3 right-3">
              <div className={`p-2 rounded-full bg-gradient-to-br ${game.color} text-white shadow-lg`}>
                <game.icon className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 gradient-text">{game.name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{game.desc}</p>
            
            {/* Benefits Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {game.benefits.map((benefit, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${game.color} text-white`}
                >
                  {benefit}
                </motion.span>
              ))}
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mt-2 px-4 py-2 rounded-lg bg-gradient-to-r ${game.color} text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
            >
              Learn More →
            </motion.button>
          </div>

          {/* Decorative Element */}
          <motion.div
            className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${game.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IndoorGames;
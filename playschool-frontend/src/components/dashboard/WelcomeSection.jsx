
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 md:p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Let's make today a great learning day for our little stars!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-4xl">🌟</div>
          <div className="text-4xl">⭐</div>
          <div className="text-4xl">✨</div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;
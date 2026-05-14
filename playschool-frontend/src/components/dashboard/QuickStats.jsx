
import { motion } from 'framer-motion';

const QuickStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${stat.color} text-white`}
        >
          <div className="flex items-center justify-between mb-4">
            <stat.icon className="w-8 h-8 text-white/90" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <div className="text-3xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm opacity-90">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStats;
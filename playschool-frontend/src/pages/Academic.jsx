import { motion } from 'framer-motion';
import { 
  PaintBrushIcon, 
  BookOpenIcon, 
  MusicalNoteIcon,
  PuzzlePieceIcon,
  CalendarIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const Academic = () => {
  const activities = [
    { icon: PaintBrushIcon, title: 'Drawing & Coloring', desc: 'Express creativity through colors', color: 'from-pink-400 to-rose-500' },
    { icon: BookOpenIcon, title: 'Alphabet Learning', desc: 'Fun with ABCs and phonics', color: 'from-blue-400 to-cyan-500' },
    { icon: MusicalNoteIcon, title: 'Rhymes & Storytelling', desc: 'Nursery rhymes and stories', color: 'from-green-400 to-emerald-500' },
    { icon: PuzzlePieceIcon, title: 'Number Activities', desc: 'Counting made fun', color: 'from-purple-400 to-indigo-500' },
  ];

  const syllabus = {
    'Pre-KG': ['Sensory Activities', 'Basic Colors & Shapes', 'Nursery Rhymes', 'Social Skills'],
    'LKG': ['Alphabet Recognition', 'Number 1-20', 'Story Time', 'Basic Drawing'],
    'UKG': ['Reading & Writing', 'Number 1-100', 'Simple Math', 'Creative Arts']
  };

  const schedule = [
    { time: '9:00 - 9:30', activity: 'Morning Circle & Prayer' },
    { time: '9:30 - 10:15', activity: 'Interactive Learning' },
    { time: '10:15 - 10:45', activity: 'Snack Break' },
    { time: '10:45 - 11:30', activity: 'Creative Activities' },
    { time: '11:30 - 12:00', activity: 'Outdoor Play' },
    { time: '12:00 - 12:30', activity: 'Story Time' },
  ];

  const achievements = [
    { title: 'Best Curriculum Award', year: '2023', icon: TrophyIcon },
    { title: '100% Parent Satisfaction', year: '2023', icon: ChartBarIcon },
    { title: 'Innovation in Learning', year: '2022', icon: CalendarIcon },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Activities</h1>
            <p className="text-xl opacity-90">Fun-based learning for growing minds 📚</p>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-20">
            <BookOpenIcon className="w-40 h-40" />
          </div>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Learning Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`rounded-2xl p-6 bg-gradient-to-br ${activity.color} text-white cursor-pointer`}
              >
                <activity.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="opacity-90">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Syllabus Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Our Syllabus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(syllabus).map(([grade, subjects], index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4">{grade}</h3>
                <ul className="space-y-2">
                  {subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      {subject}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Weekly Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Weekly Schedule</h2>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all"
              >
                <span className="font-semibold text-purple-600">{item.time}</span>
                <span className="text-gray-700">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 2 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <achievement.icon className="w-16 h-16 mx-auto mb-3 text-purple-500" />
              <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
              <p className="text-gray-600 mt-2">Year: {achievement.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Academic;
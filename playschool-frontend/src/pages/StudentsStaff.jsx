import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon, 
  EnvelopeIcon, 
  BriefcaseIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const StudentsStaff = () => {
  const [activeTab, setActiveTab] = useState('teachers');

  const staff = {
    teachers: [
      { name: 'Sarah Johnson', role: 'Principal', experience: '15 years', subject: 'Early Childhood Education', image: 'https://randomuser.me/api/portraits/women/1.jpg', contact: 'sarah@playschool.com' },
      { name: 'Michael Chen', role: 'Senior Coordinator', experience: '10 years', subject: 'Child Psychology', image: 'https://randomuser.me/api/portraits/men/2.jpg', contact: 'michael@playschool.com' },
      { name: 'Emily Davis', role: 'Lead Teacher', experience: '8 years', subject: 'Creative Arts', image: 'https://randomuser.me/api/portraits/women/3.jpg', contact: 'emily@playschool.com' },
      { name: 'David Wilson', role: 'Activity Trainer', experience: '6 years', subject: 'Music & Movement', image: 'https://randomuser.me/api/portraits/men/4.jpg', contact: 'david@playschool.com' },
    ],
    support: [
      { name: 'Lisa Brown', role: 'Support Staff', experience: '5 years', subject: 'Student Care', image: 'https://randomuser.me/api/portraits/women/5.jpg', contact: 'lisa@playschool.com' },
      { name: 'James Taylor', role: 'Support Staff', experience: '4 years', subject: 'Safety & Security', image: 'https://randomuser.me/api/portraits/men/6.jpg', contact: 'james@playschool.com' },
    ]
  };

  const achievements = [
    { title: 'Best Play School Award', year: '2023', icon: TrophyIcon, color: 'from-yellow-400 to-orange-500' },
    { title: 'Teacher Excellence Award', year: '2023', icon: StarIcon, color: 'from-blue-400 to-cyan-500' },
    { title: 'Innovation in Education', year: '2022', icon: ChartBarIcon, color: 'from-green-400 to-emerald-500' },
  ];

  const performanceStats = [
    { label: 'Teacher Satisfaction', value: '96%', icon: UserGroupIcon },
    { label: 'Staff Retention', value: '92%', icon: BriefcaseIcon },
    { label: 'Training Hours/Year', value: '120+', icon: TrophyIcon },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 text-white"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff & Teachers</h1>
            <p className="text-xl opacity-90">Experienced teachers guiding every child with care ❤️</p>
          </div>
          <div className="absolute top-0 right-0 opacity-20">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
            </svg>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white/50 rounded-xl p-1">
          {['teachers', 'support'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              {tab === 'teachers' ? 'Teaching Staff' : 'Support Staff'}
            </button>
          ))}
        </div>

        {/* Staff Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {staff[activeTab].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full border-4 border-white object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-gray-600">
                      <BriefcaseIcon className="w-4 h-4" /> {member.experience}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <StarIcon className="w-4 h-4" /> {member.subject}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <EnvelopeIcon className="w-4 h-4" /> {member.contact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Our Achievements 🏆</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ rotate: 2 }}
                className={`rounded-xl p-6 bg-gradient-to-br ${achievement.color} text-white`}
              >
                <achievement.icon className="w-12 h-12 mb-3" />
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="opacity-90 mt-2">Year: {achievement.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default StudentsStaff;
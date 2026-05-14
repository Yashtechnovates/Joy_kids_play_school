
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PaintBrushIcon, 
  BookOpenIcon, 
  MusicalNoteIcon,
  PuzzlePieceIcon,
  CalendarIcon,
  ChartBarIcon,
  TrophyIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CheckCircleIcon,
  XCircleIcon,
  HeartIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';
import DashboardBanner from '../components/dashboard/DashboardBanner';
import QuickStats from '../components/dashboard/QuickStats';
import WelcomeSection from '../components/dashboard/WelcomeSection';

const Academic = () => {
  const [activeTab, setActiveTab] = useState('curriculum'); // 'curriculum' or 'dailyReport'
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

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

  // Add the missing achievements array
  const achievements = [
    { title: 'Best Curriculum Award', year: '2023', icon: TrophyIcon },
    { title: '100% Parent Satisfaction', year: '2023', icon: ChartBarIcon },
    { title: 'Innovation in Learning', year: '2022', icon: CalendarIcon },
  ];

  // Daily Report Data
  const dailyReportData = [
    {
      id: 'ST001',
      name: 'Emma Watson',
      profileImg: 'https://randomuser.me/api/portraits/women/1.jpg',
      todayActivity: 'Drawing & Coloring - Created beautiful butterfly artwork',
      participation: true,
      health: 'good',
      behavior: 'excellent',
      teacherNote: 'Very creative and attentive'
    },
    {
      id: 'ST002',
      name: 'Liam Smith',
      profileImg: 'https://randomuser.me/api/portraits/men/2.jpg',
      todayActivity: 'Alphabet Learning - Mastered letters A-F',
      participation: true,
      health: 'good',
      behavior: 'good',
      teacherNote: 'Shows great interest in learning'
    },
    {
      id: 'ST003',
      name: 'Sophia Johnson',
      profileImg: 'https://randomuser.me/api/portraits/women/3.jpg',
      todayActivity: 'Number Activities - Counting 1-20',
      participation: false,
      health: 'sick',
      behavior: 'average',
      teacherNote: 'Feeling unwell today, needs rest'
    },
    {
      id: 'ST004',
      name: 'Noah Brown',
      profileImg: 'https://randomuser.me/api/portraits/men/4.jpg',
      todayActivity: 'Rhymes & Storytelling - Participated in group activity',
      participation: true,
      health: 'good',
      behavior: 'excellent',
      teacherNote: 'Excellent storytelling skills'
    },
    {
      id: 'ST005',
      name: 'Isabella Davis',
      profileImg: 'https://randomuser.me/api/portraits/women/5.jpg',
      todayActivity: 'Puzzle Games - Solved complex puzzles',
      participation: true,
      health: 'good',
      behavior: 'good',
      teacherNote: 'Problem-solving skills improving'
    },
    {
      id: 'ST006',
      name: 'Mason Wilson',
      profileImg: 'https://randomuser.me/api/portraits/men/6.jpg',
      todayActivity: 'Music & Dance - Participated in rhythm activity',
      participation: false,
      health: 'good',
      behavior: 'average',
      teacherNote: 'Distracted during activity'
    }
  ];

  const curriculumDetails = {
    title: 'Comprehensive Learning Curriculum',
    description: 'Our play-based curriculum focuses on holistic development through engaging activities and experiential learning.',
    features: [
      'Child-centric learning approach',
      'Multi-sensory teaching methods',
      'Regular progress assessments',
      'Parent-teacher collaboration',
      'Creative expression opportunities',
      'Social-emotional learning'
    ],
    weeklyTopics: [
      'Week 1: Colors and Shapes',
      'Week 2: Animals and Nature',
      'Week 3: Numbers and Counting',
      'Week 4: Letters and Phonics'
    ]
  };

  const statsData = [
    { label: 'Total Students', value: '156', icon: UserGroupIcon, change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { label: 'Activities Today', value: '8', icon: StarIcon, change: '+2', color: 'from-purple-500 to-pink-500' },
    { label: 'Completion Rate', value: '94%', icon: CheckCircleIcon, change: '+5%', color: 'from-green-500 to-emerald-500' },
    { label: 'Happy Students', value: '98%', icon: HeartIcon, change: '+3%', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <WelcomeSection />

        {/* Dashboard Banner */}
        <DashboardBanner />

        {/* Quick Stats */}
        <QuickStats stats={statsData} />

        {/* Hero Section with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Activities</h1>
            <p className="text-xl opacity-90">Fun-based learning for growing minds 📚</p>
            
            {/* Tab Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'curriculum' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="w-5 h-5" />
                  Curriculum
                </div>
              </button>
              <button
                onClick={() => setActiveTab('dailyReport')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === 'dailyReport' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <DocumentTextIcon className="w-5 h-5" />
                  Daily Report
                </div>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-20">
            <BookOpenIcon className="w-40 h-40" />
          </div>
        </motion.div>

        {/* Dynamic Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'curriculum' ? (
            <motion.div
              key="curriculum"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Big Curriculum Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-8 w-full min-h-[40vh] bg-gradient-to-br from-purple-50 to-pink-50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold gradient-text mb-4">{curriculumDetails.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{curriculumDetails.description}</p>
                    <div className="space-y-3">
                      {curriculumDetails.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">Weekly Learning Topics</h3>
                    <div className="space-y-3">
                      {curriculumDetails.weeklyTopics.map((topic, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 10 }}
                          className="p-3 bg-white/60 rounded-xl flex items-center justify-between"
                        >
                          <span className="text-gray-800">{topic}</span>
                          <CalendarIcon className="w-5 h-5 text-purple-500" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Activities Grid */}
              <div>
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
              </div>

              {/* Syllabus Cards */}
              <div>
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
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dailyReport"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Date Picker */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h2 className="text-2xl font-bold gradient-text">Daily Student Report</h2>
                  <div className="flex items-center gap-3">
                    <label className="text-gray-600 font-semibold">Select Date:</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="px-4 py-2 rounded-xl border-2 border-purple-200 focus:border-purple-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Daily Report Table */}
              <div className="glass-card rounded-2xl p-6 overflow-x-auto">
                <div className="min-w-[800px]">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-purple-200">
                        <th className="text-left py-3 px-4 text-purple-600 font-semibold">Profile</th>
                        <th className="text-left py-3 px-4 text-purple-600 font-semibold">Student ID</th>
                        <th className="text-left py-3 px-4 text-purple-600 font-semibold">Today's Activity</th>
                        <th className="text-center py-3 px-4 text-purple-600 font-semibold">Participation</th>
                        <th className="text-center py-3 px-4 text-purple-600 font-semibold">Health Status</th>
                        <th className="text-center py-3 px-4 text-purple-600 font-semibold">Behavior</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dailyReportData.map((student, index) => (
                        <motion.tr
                          key={student.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-gray-100 hover:bg-purple-50/50 transition-all"
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img 
                                src={student.profileImg} 
                                alt={student.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <span className="font-medium text-gray-800">{student.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{student.id}</td>
                          <td className="py-3 px-4 text-gray-700 max-w-xs">
                            <div className="truncate" title={student.todayActivity}>
                              {student.todayActivity}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {student.participation ? (
                              <div className="flex items-center justify-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                                <span className="text-green-600 font-semibold">Present</span>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-2">
                                <XCircleIcon className="w-6 h-6 text-red-500" />
                                <span className="text-red-600 font-semibold">Absent</span>
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                              student.health === 'good' 
                                ? 'bg-green-100 text-green-700' 
                                : student.health === 'sick'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              <HeartIcon className="w-4 h-4" />
                              <span className="capitalize font-medium">{student.health}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                              student.behavior === 'excellent'
                                ? 'bg-purple-100 text-purple-700'
                                : student.behavior === 'good'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              <StarIcon className="w-4 h-4" />
                              <span className="capitalize font-medium">{student.behavior}</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {dailyReportData.filter(s => s.participation).length}/{dailyReportData.length}
                  </div>
                  <div className="text-sm text-gray-600">Present Today</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {dailyReportData.filter(s => s.health === 'good').length}
                  </div>
                  <div className="text-sm text-gray-600">Healthy Students</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-purple-600">
                    {dailyReportData.filter(s => s.behavior === 'excellent').length}
                  </div>
                  <div className="text-sm text-gray-600">Excellent Behavior</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(dailyReportData.filter(s => s.participation).length * 100 / dailyReportData.length)}%
                  </div>
                  <div className="text-sm text-gray-600">Participation Rate</div>
                </motion.div>
              </div>

              {/* Teacher's Note Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold gradient-text mb-4">Teacher's Observations</h3>
                <div className="space-y-3">
                  {dailyReportData.slice(0, 3).map((student, index) => (
                    <div key={index} className="p-3 bg-purple-50 rounded-xl">
                      <p className="font-semibold text-purple-700">{student.name}</p>
                      <p className="text-gray-600 text-sm mt-1">{student.teacherNote}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Academic;
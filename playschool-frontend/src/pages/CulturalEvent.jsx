import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { CalendarIcon, MapPinIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const CulturalEvent = () => {
  const events = [
    { name: 'Annual Day Celebration', date: 'Dec 15, 2024', venue: 'School Auditorium', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop' },
    { name: 'Diwali Fest', date: 'Nov 12, 2024', venue: 'Main Ground', image: 'https://images.unsplash.com/photo-1542736667-069246bdbcff?w=400&h=300&fit=crop' },
    { name: 'Christmas Carnival', date: 'Dec 25, 2024', venue: 'Activity Hall', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop' }
  ];

  const festivals = [
    { name: 'Ganesh Chaturthi', month: 'Sep', icon: '🎉' },
    { name: 'Navratri', month: 'Oct', icon: '💃' },
    { name: 'Christmas', month: 'Dec', icon: '🎄' },
    { name: 'Pongal', month: 'Jan', icon: '🌾' }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cultural Events</h1>
          <p className="text-xl opacity-90">Celebrating diversity and traditions 🎊</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="flex items-center gap-2 text-gray-600 mb-1"><CalendarIcon className="w-4 h-4" /> {event.date}</p>
                <p className="flex items-center gap-2 text-gray-600"><MapPinIcon className="w-4 h-4" /> {event.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold gradient-text mb-6">Festivals Celebrated</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {festivals.map((festival, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100"
              >
                <div className="text-4xl mb-2">{festival.icon}</div>
                <div className="font-semibold">{festival.name}</div>
                <div className="text-sm text-gray-600">{festival.month}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CulturalEvent;
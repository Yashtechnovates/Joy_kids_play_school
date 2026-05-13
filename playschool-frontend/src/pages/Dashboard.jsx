import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  StarIcon,
  CalendarIcon,
  FaceSmileIcon,
  PaintBrushIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0d?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596462502278-27bfdc6bd7a8?w=800&h=400&fit=crop',
  ];

  const stats = [
    { icon: UsersIcon, label: 'Happy Students', value: '350+', color: 'from-blue-500 to-cyan-500' },
    { icon: AcademicCapIcon, label: 'Expert Teachers', value: '25+', color: 'from-purple-500 to-pink-500' },
    { icon: BuildingLibraryIcon, label: 'Classrooms', value: '12', color: 'from-green-500 to-emerald-500' },
    { icon: StarIcon, label: 'Activities', value: '30+', color: 'from-orange-500 to-red-500' },
  ];

  const features = [
    { icon: FaceSmileIcon, title: 'Safe Environment', desc: 'Child-safe infrastructure with CCTV monitoring' },
    { icon: PaintBrushIcon, title: 'Creative Learning', desc: 'Art, music, and creative activities daily' },
    { icon: MusicalNoteIcon, title: 'Music & Dance', desc: 'Professional music and dance classes' },
    { icon: CalendarIcon, title: 'Regular Events', desc: 'Monthly events and celebrations' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            Welcome to PlaySchool!
          </h1>
          <p className="text-gray-600 text-lg">
            Where learning meets fun and every child shines bright ✨
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-96"
        >
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${stat.color} text-white`}
            >
              <stat.icon className="w-12 h-12 mb-4 text-white/90" />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all"
              >
                <feature.icon className="w-12 h-12 text-purple-500" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* School Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">School Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Years of Excellence', value: '10+' },
              { label: 'Awards Won', value: '25+' },
              { label: 'Field Trips/Year', value: '6' },
              { label: 'Parent Satisfaction', value: '98%' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
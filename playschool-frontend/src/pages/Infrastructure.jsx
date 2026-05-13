
import { motion } from 'framer-motion';
import { BuildingLibraryIcon, AcademicCapIcon, WifiIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import MainLayout from '../layouts/MainLayout';

const Infrastructure = () => {
  const facilities = [
    { name: 'Smart Classrooms', icon: AcademicCapIcon, desc: 'Digital learning with smart boards', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop' },
    { name: 'Library', icon: BuildingLibraryIcon, desc: 'Wide collection of children books', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop' },
    { name: 'Computer Lab', icon: WifiIcon, desc: 'Age-appropriate computer learning', image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&h=300&fit=crop' },
    { name: 'Security System', icon: ShieldCheckIcon, desc: '24/7 CCTV surveillance', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop' }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
          <p className="text-xl opacity-90">Modern facilities for bright futures 🏫</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <img src={facility.image} alt={facility.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <facility.icon className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold">{facility.name}</h3>
                </div>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Infrastructure;
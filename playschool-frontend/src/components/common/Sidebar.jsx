import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  AcademicCapIcon, 
  PuzzlePieceIcon, 
  CalendarIcon, 
  BuildingLibraryIcon, 
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { path: '/', name: 'Dashboard', icon: HomeIcon },
    { path: '/academic', name: 'Academic', icon: AcademicCapIcon },
    { path: '/play-material', name: 'Kids Play Material', icon: PuzzlePieceIcon },
    { path: '/cultural-event', name: 'Cultural Event', icon: CalendarIcon },
    { path: '/infrastructure', name: 'Infrastructure', icon: BuildingLibraryIcon },
    { path: '/students-staff', name: 'Staff Details', icon: UsersIcon },
  ];

  return (
    <motion.aside 
      className={`fixed left-0 top-0 h-full bg-gradient-to-b from-purple-800 to-pink-700 text-white shadow-2xl z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-white/20 flex justify-between items-center">
          {isOpen && (
            <motion.h1 
              className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              PlaySchool
            </motion.h1>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-white/20 transition-all"
          >
            {isOpen ? <ChevronLeftIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 py-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-lg transition-all duration-300
                ${isActive ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'}
              `}
            >
              <item.icon className="w-6 h-6" />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {isOpen && (
          <motion.div 
            className="p-4 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-xs text-white/60 text-center">
              © 2024 PlaySchool
            </div>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
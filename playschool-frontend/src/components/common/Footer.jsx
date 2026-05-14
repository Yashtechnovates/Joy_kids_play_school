
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  HeartIcon
} from '@heroicons/react/24/solid'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Academic', path: '/academic' },
    { name: 'Play Material', path: '/play-material' },
    { name: 'Cultural Event', path: '/cultural-event' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Staff Details', path: '/students-staff' },
  ];

  const contactInfo = [
    { icon: MapPinIcon, text: '123 Play School Street, Kid City, KC 12345', color: 'text-red-500' },
    { icon: PhoneIcon, text: '+1 234 567 8900', color: 'text-green-500' },
    { icon: EnvelopeIcon, text: 'info@playschool.com', color: 'text-blue-500' },
    { icon: ClockIcon, text: 'Mon-Fri: 8:00 AM - 3:00 PM', color: 'text-purple-500' },
  ];

  const openingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 12:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg className="relative block w-full h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="text-3xl">🎨</div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  PlaySchool
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nurturing young minds with love, care, and quality education. 
                Creating a foundation for lifelong learning and success.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
                Contact Us
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <info.icon className={`w-5 h-5 ${info.color} mt-0.5 group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                      {info.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
                Opening Hours
              </h3>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-between items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-gray-300 text-sm font-medium">{schedule.day}</span>
                    <span className="text-white text-sm">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2 text-gray-300">Subscribe to Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center text-gray-400 text-sm">
              <p className="flex items-center gap-1">
                © {currentYear} PlaySchool. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/faq" className="hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
              </div>
              <p className="flex items-center gap-1">
                Made with <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" /> for little learners
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
        </svg>
      </div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 right-10 opacity-5 pointer-events-none"
      >
        <div className="text-8xl">🎓</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate developer with expertise in creating modern web applications.
              With a focus on user experience and clean code, I bring ideas to life through
              technology.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started several years ago, and since then,
              I've worked on various projects that have helped me grow both technically
              and creatively.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-400 px-6 py-2 rounded-full hover:bg-blue-600/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </motion.div>
            {/* Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-blue-500/20 blur-xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
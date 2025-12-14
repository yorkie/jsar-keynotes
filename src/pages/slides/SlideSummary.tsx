import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Github, FileText, ArrowRight } from 'lucide-react';

const SlideSummary: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  return (
    <SlideLayout {...nav} title="Key Takeaways">
      <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            JSAR = Familiar Web Tech + Native 3D Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Definition', desc: 'Bring HTML elements into real 3D space' },
              { title: 'Method', desc: 'Platform compatibility + spatial reality assumptions' },
              { title: 'Value', desc: 'Zero learning curve, immersive experiences' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5">
                <div className="text-blue-400 font-bold mb-2">{item.title}</div>
                <div className="text-gray-300 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Join the spatial web revolution now!</h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/m-creativelab/jsar-runtime"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://m-creativelab.github.io/jsar-runtime/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all"
            >
              <FileText size={20} />
              Docs
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </SlideLayout>
  );
};

export default SlideSummary;

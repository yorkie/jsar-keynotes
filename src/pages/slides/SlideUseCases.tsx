import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Building2, ShoppingBag, GraduationCap, Briefcase } from 'lucide-react';

const SlideUseCases: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const cases = [
    { 
      icon: Building2, 
      title: 'Enterprise', 
      items: ['3D data dashboards', 'Immersive product showcases', 'Virtual collaboration spaces'],
      color: 'blue'
    },
    { 
      icon: ShoppingBag, 
      title: 'E-commerce', 
      items: ['3D product viewing', 'Virtual try-on', 'Spatial shopping experiences'],
      color: 'purple'
    },
    { 
      icon: GraduationCap, 
      title: 'Education', 
      items: ['Interactive 3D textbooks', 'Virtual labs', 'Immersive history experiences'],
      color: 'green'
    },
    { 
      icon: Briefcase, 
      title: 'Productivity', 
      items: ['Unlimited 3D workspace', 'Parallel multitasking', 'Spatial data organization'],
      color: 'orange'
    },
  ];

  return (
    <SlideLayout {...nav} title="Use Cases">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full content-center max-w-6xl mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className={`shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-${c.color}-500/20 text-${c.color}-400`}>
              <c.icon size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${c.color}-400 mr-2`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default SlideUseCases;

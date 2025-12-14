import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Rocket, Star, Zap } from 'lucide-react';

const SlideFuture: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const timeline = [
    { year: '2024', icon: Rocket, title: '基础夯实', items: ['JSAR 核心功能完善', '主流浏览器支持 WebXR', '开发者工具生态建立'] },
    { year: '2025', icon: Star, title: '生态爆发', items: ['商业应用案例增多', '硬件设备普及', '标准化进程加速'] },
    { year: '2026+', icon: Zap, title: '全面融合', items: ['空间网络成为主流', '新的交互范式确立', '虚实融合体验成熟'] },
  ];

  return (
    <SlideLayout {...nav} title="未来展望">
      <div className="relative h-full flex flex-col justify-center">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -translate-y-1/2 hidden md:block opacity-30" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <item.icon size={28} className="text-blue-400" />
                </div>
                
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 w-full backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-400 text-left">
                    {item.items.map((sub, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-400 rounded-full shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideFuture;

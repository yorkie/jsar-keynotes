import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { AppWindow, ArrowDown } from 'lucide-react';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import openxr from '@/assets/openxr.svg';
import unity from '@/assets/unity.svg';
import unreal from '@/assets/unreal.svg';

const SlideArchitecture: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  const apps = ['Web App A', 'Web App B', 'Web App C'];

  return (
    <SlideLayout {...nav} title="Runtime Architecture">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto max-h-[65vh]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300 mb-4 text-lg"
        >
          Client · Spatial App Processes
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {apps.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <AppWindow size={22} />
                </div>
                <div className="text-white font-semibold">{name}</div>
              </div>
              <div className="text-xs text-gray-400">WebGL / WebXR / WebGPU</div>
              <div className="text-xs text-gray-400 mt-1">2D + 3D UI</div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full my-4 gap-8 text-white/70">
          {apps.map((_, i) => (
            <ArrowDown key={i} size={20} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Server · System Rendering Host</h3>
              <span className="text-xs font-mono bg-black/20 px-2 py-1 rounded text-white/80">RHI: WebGPU</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">XR Event Management</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">GPU RenderPass Fusion</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">Spatial Multimedia Management</div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center w-full my-3 text-white/70">
          <ArrowDown size={20} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-700/20 to-blue-700/20 border border-white/10">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-white">RHI Embedding · Host Ecosystems</h4>
              <span className="text-xs font-mono bg-black/20 px-2 py-1 rounded text-white/80">Embed via RHI</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                <img src={openxr} className="w-6 h-6" alt="OpenXR" />
                OpenXR
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                <img src={unity} className="w-6 h-6" alt="Unity" />
                Unity
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-2">
                <img src={unreal} className="w-6 h-6" alt="Unreal Engine" />
                Unreal Engine
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 text-xs text-gray-400">Multiple web apps are composited by a single server host and embedded via RHI into OpenXR / Unity / Unreal</div>
      </div>
    </SlideLayout>
  );
};

export default SlideArchitecture;

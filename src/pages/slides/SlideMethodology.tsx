import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { getSlideNavigation } from '@/config/slides';
import { useLocation } from 'react-router-dom';
import { Layout, BoxSelect } from 'lucide-react';

const SlideMethodology: React.FC = () => {
  const location = useLocation();
  const nav = getSlideNavigation(location.pathname);

  return (
    <SlideLayout {...nav} title="Core Methodology">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        {/* Method 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full group-hover:bg-blue-600/30 transition-all duration-500" />
          <div className="relative p-8 border border-blue-500/30 bg-gray-900/80 backdrop-blur-sm rounded-3xl text-center hover:border-blue-400 transition-colors">
            <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
              <Layout size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Platform Compatibility Assumption</h3>
            <p className="text-gray-300 mb-6">
              "Any existing 2D web content should work naturally in spatial environments"
            </p>
          <ul className="text-left space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Zero learning curve: use HTML/CSS/JS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              No game-engine experience required
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Leverage the existing Web ecosystem
            </li>
          </ul>
          </div>
        </motion.div>

        {/* Method 2 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full group-hover:bg-purple-600/30 transition-all duration-500" />
          <div className="relative p-8 border border-purple-500/30 bg-gray-900/80 backdrop-blur-sm rounded-3xl text-center hover:border-purple-400 transition-colors">
            <div className="w-20 h-20 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-purple-400">
              <BoxSelect size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Spatial Reality Assumption</h3>
            <p className="text-gray-300 mb-6">In spatial environments, any 2D element is a 3D element that cannot modify its z coordinate</p>
            <ul className="text-left space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Native spatial properties support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Support for monocular and stereoscopic rendering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                Adapt to diverse displays (VR/AR/Desktop)
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default SlideMethodology;

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, Globe, Smartphone, Monitor, Headphones, Code } from 'lucide-react';

const ArchitecturePage = () => {
  const renderArchitecture = () => (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <div className="text-center mb-8">
        <h4 className="text-2xl font-semibold text-white mb-4">JSAR引擎架构</h4>
        <p className="text-gray-400">分层架构设计，支持Web标准与3D空间渲染的无缝集成</p>
      </div>
      
      <div className="space-y-6">
        {/* Web标准层 */}
        <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 text-blue-400 mr-3" />
            <h5 className="text-lg font-semibold text-white">Web标准层</h5>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-500/20 rounded-lg p-3 text-center">
              <div className="text-blue-300 font-medium">HTML5</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3 text-center">
              <div className="text-blue-300 font-medium">CSS3</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3 text-center">
              <div className="text-blue-300 font-medium">JavaScript</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3 text-center">
              <div className="text-blue-300 font-medium">TypeScript</div>
            </div>
          </div>
        </div>

        {/* JSAR引擎核心 */}
        <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
          <div className="flex items-center mb-4">
            <Cpu className="w-6 h-6 text-purple-400 mr-3" />
            <h5 className="text-lg font-semibold text-white">JSAR引擎核心</h5>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-500/20 rounded-lg p-4">
              <h6 className="text-purple-300 font-medium mb-2">渲染引擎</h6>
              <p className="text-gray-400 text-sm">高性能浏览器引擎，Rust + C/C++实现</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4">
              <h6 className="text-purple-300 font-medium mb-2">空间化DOM</h6>
              <p className="text-gray-400 text-sm">3D空间中的HTML元素渲染和处理</p>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4">
              <h6 className="text-purple-300 font-medium mb-2">统一渲染管线</h6>
              <p className="text-gray-400 text-sm">高效的GPU渲染批次合并</p>
            </div>
          </div>
        </div>

        {/* 渲染与交互层 */}
        <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-green-400 mr-3" />
            <h5 className="text-lg font-semibold text-white">渲染与交互层</h5>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-lg p-4">
              <h6 className="text-green-300 font-medium mb-2">3D图形</h6>
              <div className="space-y-2">
                <div className="text-gray-400 text-sm">• WebGL 1.0/2.0 完整支持</div>
                <div className="text-gray-400 text-sm">• WebGPU 开发中</div>
              </div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4">
              <h6 className="text-green-300 font-medium mb-2">WebXR集成</h6>
              <div className="space-y-2">
                <div className="text-gray-400 text-sm">• 空间追踪</div>
                <div className="text-gray-400 text-sm">• 手势识别</div>
                <div className="text-gray-400 text-sm">• 立体渲染</div>
              </div>
            </div>
          </div>
        </div>

        {/* 平台与设备层 */}
        <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20">
          <div className="flex items-center mb-4">
            <Layers className="w-6 h-6 text-orange-400 mr-3" />
            <h5 className="text-lg font-semibold text-white">平台与设备层</h5>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-orange-500/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Smartphone className="w-5 h-5 text-orange-400 mr-2" />
                <h6 className="text-orange-300 font-medium">Android</h6>
              </div>
              <div className="text-gray-400 text-sm">OpenGL ES 3</div>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Monitor className="w-5 h-5 text-orange-400 mr-2" />
                <h6 className="text-orange-300 font-medium">macOS</h6>
              </div>
              <div className="text-gray-400 text-sm">OpenGL / Metal</div>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Monitor className="w-5 h-5 text-orange-400 mr-2" />
                <h6 className="text-orange-300 font-medium">Windows</h6>
              </div>
              <div className="text-gray-400 text-sm">D3D11</div>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Headphones className="w-5 h-5 text-orange-400 mr-2" />
                <h6 className="text-orange-300 font-medium">XR设备</h6>
              </div>
              <div className="text-gray-400 text-sm">VR/AR头显</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechStack = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
          <Code className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">引擎核心</h4>
        <p className="text-gray-400 mb-4">Rust + C/C++ 高性能浏览器引擎实现</p>
        <div className="space-y-2">
          <div className="text-sm text-blue-400">• 内存安全</div>
          <div className="text-sm text-blue-400">• 零成本抽象</div>
          <div className="text-sm text-blue-400">• 并发处理</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">Web标准</h4>
        <p className="text-gray-400 mb-4">完整的现代Web标准支持</p>
        <div className="space-y-2">
          <div className="text-sm text-green-400">• HTML5子集</div>
          <div className="text-sm text-green-400">• CSS3部分支持</div>
          <div className="text-sm text-green-400">• 完整DOM API</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">3D图形</h4>
        <p className="text-gray-400 mb-4">先进的3D图形API支持</p>
        <div className="space-y-2">
          <div className="text-sm text-purple-400">• WebGL 1.0/2.0</div>
          <div className="text-sm text-purple-400">• WebGPU (开发中)</div>
          <div className="text-sm text-purple-400">• 立体渲染</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
          <Headphones className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">空间计算</h4>
        <p className="text-gray-400 mb-4">完整的WebXR设备API实现</p>
        <div className="space-y-2">
          <div className="text-sm text-orange-400">• 空间追踪</div>
          <div className="text-sm text-orange-400">• 手势识别</div>
          <div className="text-sm text-orange-400">• 参考空间</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
          <Cpu className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">脚本支持</h4>
        <p className="text-gray-400 mb-4">现代JavaScript和TypeScript支持</p>
        <div className="space-y-2">
          <div className="text-sm text-cyan-400">• ES2023</div>
          <div className="text-sm text-cyan-400">• TypeScript</div>
          <div className="text-sm text-cyan-400">• WebAssembly</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
      >
        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
          <Layers className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">模块系统</h4>
        <p className="text-gray-400 mb-4">灵活的模块化和并发支持</p>
        <div className="space-y-2">
          <div className="text-sm text-indigo-400">• ES模块</div>
          <div className="text-sm text-indigo-400">• Web Worker</div>
          <div className="text-sm text-indigo-400">• 动态导入</div>
        </div>
      </motion.div>
    </div>
  );

  const renderPerformance = () => (
    <div className="grid md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
      >
        <div className="text-4xl font-bold text-blue-400 mb-2">≤10</div>
        <div className="text-white font-semibold mb-2">GPU绘制调用</div>
        <div className="text-gray-400 text-sm">每帧动态批次合并</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
      >
        <div className="text-4xl font-bold text-purple-400 mb-2">60+</div>
        <div className="text-white font-semibold mb-2">FPS目标</div>
        <div className="text-gray-400 text-sm">跨平台一致性</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
      >
        <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
        <div className="text-white font-semibold mb-2">像素一致性</div>
        <div className="text-gray-400 text-sm">所有平台统一渲染</div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-indigo-900/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Cpu className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            技术架构
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            JSAR采用分层架构设计，将Web标准与3D空间渲染无缝集成，
            为空间网络提供高性能、跨平台的浏览器引擎解决方案
          </motion.p>
        </motion.div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">架构概览</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              从Web内容到GPU渲染的完整数据流，展示JSAR引擎的核心组件和交互关系
            </p>
          </motion.div>

          {renderArchitecture()}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">技术栈</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              JSAR采用现代化的技术栈，确保高性能、可扩展性和跨平台兼容性
            </p>
          </motion.div>

          {renderTechStack()}
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">性能指标</h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              通过先进的渲染优化技术，JSAR实现了卓越的性能表现
            </p>
          </motion.div>

          {renderPerformance()}
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              跨平台支持
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              JSAR支持多种渲染后端，确保在所有主流平台上提供一致的高性能体验
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Android</div>
                <div className="text-gray-400 text-sm">OpenGL ES 3</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Monitor className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-semibold">macOS</div>
                <div className="text-gray-400 text-sm">OpenGL / Metal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Monitor className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-semibold">Windows</div>
                <div className="text-gray-400 text-sm">D3D11</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Headphones className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-white font-semibold">XR设备</div>
                <div className="text-gray-400 text-sm">VR/AR头显</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturePage;
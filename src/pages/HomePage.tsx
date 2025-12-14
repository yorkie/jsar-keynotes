import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Globe, Zap, Users, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 sm:mb-6">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            JSAR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-light px-2"
          >
            空间网络浏览器引擎
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            JSAR（JavaScript Augmented Reality）是一个专为空间网络设计的开源浏览器引擎。
            它让Web开发者能够使用熟悉的HTML5、CSS3和TypeScript技术创建沉浸式3D体验，
            将VR、AR和MR无缝融合到物理世界和数字虚拟环境中。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link
              to="/architecture"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              探索技术架构
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
            
            <div className="flex gap-2 sm:gap-4">
              <a
                href="https://github.com/m-creativelab/jsar-runtime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-600 text-sm sm:text-base"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              
              <a
                href="https://m-creativelab.github.io/jsar-runtime/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-4 bg-gray-800/50 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-600"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                官网
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-white mb-4">传统2D浏览器的局限性</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              在空间计算时代，传统浏览器无法满足3D空间内容的需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">平面限制</h4>
                    <p className="text-gray-400">HTML元素被限制在2D平面，无法表达真实的3D空间关系</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">性能瓶颈</h4>
                    <p className="text-gray-400">复杂的3D变换和渲染需要大量GPU调用，性能开销巨大</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">XR集成困难</h4>
                    <p className="text-gray-400">WebXR集成复杂，立体渲染和空间交互支持不完善</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-white mb-4">JSAR的解决方案</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              通过3D优先设计，重新定义Web浏览体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">Web开发者友好</h4>
              <p className="text-gray-400 mb-6">
                使用熟悉的HTML5、CSS3和TypeScript技术，无需学习新的3D编程语言
              </p>
              <div className="text-sm text-blue-400 font-medium">
                深度Chrome DevTools集成，无缝调试和性能分析
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">高性能渲染</h4>
              <p className="text-gray-400 mb-6">
                动态批处理所有空间化HTML元素，≤10个GPU绘制调用每帧
              </p>
              <div className="text-sm text-purple-400 font-medium">
                跨平台像素级一致性，支持桌面、移动和XR设备
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">XR原生支持</h4>
              <p className="text-gray-400 mb-6">
                完整的WebXR设备API支持，包括空间追踪、手势识别和立体渲染
              </p>
              <div className="text-sm text-green-400 font-medium">
                Unity插件可用，Unreal Engine集成计划中
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              准备探索空间网络的未来？
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              深入了解JSAR的技术架构，了解它是如何重新定义Web浏览体验的
            </p>
            <Link
              to="/architecture"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              查看技术架构
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
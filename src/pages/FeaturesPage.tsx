import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Eye, Globe, Zap, Layers, Move3D, Headphones } from 'lucide-react';

const FeaturesPage = () => {
  const [activeDemo, setActiveDemo] = useState('spatial-dom');

  const demos = [
    {
      id: 'spatial-dom',
      title: '空间化DOM',
      icon: Layers,
      description: 'HTML元素在3D空间中的真实坐标定位',
      code: `// 空间化DOM示例
const element = document.getElementById('spatial-div');

// 设置3D空间位置
element.style.transform = 'translate3d(100px, 50px, -200px)';
element.style.transform += 'rotateY(15deg)';

// JSAR扩展属性
element.spatialPosition = { x: 2.0, y: 1.5, z: -3.0 };
element.spatialRotation = { x: 0, y: 15, z: 0 };
element.spatialScale = { x: 1.2, y: 1.2, z: 1.2 };`,
      visual: (
        <div className="relative w-full h-64 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 3D空间网格 */}
              <div className="absolute inset-0 w-48 h-48 border-2 border-blue-400/30 rounded-lg transform rotate-45" />
              <div className="absolute inset-0 w-48 h-48 border-2 border-purple-400/30 rounded-lg transform rotate-45 translate-z-4" />
              
              {/* 空间化元素 */}
              <motion.div
                className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white text-center shadow-lg"
                animate={{
                  rotateY: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-sm font-semibold">空间化元素</div>
                <div className="text-xs opacity-75">3D坐标: (2, 1.5, -3)</div>
              </motion.div>
            </div>
          </div>
          
          {/* 坐标轴 */}
          <div className="absolute bottom-4 left-4 flex space-x-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-0.5 bg-red-500 mr-1" />
              <span className="text-red-400">X</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-0.5 bg-green-500 mr-1" />
              <span className="text-green-400">Y</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-0.5 bg-blue-500 mr-1" />
              <span className="text-blue-400">Z</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'webxr-integration',
      title: 'WebXR集成',
      icon: Move3D,
      description: 'VR/AR设备支持和交互能力展示',
      code: `// WebXR会话初始化
async function initWebXR() {
  if (!navigator.xr) {
    console.log('WebXR not supported');
    return;
  }

  // 请求VR会话
  const session = await navigator.xr.requestSession('immersive-vr', {
    requiredFeatures: ['local-floor'],
    optionalFeatures: ['hand-tracking']
  });

  // 设置渲染层
  const gl = navigator.gl;
  const layer = new XRWebGLLayer(session, gl);
  await session.updateRenderState({ baseLayer: layer });

  // 开始渲染循环
  session.requestAnimationFrame(onXRFrame);
}

function onXRFrame(time, frame) {
  const session = frame.session;
  const pose = frame.getViewerPose(xrRefSpace);
  
  if (pose) {
    // 渲染左右眼视图
    for (const view of pose.views) {
      const viewport = session.renderState.baseLayer.getViewport(view);
      // 渲染逻辑...
    }
  }
  
  session.requestAnimationFrame(onXRFrame);
}`,
      visual: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* VR头显 */}
              <motion.div
                className="w-32 h-20 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-2xl"
                animate={{
                  rotateY: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-xs font-semibold">VR视图</div>
                </div>
              </motion.div>
              
              {/* 左右眼指示 */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <motion.div
                  className="w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 bg-purple-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              
              {/* 手势追踪指示 */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-8">
                <motion.div
                  className="w-8 h-8 border-2 border-green-400 rounded-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-full h-full bg-green-400/20 rounded" />
                </motion.div>
                <motion.div
                  className="w-8 h-8 border-2 border-green-400 rounded-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="w-full h-full bg-green-400/20 rounded" />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* 状态指示 */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-2">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-green-400 text-xs">WebXR Active</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'stereo-rendering',
      title: '立体渲染',
      icon: Eye,
      description: '立体图像的左右眼分离渲染',
      code: `<!-- 立体图像渲染 -->
<img src="stereo-photo.jpg" spatial="stereo" />

<!-- 或者使用JavaScript -->
const img = document.createElement('img');
img.src = 'stereo-photo.jpg';
img.setAttribute('spatial', 'stereo');

// JSAR会自动处理立体渲染
// 左眼图像: photo_L.jpg
// 右眼图像: photo_R.jpg

// 高级立体控制
const stereoImg = document.querySelector('img[spatial="stereo"]');
stereoImg.stereoSeparation = 0.064; // 瞳距 (米)
stereoImg.convergenceDistance = 2.0; // 汇聚距离

// 监听立体渲染事件
stereoImg.addEventListener('stereoRender', (event) => {
  console.log('左眼视图:', event.detail.leftView);
  console.log('右眼视图:', event.detail.rightView);
});`,
      visual: (
        <div className="relative w-full h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 立体图像容器 */}
              <div className="flex space-x-4">
                {/* 左眼视图 */}
                <motion.div
                  className="relative"
                  animate={{ x: [-2, 0, -2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-semibold">左眼</div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-blue-400 text-xs">L</div>
                </motion.div>
                
                {/* 右眼视图 */}
                <motion.div
                  className="relative"
                  animate={{ x: [2, 0, 2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-24 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs font-semibold">右眼</div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400 text-xs">R</div>
                </motion.div>
              </div>
              
              {/* 瞳距指示 */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="flex items-center space-x-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-8 h-0.5 bg-white/50" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
                <div className="text-white/70 text-xs mt-1">瞳距: 64mm</div>
              </div>
            </div>
          </div>
          
          {/* 渲染状态 */}
          <div className="absolute top-4 left-4">
            <div className="text-white/70 text-xs mb-2">立体渲染状态</div>
            <div className="space-y-1">
              <motion.div
                className="flex items-center space-x-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-blue-400 text-xs">左眼渲染中</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-purple-400 text-xs">右眼渲染中</span>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spatial-audio',
      title: '空间音频',
      icon: Headphones,
      description: '3D空间中的音频定位和渲染',
      code: `// 空间音频示例
const audio = new Audio('spatial-sound.mp3');

// 启用空间化
audio.spatialEnabled = true;

// 设置音源位置
audio.spatialPosition = { x: 5.0, y: 2.0, z: -3.0 };

// 设置音频属性
audio.spatialVolume = 0.8;
audio.spatialRolloff = 'linear';
audio.spatialMaxDistance = 20.0;

// 监听音频事件
audio.addEventListener('spatialProcess', (event) => {
  console.log('3D音频处理:', event.detail);
});

// 动态移动音源
function moveAudioSource() {
  const time = Date.now() * 0.001;
  audio.spatialPosition = {
    x: Math.cos(time) * 5,
    y: 2.0,
    z: Math.sin(time) * 5
  };
  requestAnimationFrame(moveAudioSource);
}

moveAudioSource();`,
      visual: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 音源 */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center"
                animate={{
                  x: [0, 30, 0, -30, 0],
                  y: [0, -15, 0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Headphones className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* 声波扩散 */}
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-12 h-12 border-2 border-green-400/50 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 2.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="w-12 h-12 border-2 border-teal-400/30 rounded-full" />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="w-12 h-12 border-2 border-green-400/20 rounded-full" />
              </motion.div>
            </div>
          </div>
          
          {/* 音量指示 */}
          <div className="absolute top-4 right-4">
            <div className="text-white/70 text-xs mb-2">空间音频</div>
            <div className="flex items-center space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-green-400 rounded"
                  animate={{
                    height: [8, 16, 8],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  style={{ height: 8 + i * 2 }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo);

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
              <Zap className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            功能演示
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            探索JSAR的核心功能：空间化DOM、WebXR集成、立体渲染和空间音频
          </motion.p>
        </motion.div>
      </section>

      {/* Demo Selection */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {demos.map((demo) => {
              const Icon = demo.icon;
              return (
                <motion.button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeDemo === demo.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{demo.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Code Example */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentDemo?.title}</h3>
                  <p className="text-gray-400">{currentDemo?.description}</p>
                </div>
                
                <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-700">
                  <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-gray-400 text-sm">JavaScript</span>
                  </div>
                  <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                    <code>{currentDemo?.code}</code>
                  </pre>
                </div>
              </div>

              {/* Visual Demo */}
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">实时演示</h4>
                  {currentDemo?.visual}
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-2">功能亮点</h5>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {activeDemo === 'spatial-dom' && (
                      <>
                        <li>• 真实的3D坐标系统</li>
                        <li>• CSS 3D变换支持</li>
                        <li>• 空间属性扩展</li>
                        <li>• 高性能渲染优化</li>
                      </>
                    )}
                    {activeDemo === 'webxr-integration' && (
                      <>
                        <li>• 完整的WebXR API支持</li>
                        <li>• 手势追踪集成</li>
                        <li>• 立体渲染管线</li>
                        <li>• 空间参考系统</li>
                      </>
                    )}
                    {activeDemo === 'stereo-rendering' && (
                      <>
                        <li>• 自动立体图像处理</li>
                        <li>• 瞳距自适应</li>
                        <li>• 汇聚距离调节</li>
                        <li>• 双眼视差优化</li>
                      </>
                    )}
                    {activeDemo === 'spatial-audio' && (
                      <>
                        <li>• 3D空间音频定位</li>
                        <li>• 距离衰减模型</li>
                        <li>• 多普勒效应</li>
                        <li>• 环境音频混合</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-4">更多功能</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              JSAR还提供了丰富的其他功能，为空间网络应用提供完整支持
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">跨平台支持</h4>
              <p className="text-gray-400 text-sm">Android、iOS、Windows、macOS全平台覆盖</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">高性能渲染</h4>
              <p className="text-gray-400 text-sm">≤10 GPU调用，60+ FPS流畅体验</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">开发者友好</h4>
              <p className="text-gray-400 text-sm">Chrome DevTools深度集成，调试无忧</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Unity集成</h4>
              <p className="text-gray-400 text-sm">作为库无缝集成到Unity项目中</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;

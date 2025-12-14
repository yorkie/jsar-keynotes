import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Building2, 
  GraduationCap, 
  ShoppingCart, 
  Heart, 
  Palette,
  Zap,
  Users,
  Eye,
  Globe,
  Monitor
} from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      title: "Unity集成",
      description: "作为库无缝集成到Unity项目中，为游戏和3D应用提供Web内容渲染能力",
      icon: Gamepad2,
      category: "游戏开发",
      features: [
        "Unity插件可用",
        "Web内容渲染",
        "3D空间UI",
        "实时交互"
      ],
      code: `// Unity C# 集成示例
using JSAR;

public class SpatialWebUI : MonoBehaviour
{
    private JSAREngine engine;
    
    void Start()
    {
        // 初始化JSAR引擎
        engine = new JSAREngine();
        engine.Initialize();
        
        // 加载Web内容
        engine.LoadURL("https://my-spatial-ui.com");
        
        // 设置空间位置
        engine.SetSpatialPosition(transform.position);
        engine.SetSpatialRotation(transform.rotation);
    }
    
    void Update()
    {
        // 更新渲染
        engine.Render();
    }
}`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Unity图标 */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Gamepad2 className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* JSAR连接 */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-green-400 rounded-full" />
                <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping" />
              </motion.div>
              
              {/* Web内容预览 */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-16 bg-white/10 rounded border border-white/20">
                  <div className="p-2 space-y-1">
                    <div className="h-1 bg-white/60 rounded" />
                    <div className="h-1 bg-white/40 rounded" />
                    <div className="h-1 bg-white/60 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "立体图像",
      description: "利用spatial=\"stereo\"属性创建沉浸式3D照片体验",
      icon: Eye,
      category: "媒体展示",
      features: [
        "自动立体渲染",
        "瞳距自适应",
        "左右眼分离",
        "深度感知"
      ],
      code: `<!-- 简单的立体图像 -->
<img src="vacation-photo.jpg" spatial="stereo" />

<!-- 高级立体控制 -->
<img 
  src="family-photo.jpg" 
  spatial="stereo"
  stereo-separation="0.064"
  convergence-distance="2.0"
  depth-range="0.5-10.0"
/>

<!-- 响应式立体图像 -->
<picture>
  <source 
    media="(min-width: 768px)" 
    srcset="large-stereo.jpg"
    spatial="stereo"
  />
  <img 
    src="small-stereo.jpg" 
    spatial="stereo"
    alt="立体照片"
  />
</picture>

<!-- JavaScript控制 -->
const stereoImg = document.querySelector('img[spatial="stereo"]');
stereoImg.addEventListener('stereoRender', (e) => {
  console.log('左眼:', e.detail.leftView);
  console.log('右眼:', e.detail.rightView);
  console.log('深度:', e.detail.depthInfo);
});`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 立体图像对 */}
              <div className="flex space-x-2">
                <motion.div
                  className="w-20 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                  animate={{ x: [-1, 1, -1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute inset-2 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs">L</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="w-20 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"
                  animate={{ x: [1, -1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="absolute inset-2 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs">R</span>
                  </div>
                </motion.div>
              </div>
              
              {/* 深度指示 */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-8 h-0.5 bg-white/50" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="text-white/70 text-xs mt-1 text-center">瞳距</div>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "空间GUI",
      description: "使用HTML/CSS创建3D用户界面，为XR应用提供直观的交互体验",
      icon: Monitor,
      category: "用户界面",
      features: [
        "3D按钮和控件",
        "空间布局系统",
        "手势交互",
        "响应式设计"
      ],
      code: `<!-- 3D空间GUI -->
<div class="spatial-ui" style="transform: translate3d(0, 1.5, -3);">
  <h2 class="spatial-title">控制面板</h2>
  
  <div class="spatial-button-group">
    <button class="spatial-btn" onclick="startExperience()">
      开始体验
    </button>
    
    <button class="spatial-btn secondary" onclick="showSettings()">
      设置
    </button>
  </div>
  
  <div class="spatial-slider">
    <label>音量控制</label>
    <input type="range" min="0" max="100" value="50">
  </div>
</div>

<style>
.spatial-ui {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.spatial-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.spatial-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}
</style>`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-gray-900/50 to-blue-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-3"
              animate={{ rotateY: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="space-y-2">
                <div className="h-2 bg-white/60 rounded" />
                <div className="flex space-x-1">
                  <div className="w-8 h-3 bg-blue-500 rounded" />
                  <div className="w-8 h-3 bg-gray-500 rounded" />
                </div>
                <div className="h-1 bg-white/40 rounded" />
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded" />
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "企业应用",
      description: "为商业和工业应用提供空间数据可视化和协作平台",
      icon: Building2,
      category: "商业应用",
      features: [
        "数据可视化",
        "远程协作",
        "培训模拟",
        "产品展示"
      ],
      code: `// 企业级空间应用
class EnterpriseSpatialApp {
  constructor() {
    this.jsar = new JSAREngine();
    this.dataVisualization = new DataVisualization();
    this.collaboration = new CollaborationManager();
  }
  
  async initialize() {
    // 初始化JSAR引擎
    await this.jsar.initialize({
      mode: 'enterprise',
      features: ['multiuser', 'analytics', 'security']
    });
    
    // 加载企业仪表板
    this.loadDashboard();
    
    // 设置协作功能
    this.setupCollaboration();
  }
  
  loadDashboard() {
    // 3D数据可视化
    const dashboard = document.createElement('div');
    dashboard.className = 'enterprise-dashboard';
    dashboard.innerHTML = \`
      <div class="spatial-chart" data-type="sales">
        <h3>销售数据</h3>
        <canvas id="sales-chart"></canvas>
      </div>
      <div class="spatial-metrics">
        <div class="metric-card">
          <h4>活跃用户</h4>
          <span class="metric-value">12,543</span>
        </div>
      </div>
    \`;
    
    // 设置空间位置
    dashboard.style.transform = 'translate3d(-2, 1, -4)';
    document.body.appendChild(dashboard);
  }
}`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 企业仪表板 */}
              <motion.div
                className="w-40 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-2 bg-white/60 rounded" />
                    <div className="w-6 h-3 bg-green-500 rounded" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-6 bg-blue-500 rounded" />
                    <div className="w-4 h-8 bg-blue-500 rounded" />
                    <div className="w-4 h-4 bg-blue-500 rounded" />
                    <div className="w-4 h-7 bg-blue-500 rounded" />
                  </div>
                </div>
              </motion.div>
              
              {/* 协作指示 */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "教育培训",
      description: "创建沉浸式学习环境，提供互动式教育体验",
      icon: GraduationCap,
      category: "教育科技",
      features: [
        "虚拟实验室",
        "历史重现",
        "解剖教学",
        "语言学习"
      ],
      code: `<!-- 沉浸式历史教学 -->
<div class="historical-scene" data-period="ancient-rome">
  <h2>古罗马广场</h2>
  
  <div class="interactive-element" data-type="building">
    <h3>万神殿</h3>
    <p>公元126年建成的古罗马建筑</p>
    <button onclick="exploreBuilding('pantheon')">探索内部</button>
  </div>
  
  <div class="character-npc" data-character="caesar">
    <img src="caesar-avatar.png" spatial="stereo" />
    <div class="dialogue-system">
      <p>"Veni, vidi, vici"</p>
      <button onclick="continueDialogue()">继续对话</button>
    </div>
  </div>
  
  <div class="quiz-panel">
    <h4>知识测验</h4>
    <p>万神殿的穹顶直径是多少？</p>
    <div class="answer-options">
      <button onclick="selectAnswer('a')">A. 43.3米</button>
      <button onclick="selectAnswer('b')">B. 34.2米</button>
      <button onclick="selectAnswer('c')">C. 51.8米</button>
    </div>
  </div>
</div>

<style>
.historical-scene {
  background: linear-gradient(to bottom, #87CEEB, #DEB887);
  padding: 20px;
  border-radius: 12px;
  transform: translate3d(0, 0, -5);
}

.interactive-element {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.interactive-element:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
</style>`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 古代建筑 */}
              <motion.div
                className="w-32 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-t-xl"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-x-0 top-0 h-4 bg-amber-700 rounded-t-xl" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-amber-800 rounded-t-lg" />
              </motion.div>
              
              {/* 历史人物 */}
              <motion.div
                className="absolute -bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GraduationCap className="w-4 h-4 text-white m-2" />
              </motion.div>
              
              {/* 互动元素 */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-blue-400 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "医疗健康",
      description: "提供医疗培训、康复治疗和患者教育的空间化解决方案",
      icon: Heart,
      category: "医疗健康",
      features: [
        "解剖教学",
        "手术模拟",
        "康复训练",
        "患者教育"
      ],
      code: `<!-- 医疗解剖教学 -->
<div class="medical-anatomy" data-system="cardiovascular">
  <h2>心血管系统</h2>
  
  <div class="anatomy-layer" data-layer="superficial">
    <h3>表层结构</h3>
    <img src="heart-exterior.png" spatial="stereo" />
    <button onclick="toggleLayer('deep')">查看内部</button>
  </div>
  
  <div class="anatomy-layer" data-layer="deep" style="display: none;">
    <h3>内部结构</h3>
    <img src="heart-interior.png" spatial="stereo" />
    <div class="interactive-parts">
      <div class="heart-chamber" data-chamber="left-atrium">
        <h4>左心房</h4>
        <p>接收来自肺静脉的含氧血液</p>
      </div>
      <div class="heart-chamber" data-chamber="left-ventricle">
        <h4>左心室</h4>
        <p>将血液泵送到全身</p>
      </div>
    </div>
  </div>
  
  <div class="medical-controls">
    <button onclick="animateHeartbeat()">心跳动画</button>
    <button onclick="showBloodFlow()">血液流动</button>
    <button onclick="resetView()">重置视图</button>
  </div>
</div>

<script>
function animateHeartbeat() {
  const heart = document.querySelector('[data-system="cardiovascular"]');
  heart.style.animation = 'heartbeat 1s ease-in-out';
}

function showBloodFlow() {
  // 显示血液流动动画
  const bloodFlow = document.createElement('div');
  bloodFlow.className = 'blood-flow-animation';
  bloodFlow.style.cssText = \`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      transparent 0%, 
      rgba(255,0,0,0.3) 50%, 
      transparent 100%);
    animation: flow 2s linear infinite;
  \`;
  document.body.appendChild(bloodFlow);
}
</script>`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 心脏图标 */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* 血液流动指示 */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-red-400/50 rounded-full" />
              </motion.div>
              
              {/* 解剖层次 */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex space-x-1">
                  <div className="w-3 h-1 bg-red-400 rounded" />
                  <div className="w-3 h-1 bg-pink-400 rounded" />
                  <div className="w-3 h-1 bg-red-400 rounded" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "电子商务",
      description: "创建沉浸式购物体验，让顾客在3D空间中浏览和试用产品",
      icon: ShoppingCart,
      category: "零售电商",
      features: [
        "3D产品展示",
        "虚拟试穿",
        "空间购物",
        "个性化推荐"
      ],
      code: `<!-- 3D产品展示 -->
<div class="spatial-product-showcase">
  <h2>智能手表展示</h2>
  
  <div class="product-model" data-product="smartwatch">
    <model-viewer 
      src="smartwatch-3d.glb" 
      alt="智能手表 3D模型"
      auto-rotate
      camera-controls
      spatial="true"
    ></model-viewer>
  </div>
  
  <div class="product-info-panel">
    <h3>Apple Watch Series 9</h3>
    <p class="price">¥2,999</p>
    <p class="description">GPS + 蜂窝网络，45mm表盘</p>
    
    <div class="product-options">
      <div class="color-options">
        <h4>选择颜色</h4>
        <button class="color-btn" data-color="midnight">午夜色</button>
        <button class="color-btn" data-color="silver">银色</button>
        <button class="color-btn" data-color="gold">金色</button>
      </div>
      
      <div class="size-options">
        <h4>选择尺寸</h4>
        <button class="size-btn" data-size="41mm">41mm</button>
        <button class="size-btn" data-size="45mm">45mm</button>
      </div>
    </div>
    
    <div class="purchase-actions">
      <button class="btn-primary" onclick="addToCart()">加入购物车</button>
      <button class="btn-secondary" onclick="virtualTryOn()">虚拟试戴</button>
    </div>
  </div>
  
  <div class="spatial-reviews">
    <h4>用户评价</h4>
    <div class="review-cards">
      <div class="review-card" data-rating="5">
        <p>"非常棒的购物体验！"</p>
        <span>- 张三</span>
      </div>
    </div>
  </div>
</div>

<style>
.spatial-product-showcase {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  transform: translate3d(0, 0, -3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.product-info-panel {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
}
</style>`,
      visual: (
        <div className="relative w-full h-48 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* 产品展示 */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <ShoppingCart className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* 价格标签 */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-xs font-bold">¥</span>
              </motion.div>
              
              {/* 用户评价星标 */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )
    }
  ];

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
              <Palette className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            应用案例
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            探索JSAR在各个行业的实际应用，从游戏开发到医疗健康，
            空间网络技术正在重新定义用户体验
          </motion.p>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-400 font-medium mb-1">{useCase.category}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-400">{useCase.description}</p>
                    </div>
                  </div>

                  {useCase.visual}

                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3">核心功能</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3">代码示例</h4>
                    <div className="bg-gray-900/80 rounded-lg overflow-hidden border border-gray-700">
                      <div className="bg-gray-800 px-3 py-2 border-b border-gray-700">
                        <span className="text-gray-400 text-xs">代码</span>
                      </div>
                      <pre className="p-3 text-xs text-gray-300 overflow-x-auto">
                        <code>{useCase.code}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">行业影响</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              JSAR正在推动多个行业的数字化转型，创造全新的用户体验和商业模式
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">提升效率</h3>
              <p className="text-gray-400">
                通过空间化界面和3D可视化，显著提升用户操作效率和信息理解能力
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">增强协作</h3>
              <p className="text-gray-400">
                多人空间协作环境，让远程团队能够在3D空间中自然互动和协作
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">扩展市场</h3>
              <p className="text-gray-400">
                突破传统2D界面限制，为全球市场创造全新的沉浸式用户体验
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              准备开始您的空间网络之旅？
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              查看我们的发展路线图，了解JSAR的未来规划和社区生态
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                查看发展路线
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30">
                加入社区
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;

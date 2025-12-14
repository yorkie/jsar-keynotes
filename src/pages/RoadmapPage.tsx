import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Calendar, 
  Target, 
  Users, 
  Code, 
  Globe,
  Zap,
  TrendingUp,
  Award,
  GitBranch,
  Star,
  MessageCircle
} from 'lucide-react';

const RoadmapPage: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Foundation Phase",
      period: "2024 Q1-Q2",
      status: "completed",
      icon: Rocket,
      achievements: [
        "Core JSAR engine architecture",
        "WebXR device API integration",
        "Spatial DOM rendering prototype",
        "Basic stereo rendering pipeline",
        "Unity/Unreal Engine plugin alpha"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Beta Release",
      period: "2024 Q3-Q4",
      status: "current",
      icon: Target,
      achievements: [
        "Public beta release",
        "Enhanced performance optimization",
        "Advanced spatial audio support",
        "Mobile VR/AR device compatibility",
        "Developer tools and documentation",
        "Community feedback integration"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Production Ready",
      period: "2025 Q1-Q2",
      status: "planned",
      icon: Award,
      achievements: [
        "Stable 1.0 release",
        "Enterprise-grade security",
        "Advanced rendering features",
        "Multi-platform deployment",
        "Commercial support packages",
        "Performance benchmarking suite"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Ecosystem Expansion",
      period: "2025 Q3-Q4",
      status: "planned",
      icon: Globe,
      achievements: [
        "Plugin marketplace launch",
        "AI-powered content creation",
        "Advanced analytics dashboard",
        "Educational platform integration",
        "Healthcare certification",
        "Global localization support"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  const futureFeatures = [
    {
      category: "Performance & Optimization",
      features: [
        "GPU-accelerated rendering pipeline",
        "Advanced occlusion culling algorithms",
        "Dynamic LOD (Level of Detail) system",
        "Memory management optimization",
        "Multi-threaded processing support"
      ],
      icon: Zap
    },
    {
      category: "Developer Experience",
      features: [
        "Visual scene editor",
        "Real-time debugging tools",
        "Automated testing framework",
        "CI/CD pipeline templates",
        "Advanced profiling tools"
      ],
      icon: Code
    },
    {
      category: "Platform Support",
      features: [
        "Apple Vision Pro native support",
        "Meta Quest 3 optimization",
        "HoloLens 2 integration",
        "WebGPU backend implementation",
        "Progressive Web App capabilities"
      ],
      icon: Globe
    },
    {
      category: "Community & Ecosystem",
      features: [
        "Open source contribution program",
        "Educational partnerships",
        "Industry certification programs",
        "Developer conference events",
        "Technical advisory board"
      ],
      icon: Users
    }
  ];

  const communityMetrics = [
    { label: "GitHub Stars", value: "1.2K+", icon: Star },
    { label: "Active Contributors", value: "45+", icon: Users },
    { label: "Discord Members", value: "800+", icon: MessageCircle },
    { label: "Monthly Downloads", value: "15K+", icon: TrendingUp },
    { label: "Plugin Ecosystem", value: "25+", icon: GitBranch }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            JSAR Development Roadmap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Charting the future of spatial web technology through continuous innovation 
            and community-driven development
          </p>
        </motion.div>

        {/* Development Phases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Calendar className="mr-3" />
            Development Timeline
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${phase.color} p-6 text-white cursor-pointer transform transition-all duration-300 ${
                    activePhase === index ? 'ring-4 ring-white/30' : ''
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      phase.status === 'completed' ? 'bg-green-500/30 text-green-100' :
                      phase.status === 'current' ? 'bg-blue-500/30 text-blue-100' :
                      'bg-gray-500/30 text-gray-100'
                    }`}>
                      {phase.status === 'completed' ? 'Completed' :
                       phase.status === 'current' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{phase.period}</p>
                  
                  <div className="space-y-2">
                    {phase.achievements.slice(0, 3).map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                        <span className="opacity-90">{achievement}</span>
                      </div>
                    ))}
                    {phase.achievements.length > 3 && (
                      <div className="text-sm opacity-75">
                        +{phase.achievements.length - 3} more achievements
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Phase View */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              {React.createElement(phases[activePhase].icon, { className: "w-8 h-8 text-white mr-3" })}
              <h3 className="text-2xl font-bold text-white">
                {phases[activePhase].title} - {phases[activePhase].period}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {phases[activePhase].achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Impact & Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Development Progress</span>
                    <span className="text-emerald-400 font-semibold">
                      {phases[activePhase].status === 'completed' ? '100%' :
                       phases[activePhase].status === 'current' ? '75%' : '25%'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${phases[activePhase].color}`}
                      style={{ 
                        width: phases[activePhase].status === 'completed' ? '100%' :
                               phases[activePhase].status === 'current' ? '75%' : '25%' 
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Target className="mr-3" />
            Future Innovation Areas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {futureFeatures.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Community Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Users className="mr-3" />
            Growing Community Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {communityMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Spatial Web Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of shaping the future of web-based augmented reality. 
              Contribute to JSAR development and help build the next generation of spatial web experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Star on GitHub
              </button>
              <button className="bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </button>
              <button className="bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Contribute
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoadmapPage;
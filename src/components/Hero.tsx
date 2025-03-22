import React from 'react';
import { ArrowRight, BarChart2, Shield, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80"
          alt="Solar panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16 container-padding max-w-7xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight slide-up">
              Transform Your Solar Energy into Carbon Credits
            </h1>
            <p className="text-lg md:text-xl opacity-90 slide-up">
              Leverage blockchain technology and IoT to monetize your renewable energy production through verified carbon offsets.
            </p>
            <div className="flex flex-wrap gap-4 slide-up">
              <button className="px-8 py-3 rounded-full bg-white text-primary hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Request Demo <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 rounded-full border-2 border-white hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BarChart2, title: "Carbon Offset", value: "2.5M tons" },
              { icon: Shield, title: "Verified Credits", value: "$1.2M traded" },
              { icon: Leaf, title: "Green Impact", value: "500+ projects" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Shield, Cpu, BarChart2, Coins } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain',
      description: 'Your carbon credits are securely stored and verified on the blockchain, ensuring transparency and trust.'
    },
    {
      icon: Cpu,
      title: 'IoT Integration',
      description: 'Smart devices monitor and measure your solar panel output in real-time for accurate carbon offset calculation.'
    },
    {
      icon: BarChart2,
      title: 'Real-time Analytics',
      description: 'Track your carbon offset generation and trading performance with advanced analytics dashboard.'
    },
    {
      icon: Coins,
      title: 'Instant Trading',
      description: 'Trade your verified carbon credits instantly on our marketplace with pre-verified buyers.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Carbon Credit Trading
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with environmental responsibility
            to make carbon credit trading accessible and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
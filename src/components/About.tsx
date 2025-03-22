import React from 'react';
import { Users, Target, Leaf, School } from 'lucide-react';
import image from '../Images/div2.jpeg';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About EcoSpace
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A revolutionary project developed by the Dreamer's Squad from Manav Rachna International 
              Institute of Research and Studies. We're transforming the carbon credit market by connecting 
              solar energy producers with companies seeking to offset their carbon footprint.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <School className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Institution</h3>
                  <p className="text-gray-600">
                    <b>Manav Rachna International Institute of Research and Studies</b> in collaboration with <b>Manav Rachna University</b>, 
                    fostering innovation and sustainable solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dreamer's Squad</h3>
                  <p className="text-gray-600">
                    A passionate team of students working towards a sustainable future 
                    through technological innovation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To accelerate the transition to renewable energy by making carbon 
                    credit trading accessible and efficient.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
                  <p className="text-gray-600">
                    Over 2.5M tons of CO2 offset through our platform, contributing 
                    to a cleaner environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src= {image}
              alt="Sustainable energy" 
              className="rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
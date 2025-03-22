import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import madhav from '../Images/madhav.jpeg';
import gaurang from '../Images/gaurang.jpeg';
import farhan from '../Images/farhan.JPG';  
import aditya from '../Images/aditya.jpeg';
import shubham from '../Images/shubham.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: "Aditya Tripathi",
      role: "Team Lead | Frontend Developer",
      course: "B.Tech CSE",
      year: "2nd Year",
      image: aditya,
      github: "#",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Shubham Rathore",
      role: "UX/UI Designer",
      course: "B.Tech CSE",
      year: "2nd Year",
      image: shubham,
      github: "#",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Madhav Tyagi",
      role: "Blockchain Developer",
      course: "BCA",
      year: "3rd Year",
      image: madhav,
      github: "#",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Gaurang Puri",
      role: "Research and Development",
      course: "B.Tech CSE",
      year: "2nd Year",
      image: gaurang,
      github: "#",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Farhan Hasib",
      role: "Backend Developer",
      course: "B.Tech CSE",
      year: "2nd Year",
      image: farhan,
      github: "#",
      linkedin: "#",
      email: "#"
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Dreamer's Squad
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A talented team of students from Manav Rachna International Institute of Research and Studies,
            working together to revolutionize carbon credit trading.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="team-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.course}, {member.year}
                </p>
                
                <div className="flex items-center gap-4">
                  <a href={member.github} className="text-gray-600 hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} className="text-gray-600 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
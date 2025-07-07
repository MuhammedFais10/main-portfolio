
import React from 'react';
import { Code, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={24} />,
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'React.js', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-teal-600' },
        { name: 'Bootstrap', level: 85, color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Backend',
      icon: <Zap size={24} />,
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Express.js', level: 88, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      title: 'Database',
      icon: <Code size={24} />,
      skills: [
        { name: 'MongoDB', level: 87, color: 'from-green-400 to-green-700' },
      ]
    },
    {
      title: 'Other Tools',
      icon: <Zap size={24} />,
      skills: [
        { name: 'Redux Toolkit', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Context API', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'WebSockets', level: 82, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JWT', level: 88, color: 'from-red-400 to-red-600' },
        { name: 'Cloudinary', level: 80, color: 'from-orange-400 to-orange-600' },
        { name: 'Leaflet', level: 75, color: 'from-green-400 to-green-600' },
        { name: 'Postman', level: 92, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 93, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'C++', level: 78, color: 'from-blue-500 to-blue-700' },
      ]
    },
    {
      title: 'Architecture',
      icon: <Zap size={24} />,
      skills: [
        { name: 'Microservices', level: 85, color: 'from-indigo-400 to-indigo-600' },
        { name: 'MVC', level: 90, color: 'from-purple-400 to-purple-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            <Code className="inline-block mr-3 text-primary" size={32} />
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive expertise across the full stack development ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      <span className="text-primary font-semibold text-xs">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute left-0 top-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack Highlight */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-gradient-to-r from-primary/10 to-blue-400/10 border border-primary/20 rounded-full px-6 py-3 text-primary font-semibold hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

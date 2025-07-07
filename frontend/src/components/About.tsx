
import React from 'react';
import { User, Download, Award, MapPin, Calendar } from 'lucide-react';
import { contactsLinks } from "../Api/personalLinkes";

const About = () => {
  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume
      const link = document.createElement("a");
  link.href = "/Resume/fais resume3.pdf";
  link.download = "Muhammed_Fais_P_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    alert('Resume download would be implemented here');
  };

  const stats = [
    { label: 'mounths trainer Experience', value: '7+', icon: <Calendar size={20} /> },
    { label: 'Projects Completed', value: '15+', icon: <Award size={20} /> },
    { label: 'Technologies', value: '12+', icon: <User size={20} /> },
    { label: 'Current Role', value: 'Trainer', icon: <MapPin size={20} /> },
  ];

  
const githubLink = contactsLinks.find(link => link.name === "GitHub")?.url;
const linkedinLink = contactsLinks.find(link => link.name === "LinkedIn")?.url;



  return (
    <section id="about" className="py-20 section-padding bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            <User className="inline-block mr-3 text-primary" size={32} />
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Passionate MERN Stack Developer crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Section */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-primary/30 animate-float"></div>
              <div className="absolute inset-8 rounded-full bg-card/80 backdrop-blur-sm border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-blue-400/10 flex items-center justify-center relative">
                  <div className="text-6xl font-black gradient-text">MF</div>
                  {/* Floating Tech Icons */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm <span className="text-primary font-semibold gradient-text">Muhammed Fais P</span>, a passionate and self-driven MERN Stack Developer with hands-on experience building scalable, production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
                </p>
                
                <div className="bg-card/30 border border-border/50 rounded-xl p-6 backdrop-blur-sm">
                  <p className="mb-4">
                    Currently working as a <span className="text-primary font-semibold">MERN Stack Trainer at Plugins Learn, Ernakulam</span>, I guide learners through industry-level practices and real-world projects.
                  </p>
                  
                  <p className="mb-4">
                    I specialize in clean architecture, microservices, and tools like JWT Auth, WebSockets, PayPal API, Cloudinary, and Leaflet maps.
                  </p>
                  
                  <p>
                    With a background in <span className="text-primary font-semibold">Business Administration</span>, I bring a strategic mindset to development, balancing user experience, performance, and maintainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleDownloadResume}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center"
              >
                <Download className="mr-2 group-hover:animate-bounce" size={18} />
                Download Resume
              </button>
              
              <div className="flex space-x-4">
                <a 
              href={githubLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-primary/20 text-primary px-6 py-4 rounded-xl font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                >
                  GitHub
                </a>
                <a 
                href={linkedinLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-primary/20 text-primary px-6 py-4 rounded-xl font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>

              
             

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

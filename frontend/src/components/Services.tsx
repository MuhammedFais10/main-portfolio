
import React from 'react';
import { Briefcase, Settings, Code, User, UserCheck, Github, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Full-Stack Web Development',
      subtitle: 'MERN Stack Expertise',
      description: 'Complete web application development using MongoDB, Express.js, React.js, and Node.js with modern best practices and clean architecture.',
      features: ['Responsive Design', 'RESTful APIs', 'Database Design', 'Performance Optimization'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: <Settings size={40} />,
      title: 'Microservices Architecture',
      subtitle: 'Scalable System Design',
      description: 'Design and implement scalable microservices architecture for complex applications with proper separation of concerns.',
      features: ['Service Isolation', 'API Gateway', 'Load Balancing', 'Containerization'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: <Github size={40} />,
      title: 'Cloud Deployment',
      subtitle: 'Render.com & DevOps',
      description: 'Professional deployment and hosting solutions with continuous integration and deployment pipelines.',
      features: ['CI/CD Pipeline', 'Environment Management', 'Monitoring', 'Auto-scaling'],
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Training & Mentorship',
      subtitle: 'MERN Stack Education',
      description: 'Comprehensive training programs and one-on-one mentorship for aspiring MERN stack developers.',
      features: ['Hands-on Projects', 'Code Reviews', 'Career Guidance', 'Industry Best Practices'],
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: <User size={40} />,
      title: 'Authentication Systems',
      subtitle: 'Secure & Scalable Auth',
      description: 'Implementation of robust authentication systems using JWT, OAuth, and other modern security practices.',
      features: ['JWT Tokens', 'OAuth Integration', 'Role-based Access', 'Security Audits'],
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'API Integrations',
      subtitle: 'Third-party Services',
      description: 'Seamless integration with third-party APIs including PayPal, Cloudinary, and other essential services.',
      features: ['Payment Gateways', 'File Storage', 'Maps Integration', 'Social Media APIs'],
      color: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  return (
    <section id="services" className="py-20 section-padding bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            <Briefcase className="inline-block mr-3 text-primary" size={32} />
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive development services from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:bg-card/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight size={14} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 rounded-lg py-2 text-sm font-medium transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with cutting-edge MERN stack development.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

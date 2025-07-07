
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactsLinks } from '@/Api/personalLinkes';

const Footer = () => {
  const currentYear = new Date().getFullYear();

     const iconMap = {
     Github: <Github size={20} />,
     Linkedin: <Linkedin size={20} />,
     Mail: <Mail size={20} />,
   };
   
  return (
    <footer className="bg-card border-t border-border py-8 section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Muhammed Fais. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* <div className="flex space-x-6">
            <a 
              href="https://github.com/muhammedfais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/muhammedfais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pmuhammedfais2001@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div> */}

          <div className="flex space-x-6">
            {contactsLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {iconMap[contact.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

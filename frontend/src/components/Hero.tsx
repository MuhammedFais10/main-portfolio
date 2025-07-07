import React from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { contactsLinks } from "../Api/personalLinkes";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconMap = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Mail: <Mail size={20} />,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Modern Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container-custom w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles size={16} className="animate-pulse" />
              Available for new projects
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                  Hi, I'm{" "}
                  <span className="relative">
                    <span className="gradient-text">Muhammed Fais</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-lg blur opacity-30 animate-pulse"></div>
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  MERN Stack Developer
                </h2>
                <div className="flex items-center gap-2 text-lg text-primary font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Full-Stack JavaScript Enthusiast
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Building scalable apps with clean architecture & real-world
              impact. Passionate about creating production-ready web
              applications with modern technologies.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="group relative border-2 border-primary/20 text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <span className="text-sm text-muted-foreground font-medium">
                Connect with me
              </span>
              {/* <div className="flex space-x-4">
                <a
                  href="https://github.com/MuhammedFais10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammed-fais-p-72912523a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Mail size={20} />
                </a>
              </div> */}

              <div className="flex space-x-4">
                {contactsLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  >
                    {iconMap[contact.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-full blur-2xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Main Profile Card */}
              {/*
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated Border 
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-3xl opacity-75 animate-pulse"></div>
                <div className="absolute inset-1 bg-card rounded-3xl border border-border/20 overflow-hidden backdrop-blur-sm">
                  {/* Profile Content 
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 flex flex-col items-center justify-center relative">
                    {/* Initials with Modern Typography 
                    <div className="text-8xl font-black gradient-text mb-4 tracking-tighter">
                    <img src="/ProfileImg/ProfileImg.png" alt="" />
                    
                    </div>
                    <div className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                      {/* Developer 
                    </div>

                    {/* Decorative Elements 
                    <div className="absolute top-6 left-6 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                


              </div>
              */}

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border border-border/20 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#1e293b]">
                {/* Outer Glow Border */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-400 to-primary opacity-40 animate-pulse blur-md rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary rounded-3xl opacity-75 animate-pulse">
                  <div className="absolute inset-1 bg-card rounded-3xl border border-border/20 overflow-hidden backdrop-blur-sm"></div>
                </div>
                {/* Image Container */}
                <div className="absolute inset-1 bg-background/70 rounded-3xl backdrop-blur-sm border border-border/30 flex items-center justify-center">
                  <img
                    src="/ProfileImg/ProfileImg.png"
                    alt="Profile"
                    className="w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg border-4 border-primary/40"
                  />
                </div>

                <div className="absolute bottom-6 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              {/* Tech Stack Pills */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 space-y-3 hidden lg:block">
                <div
                  className="px-4 py-2 bg-card/80 border border-border/30 rounded-full text-xs font-medium text-muted-foreground backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  React
                </div>
                <div
                  className="px-4 py-2 bg-card/80 border border-border/30 rounded-full text-xs font-medium text-muted-foreground backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: "0.7s" }}
                >
                  Node.js
                </div>
                <div
                  className="px-4 py-2 bg-card/80 border border-border/30 rounded-full text-xs font-medium text-muted-foreground backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: "0.9s" }}
                >
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-muted-foreground font-medium tracking-wider">
              SCROLL
            </span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <ArrowDown className="text-primary/70" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

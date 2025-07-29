import React from "react";
import {
  Projector,
  Github,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Calendar,
} from "lucide-react";
import { ProjectLinks } from "../Api/ProjectLinkes";

const FullstackProject = () => {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            <Projector className="inline-block mr-3 text-primary" size={32} />
            FullStack Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          These are my fullstack applications built using the MERN stack.
        </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectLinks.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Preview */}
              <div
                className={`w-full h-48 ${project.image}    rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-xl"
                />

                {/* <div className="text-4xl font-black text-primary/30">
                  {project.title.charAt(0)}
                </div> */}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.liveDemo}
                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    title="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 bg-card text-foreground rounded-lg hover:bg-card/90 transition-colors duration-200"
                    title="View Code"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star size={12} className="text-primary" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={12} className="text-primary" />
                    <span>{project.stats.users}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} className="text-primary" />
                    <span>{project.stats.duration}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.liveDemo}
                    className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 border border-border text-foreground px-3 py-2 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Github size={14} />
                    <span>Code</span>
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

export default FullstackProject;

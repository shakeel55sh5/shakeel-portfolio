import { motion } from 'framer-motion';
import { ExternalLink, Github, Users } from 'lucide-react';

const projects = [
  {
    title: "Abbot Home",
    description: "A comprehensive MERN stack application where users can view homes and admins can manage listings.",
    image: "/proj1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Chat Bot",
    description: "An intelligent chatbot built using the MERN stack, capable of real-time interactions.",
    image: "/proj3.png",
    tags: ["MERN", "AI API", "WebSockets"],
    github: "#",
    live: "#"
  },
  {
    title: "Location Tracing",
    description: "A MERN stack project focused on tracking and visualizing geographic data in real-time.",
    image: "/proj2.png",
    tags: ["React", "Leaflet", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Group Portfolio",
    description: "A collaborative group project showcasing our collective skills and diverse individual portfolios.",
    image: "/proj4.png",
    tags: ["React", "Collaboration", "Portfolio", "Tailwind"],
    github: "#",
    live: "https://dev-entire-portfolio.vercel.app/",
    isGroup: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 dark:text-white"
          >
            My Projects
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:bg-primary-50 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="p-3 bg-white rounded-full text-slate-900 hover:bg-primary-50 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                {project.isGroup && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Users size={14} /> Group Project
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

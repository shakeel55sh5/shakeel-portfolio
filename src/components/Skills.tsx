import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Terminal,
  Layout,
  Server,
  Network
} from 'lucide-react';

interface SkillProps {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const CircularSkill = ({ name, percentage, icon }: SkillProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-200 dark:text-slate-800"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-primary-600 dark:text-primary-400"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <div className="text-primary-600 dark:text-primary-400 mb-1">
            {icon}
          </div>
          <span className="text-xs font-bold dark:text-white">{percentage}%</span>
        </div>
      </div>
      <span className="mt-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-center">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", percentage: 85, icon: <Code2 size={20} /> },
        { name: "Java", percentage: 80, icon: <Cpu size={20} /> },
        { name: "Python", percentage: 90, icon: <Terminal size={20} /> },
        { name: "Bash", percentage: 80, icon: <Terminal size={20} /> },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React JS", percentage: 100, icon: <Layout size={20} /> },
        { name: "Node JS", percentage: 90, icon: <Server size={20} /> },
        { name: "Express JS", percentage: 95, icon: <Globe size={20} /> },
        { name: "MongoDB", percentage: 85, icon: <Database size={20} /> },
        { name: "Tailwind CSS", percentage: 100, icon: <Layout size={20} /> },
        { name: "HTML5/CSS3", percentage: 100, icon: <Globe size={20} /> },
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", percentage: 85, icon: <ShieldCheck size={20} /> },
        { name: "Networking", percentage: 90, icon: <Network size={20} /> },
        { name: "CyberSecurity", percentage: 80, icon: <ShieldCheck size={20} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 forced-white-dark"
          >
            My Skills
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A visual representation of my technical proficiency in various domains.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-bold text-slate-900 forced-white-dark mb-8 border-l-4 border-primary-600 pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, index) => (
                  <CircularSkill key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

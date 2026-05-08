import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Web Developer',
      'MERN Stack Developer',
      'Cybersecurity Enthusiast',
      'Ethical Hacker',
      'Software Engineer Student',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 forced-white-dark mb-6">
              Hi, I'm <span className="text-primary-600">Shakeel Ahmad</span>
            </h1>
            <div className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-400 h-16">
              a <span>{text}</span>
              <Cursor cursorColor="#0ea5e9" />
            </div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I am a 4th-semester Software Engineering student at Abbottabad University, 
              passionate about building robust web applications and securing digital landscapes.
            </p>
            
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              {[
                { icon: Github, href: 'https://github.com/shakeel55sh5' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shakeel-ahmad-710a83285/' },
                { icon: Facebook, href: 'https://www.facebook.com/shakeel.ahmad.497714' },
                { icon: Mail, href: 'mailto:shakeel345sh5@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 blur-2xl rounded-full animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 h-80 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Shakeel Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

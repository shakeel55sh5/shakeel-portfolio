
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              I am a Passionate Software Engineering Student
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Currently in my 4th semester at **Abbottabad University**, I have been 
              immersing myself in the world of software development and cybersecurity. 
              My journey started with a fascination for how things work under the hood, 
              which led me to master the MERN stack and explore the complexities of ethical hacking.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I believe in continuous learning and have earned several certifications from 
              **CISCO Networking Academy**. My goal is to build secure, scalable, and 
              user-friendly applications while following modern development practices like 
              **Agile Methodology** to ensure efficient and high-quality delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <GraduationCap className="w-8 h-8 text-primary-600 mb-2" />
                <h4 className="font-bold dark:text-white">Education</h4>
                <p className="text-sm text-slate-500">SE Student</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <Briefcase className="w-8 h-8 text-primary-600 mb-2" />
                <h4 className="font-bold dark:text-white">Experience</h4>
                <p className="text-sm text-slate-500">MERN Projects</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <Award className="w-8 h-8 text-primary-600 mb-2" />
                <h4 className="font-bold dark:text-white">Certificates</h4>
                <p className="text-sm text-slate-500">CISCO Academy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center p-6 text-center">
                <div>
                  <h5 className="text-4xl font-bold text-primary-600">4th</h5>
                  <p className="text-slate-600 dark:text-slate-400">Semester</p>
                </div>
              </div>
              <div className="h-64 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <img src="/Screenshot 2025-10-25 5.04.36 PM.png" alt="Experience" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden">
                 <img src="/Screenshot 2025-10-18 7.34.24 PM.png" alt="Projects" className="w-full h-full object-cover" />
              </div>
              <div className="h-48 rounded-2xl bg-primary-600 flex items-center justify-center p-6 text-center text-white">
                <div>
                  <h5 className="text-4xl font-bold">10+</h5>
                  <p className="text-primary-100">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

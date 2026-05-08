
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "CISCO Networking Academy",
    file: "/Introduction_to_Cybersecurity_certificate_shakeel345sh5-gmail-com_a4d10055-b04c-4aa8-b159-8532eeed88f8.pdf",
    image: "/certificet.png"
  },
  {
    title: "Networking Basics",
    issuer: "CISCO Networking Academy",
    file: "/Networking_Basics_certificate_shakeel345sh5-gmail-com_0b3d650b-6f67-42cf-b349-8f42959c7deb.pdf",
    image: "/certificet.png"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 forced-white-dark"
          >
            Certifications
          </motion.h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 items-center gap-6"
            >
              <div className="w-full sm:w-48 h-32 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-600">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-slate-900 forced-white-dark mb-1">{cert.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">{cert.issuer}</p>
                <div className="flex justify-center sm:justify-start gap-4">
                  <a 
                    href={cert.file} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FileText className="w-4 h-4" /> View PDF
                  </a>
                  <a 
                    href={cert.file} 
                    download
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;


import { Github, Linkedin, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Shakeel.</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
              Building modern web experiences with passion.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/shakeel55sh5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/shakeel-ahmad-710a83285/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/shakeel.ahmad.497714" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Shakeel Ahmad. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Abbottabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

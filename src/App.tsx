import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Layout, Server, Menu, X, Home, FolderOpen, MessageSquare, ArrowUpRight, FeatherIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './translations/i18n';
import FeaturedSection from './components/FeaturedSection';
import Hero from './components/Hero';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1
    }
  }
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(t('contact.form.success'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert(t('contact.form.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          placeholder={t('contact.form.namePlaceholder')}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          placeholder={t('contact.form.emailPlaceholder')}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          placeholder={t('contact.form.messagePlaceholder')}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 px-6 py-3 text-lg font-semibold text-slate-950 transition-transform duration-300 hover:scale-[1.02]"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-[#0b0f14] text-slate-100 font-['Manrope']">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_60%)] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_60%)] blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0b0f14]/80 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-200">
              YG
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                {/* <LanguageSwitcher /> */}
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {t(`nav.${link.name.toLowerCase()}`)}
                  </a>
                ))}
              </div>
              <a
                href="mailto:yibeltalgashaw320@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                {t('nav.getInTouch')}
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden rounded-2xl bg-[#0b0f14]/95 border border-white/5 p-4 mb-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-xl px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Hero/>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0b0f14]/60">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Expertise</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white font-['Space_Grotesk']">Technical Toolkit</h2>
            <p className="mt-4 text-slate-300">
              End-to-end product delivery with a balance of engineering rigor and UX craft.
            </p>
          </div>
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <Layout className="w-7 h-7 text-cyan-300" />, title: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
              { icon: <Server className="w-7 h-7 text-emerald-300" />, title: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Java'] },
              { icon: <Database className="w-7 h-7 text-lime-300" />, title: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] },
              { icon: <Code2 className="w-7 h-7 text-orange-300" />, title: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git'] },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 shadow-xl"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white/10 p-3">
                    {category.icon}
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Core</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{category.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <FeaturedSection/>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0b0f14]/70">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white font-['Space_Grotesk']">Let&apos;s Build Something Remarkable</h2>
              <p className="mt-4 text-slate-300">
                I&apos;m always interested in new collaborations and product challenges.
                Share a quick brief and we&apos;ll take it from there.
              </p>
            </div>

            <motion.div
              className="mt-12 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <ContactForm />
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                  <div className="mt-4 space-y-4 text-slate-300">
                    <a href="mailto:banteamlak1888@gmail.com" className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                      <Mail className="w-5 h-5" />
                      banteamlak1888@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/banteamlak-begashaw-a11704298" className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn Profile
                    </a>
                    <a href="https://github.com" className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                      <Github className="w-5 h-5" />
                      GitHub Profile
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="mt-2 text-slate-200">Addis Ababa, Ethiopia</p>
                  <p className="mt-2 text-sm text-slate-400">Available for remote and onsite work worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-200">
                  YG
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                Crafting polished digital experiences with modern technologies and a product-first mindset.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/yibeltal-gashaw" className="text-slate-400 hover:text-cyan-300 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/yibeltal-gashaw21/" className="text-slate-400 hover:text-cyan-300 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:yibeltalgashaw320@example.com" className="text-slate-400 hover:text-cyan-300 transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#home" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Home size={16} />
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Code2 size={16} />
                    </span>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <FolderOpen size={16} />
                    </span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <MessageSquare size={16} />
                    </span>

                    certifcates
                  </a>
                </li>
                <li>
                  <a href="#contact" className="group flex items-center gap-3 hover:text-white transition-colors">
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <MessageSquare size={16} />
                    </span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Addis Ababa, Ethiopia</li>
                <li>banteamlak1888@gmail.com</li>
                <li>Available for remote and onsite work</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>(c) {new Date().getFullYear()} Banteamlak Begashaw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

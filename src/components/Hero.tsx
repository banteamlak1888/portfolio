import { motion } from "framer-motion";
import '../translations/i18n';
import { t } from "i18next";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import profile from "../images/profile.png"; 

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

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

const Hero = () => {
    return (
        <header id="home" className="relative min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
                    <motion.div initial="initial" animate="animate" variants={fadeIn}>
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                            Full-stack developer
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                            Open to remote
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white font-['Space_Grotesk']"
                        >
                            {t('hero.greeting')}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-200">
                                {t('hero.title')}
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            {t('hero.description')}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:scale-[1.02]"
                            >
                                View Projects
                                <ArrowUpRight size={16} />
                            </a>
                            <a
                                href="#"

                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                {t('hero.downloadCV')}
                            </a>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6 text-slate-400">
                            <a href="https://github.com" className="hover:text-cyan-300 transition-colors" aria-label="GitHub">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/banteamlak-begashaw-a11704298" className="hover:text-cyan-300 transition-colors" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href="mailto:banteamlak1888@gmail.com" className="hover:text-cyan-300 transition-colors" aria-label="Email">
                                <Mail size={22} />
                            </a>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { label: 'Years Experience', value: '4+' },
                                { label: 'Projects Shipped', value: '20+' },
                                { label: 'Countries Served', value: '6' }
                            ].map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.div variants={fadeInUp} className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4 shadow-2xl">
                            <div className="rounded-[2rem] bg-slate-950/70 p-4">
                                <img
                                    src={profile}
                                    alt="Banteamlak Begashaw"
                                    className="mx-auto h-64 w-64 rounded-full object-cover ring-2 ring-white/15"
                                />
                                <div className="mt-5 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Banteamlak Begashaw</h3>
                                        <p className="text-sm text-slate-400">Full Stack Developer</p>
                                    </div>
                                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Addis Ababa</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-xl">
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Specialties</div>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
                                <span className="rounded-full bg-white/10 px-3 py-1">Design Systems</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">AI</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Cloud</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

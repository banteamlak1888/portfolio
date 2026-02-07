import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import welcome from "../images/wellcome.png";
import lgoin from "../images/login-page.png";
import signup from "../images/create-aacount.png";

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
const ProjectCard = ({
    project,
    index
}: {
    project: {
        title: string;
        description: string;
        images: string[];
        tech: string[];
        url: string;
    };
    index: number;
}) => {
    return (
        <motion.div
            key={index}
            className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-xl"
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
            <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={project.images[0]}
                        alt={`${project.title} screenshot 1`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>
                {project.images[1] && (
                    <div className="absolute top-0 right-0 h-full w-1/3 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-l from-slate-950/40 via-slate-950/10 to-transparent"></div>
                        <img
                            src={project.images[1]}
                            alt={`${project.title} screenshot 2`}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 ring-1 ring-white/10"></div>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>
                <a href={project.url} className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
            </div>
        </motion.div>
    );
};

const FeaturedSection = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white font-['Space_Grotesk']">Featured Projects</h2>
                        <p className="mt-3 text-slate-300 max-w-2xl">
                            A selection of recent builds with a focus on performance, polish, and business impact.
                        </p>
                    </div>
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                        Start a project
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <motion.div
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        {
                            title: 'Enawuga',
                            description: 'Full-stack chatting platform. A refined, secure place to connect.',
                            images: [
                                welcome,
                                lgoin,
                                signup
                            ],
                            tech: ['React', 'Node.js', 'MongoDB'],
                            url: "https://github.com/yibeltal-gashaw/Telegram-Clone.git"
                        },
                        {
                            title: 'Task Management System',
                            description: 'Collaborative delivery workspace with live updates and role-based access.',
                            images: [
                                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
                                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
                            ],
                            tech: ['Next.js', 'PostgreSQL', 'WebSocket'],
                            url: "https://github.com/yibeltal-gashaw/Telegram-Clone.git"
                        },
                        {
                            title: 'Analytics Dashboard',
                            description: 'High-signal insights with custom data visualizations and automated alerts.',
                            images: [
                                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
                                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
                            ],
                            tech: ['React', 'D3.js', 'Express'],
                            url: "https://github.com/yibeltal-gashaw/Telegram-Clone.git"
                        },
                    ].map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedSection;

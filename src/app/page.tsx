"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Code, Globe, Mail, ExternalLink, User, Terminal, ChevronRight, FileText, Send, GraduationCap, Award, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// 3D Tilt Component
function TiltCard({ children, className, tiltAmount = 15 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltAmount}deg`, `-${tiltAmount}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltAmount}deg`, `${tiltAmount}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} 
        className="w-full h-full"
      >
        {children}
      </div>
      
      {/* Dynamic 3D Glow on Hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none rounded-inherit"
        style={{
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 1])
        }}
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <main className="min-h-screen pb-20 overflow-hidden relative" style={{ perspective: "1000px" }}>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white tracking-tighter">
            Dipti<span className="text-primary">.dev</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors hover:-translate-y-1 transform duration-200">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden origin-top"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Dynamic Background Particles (3D space) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 1 + 'px',
              height: Math.random() * 6 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              translateZ: Math.random() * 500 - 250 + 'px',
            }}
            animate={{
              y: [0, Math.random() * -200 - 50],
              opacity: [0.1, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Background Glowing Orbs */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/30 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 relative z-10" style={{ transformStyle: "preserve-3d" }}>
        
        {/* HERO SECTION */}
        <motion.section 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32 pt-10"
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div 
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              🚀 Available for New Opportunities
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
              Hi, I'm <br/><span className="text-gradient">Dipti Kumari</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
              Full Stack Developer | React.js & Node.js Specialist
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <TiltCard tiltAmount={10}>
                <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                  <Mail size={18} /> Contact Me
                </a>
              </TiltCard>
              <TiltCard tiltAmount={10}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                  <FileText size={18} /> Download Resume
                </a>
              </TiltCard>
              <TiltCard tiltAmount={15}>
                <a href="https://linkedin.com/in/dipti-kumari-6032aa39b" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full glass-panel hover:bg-white/10 transition-all">
                  <Globe size={18} />
                </a>
              </TiltCard>
              <TiltCard tiltAmount={15}>
                <a href="https://github.com/diptikumari12" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full glass-panel hover:bg-white/10 transition-all">
                  <Code size={18} />
                </a>
              </TiltCard>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative mt-8 md:mt-0" style={{ perspective: "1000px" }}>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110" />
            
            {/* 3D Floating Avatar */}
            <TiltCard tiltAmount={20} className="rounded-full">
              <motion.div 
                className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] ring-2 ring-primary/30"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/hero.jpg" 
                  alt="Dipti Kumari Avatar" 
                  fill 
                  className="object-cover object-top scale-105" 
                  priority 
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none" />
              </motion.div>
            </TiltCard>
          </div>
        </motion.section>

        {/* BENTO GRID (ABOUT & SKILLS) */}
        <motion.section 
          id="about"
          className="mb-32 scroll-mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* About Card */}
            <TiltCard tiltAmount={5} className="md:col-span-2 rounded-[2rem]">
              <motion.div variants={fadeIn} className="glass-panel p-8 h-full rounded-[2rem] relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-primary/30" />
                <div className="flex items-center gap-4 mb-4 relative" style={{ transform: "translateZ(30px)" }}>
                  <div className="p-3 bg-primary/20 rounded-xl text-primary shadow-lg"><User size={24} /></div>
                  <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">About Me</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg relative" style={{ transform: "translateZ(20px)" }}>
                  BCA graduate and Full Stack Developer with hands-on experience building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB (MERN stack). I specialize in REST API design, JWT authentication, and responsive UI development. Currently working as a UI/UX Design Intern, adding a strong design perspective to my development work.
                </p>
              </motion.div>
            </TiltCard>

            {/* Frameworks Card */}
            <TiltCard tiltAmount={10} className="rounded-[2rem]">
              <motion.div id="skills" variants={fadeIn} className="glass-panel p-8 h-full rounded-[2rem] relative overflow-hidden group hover:border-purple-500/50 transition-colors scroll-mt-24 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl transition-all group-hover:bg-purple-500/30" />
                <h3 className="text-2xl font-bold text-purple-400 mb-6 relative" style={{ transform: "translateZ(30px)" }}>Frameworks</h3>
                <ul className="space-y-4 text-lg font-medium relative" style={{ transform: "translateZ(20px)" }}>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" /> React.js & Next.js</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" /> Node.js & Express</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" /> Spring Boot</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" /> Tailwind CSS</li>
                </ul>
              </motion.div>
            </TiltCard>

            {/* Languages Card */}
            <TiltCard tiltAmount={10} className="rounded-[2rem]">
              <motion.div variants={fadeIn} className="glass-panel p-8 h-full rounded-[2rem] relative overflow-hidden group hover:border-emerald-500/50 transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transition-all group-hover:bg-emerald-500/20" />
                <h3 className="text-2xl font-bold text-emerald-400 mb-6 relative" style={{ transform: "translateZ(30px)" }}>Languages</h3>
                <div className="flex flex-wrap gap-3 relative" style={{ transform: "translateZ(20px)" }}>
                  {['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Python', 'Java'].map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-emerald-500/10 rounded-xl text-sm border border-emerald-500/20 hover:bg-emerald-500/30 text-emerald-100 transition-colors cursor-default shadow-lg backdrop-blur-md">{lang}</span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>

            {/* Tools Card */}
            <TiltCard tiltAmount={5} className="md:col-span-2 rounded-[2rem]">
              <motion.div variants={fadeIn} className="glass-panel p-8 h-full rounded-[2rem] md:col-span-2 relative overflow-hidden group hover:border-blue-500/50 transition-colors shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all group-hover:bg-blue-500/20" />
                <h3 className="text-2xl font-bold text-blue-400 mb-6 relative" style={{ transform: "translateZ(30px)" }}>Databases & Tools</h3>
                <div className="flex flex-wrap gap-3 relative" style={{ transform: "translateZ(20px)" }}>
                  {['MongoDB', 'MySQL', 'PostgreSQL', 'Git & GitHub', 'Docker', 'Figma', 'Postman', 'SEO', 'Google Ads'].map((tool) => (
                    <span key={tool} className="px-5 py-2.5 bg-blue-500/10 text-blue-200 rounded-xl text-sm font-medium border border-blue-500/20 hover:bg-blue-500/30 transition-colors shadow-lg backdrop-blur-md cursor-default">{tool}</span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>

          </div>
        </motion.section>

        {/* TIMELINE (EDUCATION & CERTS) */}
        <motion.section 
          id="timeline"
          className="mb-32 scroll-mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-12 justify-center">
            <TiltCard tiltAmount={20} className="rounded-xl">
              <div className="p-4 bg-amber-500/20 rounded-xl text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]"><GraduationCap size={32} /></div>
            </TiltCard>
            <h2 className="text-4xl font-extrabold drop-shadow-lg">Journey & Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative" style={{ transformStyle: "preserve-3d" }}>
            <TiltCard tiltAmount={5} className="rounded-2xl">
              <div className="glass-panel p-8 rounded-2xl h-full shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative" style={{ transform: "translateZ(20px)" }}>
                  <Award className="text-primary"/> Education
                </h3>
                <div className="space-y-8 border-l-2 border-primary/40 pl-6 ml-3 relative" style={{ transform: "translateZ(10px)" }}>
                  <motion.div variants={fadeIn} className="relative group">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,1)] group-hover:scale-150 transition-transform" />
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-primary font-mono text-sm mb-2 mt-1 bg-primary/10 inline-block px-2 py-0.5 rounded">2023 - 2026</p>
                    <p className="text-muted-foreground mt-2">CIMAGE Professional College, Patna, Bihar</p>
                  </motion.div>
                  <motion.div variants={fadeIn} className="relative group">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 bg-primary/50 rounded-full group-hover:scale-150 transition-transform group-hover:bg-primary shadow-[0_0_15px_rgba(99,102,241,0)] group-hover:shadow-[0_0_15px_rgba(99,102,241,1)]" />
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Intermediate (XII) - BSEB</h4>
                    <p className="text-primary font-mono text-sm mb-2 mt-1 bg-primary/10 inline-block px-2 py-0.5 rounded">2022 - 2023</p>
                    <p className="text-muted-foreground mt-2">S.B College, Arrah, Bihar</p>
                  </motion.div>
                </div>
              </div>
            </TiltCard>

            <TiltCard tiltAmount={5} className="rounded-2xl">
              <div className="glass-panel p-8 rounded-2xl h-full shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative" style={{ transform: "translateZ(20px)" }}>
                  <Award className="text-purple-400"/> Certifications
                </h3>
                <div className="space-y-4 relative" style={{ transform: "translateZ(10px)" }}>
                  {[
                    { title: "TCS iON Career Edge - Generative AI", date: "June 2026" },
                    { title: "AWS Educate - Intro to Generative AI", date: "2026" },
                    { title: "Deloitte - Data Analytics Job Simulation", date: "July 2026" },
                    { title: "IBM Cognitive Class - Data Analysis", date: "May 2026" },
                    { title: "Coursera - Build a Free WordPress Site", date: "May 2026" }
                  ].map((cert, i) => (
                    <motion.div variants={fadeIn} key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center hover:scale-[1.03] hover:bg-white/10 hover:border-purple-500/50 transition-all group shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <span className="text-white font-medium group-hover:text-purple-300 transition-colors">{cert.title}</span>
                      <span className="text-xs text-purple-400 font-mono bg-purple-500/20 px-3 py-1.5 rounded-full whitespace-nowrap ml-4 border border-purple-500/30">{cert.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.section>

        {/* IMAGE-RICH PROJECTS SECTION */}
        <motion.section 
          id="projects"
          className="mb-32 scroll-mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex items-center gap-4 mb-12 justify-center">
            <TiltCard tiltAmount={20} className="rounded-xl">
              <div className="p-4 bg-emerald-500/20 rounded-xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"><Terminal size={32} /></div>
            </TiltCard>
            <h2 className="text-4xl font-extrabold drop-shadow-lg">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Project 1 */}
            <TiltCard tiltAmount={10} className="rounded-3xl">
              <motion.div variants={fadeIn} className="glass-panel overflow-hidden rounded-3xl h-full flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image src="/food.jpg" alt="Food Restro" fill className="object-cover group-hover:scale-125 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20 shadow-lg">In Development</div>
                  
                  <div className="absolute bottom-6 left-8 right-8" style={{ transform: "translateZ(40px)" }}>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Food Restro</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker'].map(t => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 rounded-md backdrop-blur-md">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between relative" style={{ transform: "translateZ(20px)" }}>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    Full Stack Food Ordering & Restaurant Application. Collaborated with a team to build the Next.js frontend and coordinated with backend developers on a secure, scalable Spring Boot service. Contributed to relational data models and REST APIs.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-bold uppercase tracking-wider group-hover:text-emerald-300 cursor-pointer w-fit">
                    View Project <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </TiltCard>

            {/* Project 2 */}
            <TiltCard tiltAmount={10} className="rounded-3xl">
              <motion.div variants={fadeIn} className="glass-panel overflow-hidden rounded-3xl h-full flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image src="/ecommerce.jpg" alt="Goverdhan Food Product" fill className="object-cover group-hover:scale-125 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-colors duration-500" />
                  
                  <div className="absolute bottom-6 left-8 right-8" style={{ transform: "translateZ(40px)" }}>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Goverdhan Food Product</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'MongoDB', 'Razorpay'].map(t => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-blue-500/20 border border-blue-500/30 rounded-md backdrop-blur-md">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between relative" style={{ transform: "translateZ(20px)" }}>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    Full-stack grocery e-commerce platform with product, cart, and order management. Designed REST APIs for authentication, products, and integrated Razorpay payment gateway. Implemented JWT-based authentication for secure login.
                  </p>
                  <a href="https://github.com/diptikumari12/goverdhan-food-product" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-2 text-sm text-white font-bold bg-blue-600/30 px-6 py-3 rounded-xl hover:bg-blue-600/50 border border-blue-500/50 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                    <Code size={18} /> View Code
                  </a>
                </div>
              </motion.div>
            </TiltCard>

            {/* Project 3 */}
            <TiltCard tiltAmount={8} className="md:col-span-2 rounded-3xl">
              <motion.div variants={fadeIn} className="glass-panel overflow-hidden rounded-3xl md:col-span-2 flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="relative h-72 md:h-auto md:w-1/2 overflow-hidden">
                  <Image src="/agency.jpg" alt="Slang Era Marketing" fill className="object-cover group-hover:scale-125 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-500" />
                </div>
                <div className="p-10 md:w-1/2 flex flex-col justify-center relative bg-gradient-to-l from-black/80 to-black/90">
                  <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg" style={{ transform: "translateZ(30px)" }}>Slang Era Marketing</h3>
                  <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(25px)" }}>
                    {['React.js', 'Responsive Design', 'SEO'].map(t => (
                      <span key={t} className="px-3 py-1.5 text-xs font-mono text-purple-300 bg-purple-500/20 border border-purple-500/30 rounded-lg backdrop-blur-md">{t}</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10" style={{ transform: "translateZ(20px)" }}>
                    Collaborated with a team to design and build a live business website for a digital marketing agency. Contributed to the client portal login, booking flow, and helped build a responsive, SEO-optimized layout for client conversion.
                  </p>
                  <a href="https://slangeramarketing.com" target="_blank" rel="noreferrer" className="flex w-fit items-center gap-3 text-base text-white font-bold bg-purple-600/40 px-8 py-4 rounded-xl hover:bg-purple-600/60 border border-purple-500/50 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]" style={{ transform: "translateZ(40px)" }}>
                    <ExternalLink size={20} /> Visit Live Demo
                  </a>
                </div>
              </motion.div>
            </TiltCard>

          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact"
          className="mb-20 scroll-mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <TiltCard tiltAmount={5} className="rounded-3xl max-w-3xl mx-auto">
            <div className="glass-panel p-10 md:p-16 text-center rounded-3xl relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-2 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              <div className="inline-block p-5 bg-primary/20 rounded-full text-primary mb-8 shadow-[0_0_30px_rgba(99,102,241,0.5)] relative" style={{ transform: "translateZ(40px)" }}>
                <Send size={40} />
              </div>
              <h2 className="text-5xl font-extrabold mb-6 drop-shadow-xl relative" style={{ transform: "translateZ(30px)" }}>Let's Work Together</h2>
              <p className="text-muted-foreground mb-10 text-xl font-light relative" style={{ transform: "translateZ(20px)" }}>
                I'm currently looking for new opportunities as a Full Stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <form className="space-y-6 text-left relative" style={{ transform: "translateZ(30px)" }} onSubmit={(e) => { e.preventDefault(); alert('Form submitted! This is a UI mockup.'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wider">Name</label>
                    <input type="text" required className="w-full bg-black/40 border-2 border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/80 transition-all hover:bg-black/60 shadow-inner" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white uppercase tracking-wider">Email</label>
                    <input type="email" required className="w-full bg-black/40 border-2 border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/80 transition-all hover:bg-black/60 shadow-inner" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white uppercase tracking-wider">Message</label>
                  <textarea required rows={5} className="w-full bg-black/40 border-2 border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary/80 transition-all resize-none hover:bg-black/60 shadow-inner" placeholder="Hello Dipti, I'd like to discuss a project..." />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-extrabold text-xl py-5 rounded-xl flex items-center justify-center gap-3 hover:from-primary/80 hover:to-purple-600/80 transition-all hover:scale-[1.02] shadow-[0_10px_40px_rgba(99,102,241,0.6)] mt-6">
                  Send Message <Send size={24} />
                </button>
              </form>
            </div>
          </TiltCard>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center py-10 border-t border-white/10 text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="font-medium text-white/50">© 2026 Dipti Kumari. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/diptikumari12" className="hover:text-white hover:scale-125 transition-all"><Code size={20} /></a>
            <a href="https://linkedin.com/in/dipti-kumari-6032aa39b" className="hover:text-white hover:scale-125 transition-all"><Globe size={20} /></a>
            <a href="mailto:diptikumari08932@gmail.com" className="hover:text-white hover:scale-125 transition-all"><Mail size={20} /></a>
          </div>
        </footer>
      </div>
    </main>
  );
}

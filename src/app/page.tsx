"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Code, Globe, Mail, Menu, X, Award } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";






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

  // Handle Navbar Background and Mount
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

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-purple-500/30 relative overflow-x-hidden">
      
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* LEFT SIDEBAR (Socials) */}
      <div className="fixed left-0 top-0 bottom-0 w-20 hidden md:flex flex-col items-center justify-center gap-10 z-50 border-r border-white/5 bg-black/20 backdrop-blur-sm">
        <a href="https://github.com/diptikumari12" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://linkedin.com/in/dipti-kumari-6032aa39b" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="mailto:diptikumari08932@gmail.com" className="text-muted-foreground hover:text-white transition-colors hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="tel:+919110122071" className="text-muted-foreground hover:text-white transition-colors hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'} md:pl-20`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
          <a href="#" className="text-xl font-bold text-white tracking-widest hidden md:block">
            DK
          </a>
          
          {/* Mobile Logo */}
          <a href="#" className="text-xl font-bold text-white tracking-widest md:hidden">
            DK
          </a>
          
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <span className="text-sm font-medium text-white/80">diptikumari08932@gmail.com</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-bold text-white hover:text-purple-400 transition-colors uppercase tracking-wider">ABOUT</a>
            <a href="#work" className="text-sm font-bold text-white hover:text-purple-400 transition-colors uppercase tracking-wider">WORK</a>
            <a href="#contact" className="text-sm font-bold text-white hover:text-purple-400 transition-colors uppercase tracking-wider">CONTACT</a>
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
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-6 md:hidden origin-top"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white tracking-widest">ABOUT</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white tracking-widest">WORK</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white tracking-widest">CONTACT</a>
            <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
              {/* Mobile Socials */}
              <a href="https://github.com/diptikumari12" target="_blank" rel="noreferrer" className="text-white"><Code /></a>
              <a href="https://linkedin.com/in/dipti-kumari-6032aa39b" target="_blank" rel="noreferrer" className="text-white"><Globe /></a>
              <a href="mailto:diptikumari08932@gmail.com" className="text-white"><Mail /></a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Background Glowing Orbs (Static for performance) */}

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

      <div className="max-w-6xl mx-auto px-6 md:pl-[104px] lg:pl-[104px] xl:px-6 pt-32 relative z-10" style={{ transformStyle: "preserve-3d" }}>
        
        {/* HERO SECTION */}
        <motion.section 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-40 pt-20"
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex-1 space-y-2 text-center md:text-left relative z-20">
            
            <motion.h2 
              className="text-2xl md:text-3xl text-purple-400 font-light tracking-wide mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello! I&apos;m
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-white drop-shadow-lg mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              DIPTI<br/>KUMARI
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6 max-w-md mx-auto md:mx-0 relative z-20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 tracking-wide">
                Full Stack Developer | MERN Stack
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                BCA graduate pursuing MCA at Chandigarh University, with hands-on experience in full-stack web development and UI/UX design.
              </p>
              
              {/* Sleek Integrated Action Bar - Fixes wrapping and looks extremely premium */}
              <div className="inline-flex flex-col sm:flex-row items-center p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl shadow-2xl relative z-30 mt-6 w-full sm:w-max">
                <a href="#work" className="w-full sm:w-auto text-center bg-white text-black font-extrabold tracking-widest text-xs px-8 py-4 rounded-full uppercase transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  View Work
                </a>
                <div className="hidden sm:block w-px h-8 bg-white/10 mx-2"></div>
                <a href="/resume.pdf" download="Dipti_Kumari_Resume.pdf" className="w-full sm:w-auto text-center text-purple-300 hover:text-white font-bold tracking-widest text-xs px-6 py-4 rounded-full uppercase transition-all hover:bg-white/10">
                  Resume
                </a>
                <div className="hidden sm:block w-px h-8 bg-white/10 mx-2"></div>
                <a href="#contact" className="w-full sm:w-auto text-center text-gray-300 hover:text-white font-bold tracking-widest text-xs px-6 py-4 rounded-full uppercase transition-all hover:bg-white/10">
                  Contact
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative mt-16 md:mt-0">
            
            {/* Pure Static Raw Cutout (No Effects, No Tilt, No Float) EXACTLY as preferred */}
            <div className="relative w-[350px] h-[450px] md:w-[500px] md:h-[650px] mx-auto md:mr-0 flex items-end justify-center z-10">
              
              <div className="absolute inset-0 w-full h-full">
                {/* Improved mask and blending for true transparency effect on dark backgrounds */}
                <Image 
                  src="/hero2.jpg" 
                  alt="Dipti Kumari" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain object-bottom mix-blend-screen brightness-110 contrast-125 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_30%,transparent_90%)]" 
                  priority 
                />
              </div>

              {/* Dynamic floating text overlay */}
              <motion.div 
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[120%] text-center pointer-events-none"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-white font-black text-[14px] md:text-[16px] tracking-[0.2em] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                  OPEN TO OPPORTUNITIES
                </p>
                <p className="text-purple-300 font-bold text-xs md:text-sm mt-2 drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                  Available for Full-Time & Internship Roles
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section 
          id="education"
          className="mb-40 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
              Education &<br/>
              <span className="text-purple-400 font-light italic">Journey</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base tracking-wide">
              Building my foundation, one milestone at a time.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto px-4">
            {/* Center glowing line container with moving laser effect */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 overflow-hidden">
              {/* Moving glowing laser dot */}
              <motion.div 
                className="w-full h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,1)]"
                animate={{ y: [-150, 800] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* MCA */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-24 group">
              <div className="w-full md:w-[40%] text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide leading-tight">Master of<br className="hidden md:block"/>Computer<br className="hidden md:block"/>Applications</h3>
                <p className="text-purple-400 font-bold text-sm md:text-base tracking-wider">Chandigarh University</p>
              </div>
              
              <div className="relative flex justify-center w-full md:w-[20%] z-10 mb-6 md:mb-0">
                {/* Glowing Dot Top */}
                <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
                
                {/* Center Box */}
                <div className="bg-[#050505] px-6 py-4 rounded-2xl border border-white/5 shadow-2xl relative z-10 group-hover:border-purple-500/30 transition-colors duration-500 min-w-[200px]">
                  <div className="text-purple-400 font-bold text-[10px] tracking-widest uppercase mb-1 whitespace-nowrap text-center">Currently Pursuing</div>
                  <div className="text-xl md:text-2xl font-black text-white/90 tracking-widest whitespace-nowrap text-center">2026 - Present</div>
                </div>
              </div>
              
              <div className="w-full md:w-[40%] pl-0 md:pl-12 text-center md:text-left">
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                  Focusing on advanced software architecture, scalable web technologies, and modern development practices.
                </p>
              </div>
            </div>

            {/* BCA */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="w-full md:w-[40%] text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide leading-tight">Bachelor of<br className="hidden md:block"/>Computer<br className="hidden md:block"/>Applications</h3>
                <p className="text-purple-400 font-bold text-sm md:text-base tracking-wider">CIMAGE Professional College</p>
              </div>
              
              <div className="relative flex justify-center w-full md:w-[20%] z-10 mb-6 md:mb-0">
                {/* Glowing Dot Top */}
                <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
                
                {/* Center Box */}
                <div className="bg-[#050505] px-6 py-4 rounded-2xl border border-white/5 shadow-2xl relative z-10 group-hover:border-purple-500/30 transition-colors duration-500 min-w-[200px]">
                  <div className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-1 text-center">Completed</div>
                  <div className="text-xl md:text-2xl font-black text-white/90 tracking-widest whitespace-nowrap text-center">2023 - 2026</div>
                </div>
              </div>
              
              <div className="w-full md:w-[40%] pl-0 md:pl-12 text-center md:text-left">
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                  Built a strong foundation in computer science and developed robust MERN stack projects.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ULTRA-PREMIUM INTERACTIVE EXPANDING TECH STACK */}
        <motion.section 
          id="techstack"
          className="mb-40 scroll-mt-32 pt-20 relative max-w-6xl mx-auto px-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tech Stack</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
              Hover (or tap on mobile) over the panels below to explore my technical expertise.
            </p>
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-4 w-full">
            
            {/* Frontend Panel */}
            <div tabIndex={0} className="flex-1 md:hover:flex-[2.5] focus:flex-[2.5] md:focus:flex-[2.5] transition-all duration-700 ease-in-out bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden group cursor-pointer outline-none min-h-[100px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-0 w-full flex justify-center md:-rotate-90 md:origin-center md:absolute md:top-1/2 md:-translate-y-1/2 md:group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300 pointer-events-none">
                <h3 className="text-xl font-bold text-gray-500 tracking-widest uppercase">Frontend</h3>
              </div>

              <div className="p-8 h-full w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 hidden md:block">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h4 className="text-cyan-400 font-bold text-sm">HTML/CSS/JS</h4>
                    <p className="text-gray-500 text-xs">Core Web</p>
                  </div>
                  <div className="flex flex-col bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h4 className="text-cyan-400 font-bold text-sm">React.js</h4>
                    <p className="text-gray-500 text-xs">UI Library</p>
                  </div>
                  <div className="flex flex-col bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h4 className="text-white font-bold text-sm">Next.js</h4>
                    <p className="text-gray-500 text-xs">Framework</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Panel */}
            <div tabIndex={0} className="flex-1 md:hover:flex-[2.5] focus:flex-[2.5] transition-all duration-700 ease-in-out bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden group cursor-pointer outline-none min-h-[100px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-0 w-full flex justify-center md:-rotate-90 md:origin-center md:absolute md:top-1/2 md:-translate-y-1/2 md:group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300 pointer-events-none">
                <h3 className="text-xl font-bold text-gray-500 tracking-widest uppercase">Backend</h3>
              </div>

              <div className="p-8 h-full w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 hidden md:block">Backend</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div><h4 className="text-green-400 font-bold text-sm">Node.js</h4><p className="text-gray-500 text-xs">Runtime</p></div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div><h4 className="text-white font-bold text-sm">Express.js</h4><p className="text-gray-500 text-xs">Framework</p></div>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div><h4 className="text-gray-300 font-bold text-sm">REST APIs</h4><p className="text-gray-500 text-xs">Architecture</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database Panel */}
            <div tabIndex={0} className="flex-1 md:hover:flex-[2.5] focus:flex-[2.5] transition-all duration-700 ease-in-out bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden group cursor-pointer outline-none min-h-[100px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-0 w-full flex justify-center md:-rotate-90 md:origin-center md:absolute md:top-1/2 md:-translate-y-1/2 md:group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300 pointer-events-none">
                <h3 className="text-xl font-bold text-gray-500 tracking-widest uppercase">Database</h3>
              </div>

              <div className="p-8 h-full w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 hidden md:block">Database</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <div><h4 className="text-emerald-400 font-bold text-sm">MongoDB</h4><p className="text-gray-500 text-xs">NoSQL Document DB</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Panel */}
            <div tabIndex={0} className="flex-1 md:hover:flex-[2.5] focus:flex-[2.5] transition-all duration-700 ease-in-out bg-[#0a0a0a] border border-white/10 rounded-3xl relative overflow-hidden group cursor-pointer outline-none min-h-[100px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-0 w-full flex justify-center md:-rotate-90 md:origin-center md:absolute md:top-1/2 md:-translate-y-1/2 md:group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300 pointer-events-none">
                <h3 className="text-xl font-bold text-gray-500 tracking-widest uppercase">Tools</h3>
              </div>

              <div className="p-8 h-full w-full opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 hidden md:block">Tools & Design</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h4 className="text-orange-400 font-bold text-sm">Git & GitHub</h4>
                    <p className="text-gray-500 text-xs">Version Control</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h4 className="text-blue-400 font-bold text-sm">Docker</h4>
                    <p className="text-gray-500 text-xs">Containerization</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm col-span-2">
                    <h4 className="text-pink-400 font-bold text-sm">Figma</h4>
                    <p className="text-gray-500 text-xs">UI/UX Design & Prototyping</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about"
          className="mb-40 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-6xl md:text-[6rem] font-black leading-[0.8] text-white tracking-tighter">ABOUT<br/><span className="text-purple-400">ME</span></h2>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8 relative">
              <div className="border border-white/10 border-dashed p-8 relative bg-white/5 backdrop-blur-sm">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  I am a BCA graduate currently pursuing an MCA at Chandigarh University. With a strong interest in full-stack development, modern web technologies, and UI/UX design, I am passionate about building responsive, user-friendly, and scalable applications. I enjoy tackling complex problems and continually learning new skills to stay at the forefront of web development.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section 
          id="experience"
          className="mb-40 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
              Work <span className="text-purple-400 font-light italic">Experience</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Exp 1 */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">UI/UX Design Intern</h3>
                  <p className="text-purple-400 font-medium tracking-wide">Casa Chic Interiors</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-white/10 text-white text-sm rounded-full w-max">
                  2026 - Present
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4 text-sm md:text-base leading-relaxed">
                <li>Designed intuitive and engaging user interfaces for client websites using Figma.</li>
                <li>Created high-fidelity wireframes and interactive prototypes for cross-functional teams.</li>
                <li>Collaborated with developers to ensure seamless translation of designs into functional frontend components.</li>
              </ul>
            </motion.div>

            {/* Exp 2 */}
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Freelance Web Developer</h3>
                  <p className="text-cyan-400 font-medium tracking-wide">Self-Employed</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-white/10 text-white text-sm rounded-full w-max">
                  July 2026 - Present
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4 text-sm md:text-base leading-relaxed">
                <li>Developed full-stack web applications for various clients using the MERN stack and Next.js.</li>
                <li>Implemented responsive designs, ensuring cross-browser and cross-device compatibility.</li>
                <li>Integrated third-party APIs and managed database schemas for efficient data retrieval.</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS SECTION */}
        <motion.section 
          id="work"
          className="mb-40 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-500">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-b border-white/10 py-12">
            
            {/* Column 1: Goverdhan */}
            <div className="px-6 flex flex-col h-full group" style={{ perspective: "1000px" }}>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-5xl font-light text-white">01</h3>
                <div className="text-right">
                  <h4 className="text-white font-bold tracking-widest">GOVERDHAN</h4>
                  <p className="text-gray-500 text-sm">E-Commerce</p>
                </div>
              </div>
              <div className="mb-8">
                <h5 className="text-white font-bold mb-2">Tech Stack & Features</h5>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  React.js, Node.js, Express.js, MongoDB<br/><br/>
                  Full-stack MERN grocery platform featuring a product catalog, category filtering, cart management, and user authentication.
                </p>

              </div>
              <motion.div 
                className="mt-auto relative h-48 w-full rounded-lg overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ y: [-8, 8, -8] }}
                whileHover={{ rotateX: 10, rotateY: -10, z: 50, scale: 1.05, boxShadow: "20px 20px 40px rgba(168,85,247,0.3)", y: 0 }}
                transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <Image src="/goverdhan.png" alt="Goverdhan Food Product" unoptimized={true} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>

            {/* Column 2: Food Restro */}
            <div className="px-6 flex flex-col h-full group pt-10 md:pt-0" style={{ perspective: "1000px" }}>
              <motion.div 
                className="mb-10 w-full relative h-64 rounded-lg overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ y: [8, -8, 8] }}
                whileHover={{ rotateX: -10, rotateY: 10, z: 50, scale: 1.05, boxShadow: "-20px 20px 40px rgba(168,85,247,0.3)", y: 0 }}
                transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <Image src="/food.jpg" alt="Food Restro" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-5xl font-light text-white">02</h3>
                <div className="text-right">
                  <h4 className="text-white font-bold tracking-widest">FOOD RESTRO</h4>
                  <p className="text-gray-500 text-sm">Restaurant Web App</p>
                </div>
              </div>
              <div className="mb-8 mt-auto">
                <h5 className="text-white font-bold mb-2">Tech Stack & Features</h5>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Next.js, Node.js, Express.js<br/><br/>
                  Web development project for restaurant management. Implemented features for browsing menus, handling orders, and responsive layout.
                </p>

              </div>
            </div>

            {/* Column 3: Slang Era */}
            <div className="px-6 flex flex-col h-full group pt-10 md:pt-0" style={{ perspective: "1000px" }}>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-5xl font-light text-white">03</h3>
                <div className="text-right">
                  <h4 className="text-white font-bold tracking-widest uppercase">SLANG ERA</h4>
                  <p className="text-gray-500 text-sm">Marketing Agency</p>
                </div>
              </div>
              <div className="mb-8">
                <h5 className="text-white font-bold mb-2">Tech Stack & Features</h5>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  React.js, Responsive Design, SEO<br/><br/>
                  Client agency website for a digital marketing firm, featuring service portals, pricing sections, and high-conversion landing pages.
                </p>

              </div>
              <motion.div 
                className="mt-auto relative h-64 w-full rounded-lg overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ y: [-8, 8, -8] }}
                whileHover={{ rotateX: 10, rotateY: 10, z: 50, scale: 1.05, boxShadow: "20px 20px 40px rgba(168,85,247,0.3)", y: 0 }}
                transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }, default: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <Image src="/slangera.png" alt="Slang Era Marketing" unoptimized={true} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>

          </div>
        </motion.section>

        {/* CERTIFICATIONS SECTION */}
        <motion.section 
          id="certifications"
          className="mb-40 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4">
              Certifications & <span className="text-purple-400 font-light italic">Achievements</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-1">Generative AI</h3>
              <p className="text-gray-400 text-sm">TCS iON</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-1">AWS Educate</h3>
              <p className="text-gray-400 text-sm">Amazon Web Services</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-lg mb-1">Job Simulation</h3>
              <p className="text-gray-400 text-sm">Deloitte</p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section 
          id="contact"
          className="mb-32 scroll-mt-32 pt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4">
                Let&apos;s Work <span className="text-purple-400 font-light italic">Together</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/3 space-y-6">
                <a href="mailto:diptikumari08932@gmail.com" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors group">
                  <div className="bg-purple-500/20 p-4 rounded-full text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Email</h4>
                    <p className="text-gray-400 text-xs">diptikumari08932@gmail.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/dipti-kumari-6032aa39b" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
                  <div className="bg-blue-500/20 p-4 rounded-full text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">LinkedIn</h4>
                    <p className="text-gray-400 text-xs">Dipti Kumari</p>
                  </div>
                </a>
                <a href="https://github.com/diptikumari12" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-gray-500/50 transition-colors group">
                  <div className="bg-gray-500/20 p-4 rounded-full text-gray-400 group-hover:bg-gray-500 group-hover:text-white transition-colors">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">GitHub</h4>
                    <p className="text-gray-400 text-xs">diptikumari12</p>
                  </div>
                </a>
              </div>

              <div className="w-full lg:w-2/3 border border-white/10 border-dashed p-8 md:p-12 relative bg-black/40 backdrop-blur-sm">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                  {/* Web3Forms required hidden inputs */}
                  <input type="hidden" name="access_key" value="73fd06cb-4068-479b-8236-b2058e6cc40a" />
                  <input type="hidden" name="subject" value="New Submission from Portfolio" />
                  <input type="hidden" name="from_name" value="Portfolio Notification" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                      <input type="text" name="name" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-gray-700 font-medium text-base md:text-lg" placeholder="Your Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                      <input type="email" name="email" required className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-gray-700 font-medium text-base md:text-lg" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-all resize-none placeholder:text-gray-700 font-medium text-base md:text-lg" placeholder="Hello, I would like to discuss a project..." />
                  </div>
                  <div className="pt-4 flex flex-col md:flex-row items-center justify-end gap-4">
                    <button 
                      type="submit"
                      className="w-full md:w-auto bg-white text-black font-extrabold tracking-widest text-sm px-10 py-4 uppercase hover:bg-purple-400 hover:text-white transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
    </div>
  );
}

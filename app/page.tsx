
"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Database, ArrowRight, ExternalLink, Globe, Server } from 'lucide-react';
import uwiImage from './assets/images/uwi_crest.png'
import uelImage from './assets/images/uel_crest.png'
import myImage from './assets/images/me.png'
import { AnimatedLogo } from './components/logo/animatedLogo';


const BrittanyResumeWebsite = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSection, setCurrentSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    // const handleMouseMove = (e) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY });
    // };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionId);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  return (
    <div className="min-h-screen bg-white font-light text-gray-900 overflow-x-hidden">
      {/* Cursor Follower */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-40 border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-extralight tracking-widest text-gray-900">
              {/* BRITTANY THOMAS */}
              <div
                className="md:cursor-default cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <AnimatedLogo />
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              {['home', 'about', 'work', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-light tracking-wider uppercase transition-all duration-500 hover:text-violet-600 relative group ${currentSection === item ? 'text-violet-600' : 'text-gray-600'
                    }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="pt-6 pb-2 space-y-4">
              {['home', 'about', 'work', 'experience', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left text-lg font-light tracking-wider uppercase transition-all duration-500 hover:text-violet-600 relative group py-2 transform transition-transform ${currentSection === item ? 'text-violet-600' : 'text-gray-600'
                    } ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-violet-50/30">
          {/* Dynamic Floating Elements */}
          <div className="absolute inset-0">
            {/* Large Animated Orbs */}
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-violet-300/40 to-indigo-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/30 to-purple-300/40 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute top-20 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-300/20 to-violet-400/30 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-20 left-1/5 w-28 h-28 bg-gradient-to-br from-cyan-300/15 to-indigo-400/25 rounded-full blur-xl animate-bounce"></div>

            {/* Geometric Accent Shapes */}
            <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-violet-200/50 rounded-xl transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-indigo-200/40 rounded-lg transform -rotate-12 animate-bounce"></div>
            <div className="absolute top-1/5 left-1/4 w-8 h-8 bg-purple-300/60 rounded-full transform rotate-12 animate-ping"></div>
            <div className="absolute bottom-1/5 right-1/5 w-10 h-10 bg-violet-300/50 rounded-xl transform -rotate-45 animate-pulse"></div>

            {/* Floating Triangles */}
            <div className="absolute top-1/6 right-1/8 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-violet-200/40 transform rotate-12 animate-bounce"></div>
            <div className="absolute bottom-1/6 left-1/8 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-indigo-300/50 transform -rotate-45 animate-pulse"></div>

            {/* Hexagon Shapes */}
            <div className="absolute top-3/4 left-1/6 w-12 h-12 bg-gradient-to-br from-violet-200/40 to-indigo-200/30 transform rotate-30 animate-spin-slow"
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDuration: '20s' }}></div>
            <div className="absolute top-1/8 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-200/50 to-pink-200/40 transform rotate-60 animate-spin-slow"
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)', animationDuration: '25s' }}></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Dynamic Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/20 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/15 to-transparent"></div>

            {/* Diagonal Lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-200/20 to-transparent transform rotate-12"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/15 to-transparent transform -rotate-12"></div>

            {/* Radial Gradients */}
            <div className="absolute top-1/5 left-1/2 w-40 h-40 bg-radial-gradient from-violet-300/10 to-transparent rounded-full"></div>
            <div className="absolute bottom-1/5 right-1/2 w-32 h-32 bg-radial-gradient from-indigo-300/15 to-transparent rounded-full"></div>
          </div>

          {/* Large Abstract Shapes */}
          <div className="absolute -left-32 top-1/4 w-64 h-64 bg-gradient-to-br from-violet-600/10 to-indigo-700/5 rounded-full blur-3xl"></div>
          <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/8 to-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-500/3 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/8 to-indigo-600/6 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="text-center">
            {/* Elegant Typography Layout */}
            <div className="space-y-8 pt-32">
              {/* Main Name Display */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight text-gray-900 leading-none transition-all duration-700 ease-out">
                    BRITTANY
                  </h1>
                </div>
                <div>
                  <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 leading-none transition-all duration-700 ease-out">
                    THOMAS
                  </h1>
                </div>

                {/* Elegant Separator */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full"></div>
                  <div className="w-24 h-px bg-gradient-to-r from-violet-400 to-indigo-400"></div>
                  <div className="w-2 h-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-indigo-400 to-transparent"></div>
                </div>
              </div>

              {/* Professional Title */}
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 tracking-wide leading-relaxed">
                  Full-Stack Developer & Software Engineer
                </p>
                <p className="text-lg md:text-xl font-light text-gray-500 leading-relaxed max-w-3xl mx-auto">
                  Building seamless web and mobile applications with expertise in React, TypeScript, and Laravel.
                  Specializing in fintech and insurance platforms with a passion for user-centric design.
                </p>
              </div>

              {/* Elegant Info Cards */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-3 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="text-xs md:text-sm font-light text-gray-600 tracking-wide">📍 Kingston, Jamaica</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-3 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-xs md:text-sm font-light text-gray-600 tracking-wide">🎓 MSc Computer Science Student</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-4 py-3 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs md:text-sm font-light text-gray-600 tracking-wide">🌐 Available for Remote Work</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6 pb-20">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group relative inline-flex items-center space-x-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-light tracking-wide transition-all duration-700 hover:shadow-2xl hover:shadow-violet-600/30 transform hover:-translate-y-2 hover:scale-105"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 relative z-10" />

                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-xs font-light text-gray-400 tracking-widest uppercase">Scroll</div>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-gradient-to-b from-violet-600 to-indigo-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Floating Social Links */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col space-y-6">
            {[
              { icon: Github, href: "https://github.com/bolivthom", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bthomas-tech/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bolivthom@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group w-12 h-12 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-full flex items-center justify-center hover:bg-white hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-500 transform hover:scale-110"
                title={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors duration-300" />
              </a>
            ))}

            {/* Connecting Line */}
            <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className="py-32 bg-gray-50/50 relative overflow-hidden">
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Purple Rectangle - Left Side */}
          {/* <div className="absolute -left-32 top-20 w-96 h-96 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl transform rotate-12 opacity-90"></div> */}

          {/* Medium Purple Square - Top Right */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform -rotate-45 opacity-80"></div>

          {/* Small Accent Shape - Middle */}
          <div className="absolute right-1/3 top-1/2 w-32 h-32 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full opacity-60"></div>

          {/* Bottom Left Triangle */}
          <div className="absolute -left-20 bottom-20 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[200px] border-l-transparent border-r-transparent border-b-violet-300 opacity-70 transform rotate-45"></div>

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className={`lg:col-span-7 space-y-12 transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-gray-900">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Me</span>
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-violet-600 to-indigo-600"></div>
              </div>

              <div className="space-y-8">
                <p className="text-xl font-light text-gray-600 leading-relaxed">
                  I am a passionate Full-Stack Developer with extensive experience building web and mobile applications
                  using React.js, TypeScript, and Laravel. I focus on creating efficient, user-friendly solutions for
                  fintech and insurance platforms, with a proven track record of delivering complex features and comprehensive documentation.
                </p>

                <div className="space-y-6">
                  <div className="group">
                    <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-violet-600 rounded-full mr-4"></div>
                      Current Focus
                    </h3>
                    <p className="text-gray-600 font-light pl-6">
                      Pursuing my Master of Science in Computer Science at University of East London while
                      building innovative solutions for e-commerce and insurance industries.
                    </p>
                  </div>

                  <div className="group">
                    <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                      Expertise
                    </h3>
                    <p className="text-gray-600 font-light pl-6">
                      Specialized in React.js, React Native, TypeScript, and Laravel development with strong
                      experience in API integrations, automated testing, and comprehensive technical documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className={`lg:col-span-5 transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100/50">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: '4+', label: 'Years Experience' },
                    { number: '15+', label: 'Projects Completed' },
                    { number: '3', label: 'Major Companies' },
                    { number: '100%', label: 'Remote Ready' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                        {stat.number}
                      </div>
                      <div className="text-sm font-light text-gray-500 tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">Education</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img src={uelImage.src} alt="Description" className="w-21 h-10 object-contain m-0 p-0" />
                      <div>
                        <p className="text-sm text-gray-700">MS Computer Science</p>
                        <p className="text-xs text-gray-500">University of East London (2024-Present)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <img src={uwiImage.src} alt="Description" className="w-12 h-14 object-contain mr-5 ml-5 p-0" />
                      <div>
                        <p className="text-sm text-gray-700">BS Computer Science</p>
                        <p className="text-xs text-gray-500">University of the West Indies (2015-2022)</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" data-animate className="py-32 bg-white relative overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Circle - Top Right */}
          <div className="absolute -right-40 -top-20 w-80 h-80 bg-gradient-to-br from-violet-100 to-indigo-200 rounded-full opacity-50"></div>

          {/* Rectangle - Bottom Left */}
          <div className="absolute -left-24 bottom-32 w-72 h-48 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-2xl transform rotate-12 opacity-60"></div>

          {/* Small Floating Squares */}
          <div className="absolute right-1/4 top-1/4 w-16 h-16 bg-violet-200 rounded-lg transform rotate-45 opacity-40"></div>
          <div className="absolute left-1/3 bottom-1/3 w-12 h-12 bg-indigo-200 rounded-lg transform -rotate-12 opacity-50"></div>

          {/* Dot Pattern */}
          <div className="absolute top-16 left-16">
            <div className="grid grid-cols-6 gap-4">
              {Array(18).fill(0).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-violet-300 rounded-full opacity-30"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible.work ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Projects</span>
            </h2>
            <div className={`w-16 h-px bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto transform transition-all duration-1000 delay-200 ${isVisible.work ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "Trackifyx",
                subtitle: "Shopify Web Application for Marketing Attribution",
                description: "Developed a comprehensive Shopify web application using React.js and TypeScript that enables merchants to manage and analyze marketing attribution data from a single dashboard. Integrated major advertising platforms including Facebook, Snapchat, and TikTok pixels.",
                tech: ["React.js", "TypeScript", "Shopify API", "Facebook API", "RESTful APIs"],
                metrics: ["Multi-Platform", "Real-Time Tracking", "Attribution Analytics"],
                gradient: "from-violet-600 to-indigo-600",
                link: "https://www.trackifyapp.com",
                year: "2024",
                company: "LTV SaaS Fund"
              },
              {
                title: "Smart Protect Insurance",
                subtitle: "Mobile Device Insurance Platform",
                description: "Built a comprehensive web application for managing customer insurance policies for mobile devices. Implemented robust UI interfaces using React.js and TypeScript, with full backend API development using Laravel and Docker.",
                tech: ["React.js", "TypeScript", "Laravel", "Docker", "Jest Testing"],
                metrics: ["Policy Management", "API Documentation", "Unit Testing"],
                gradient: "from-indigo-600 to-purple-600",
                link: "https://www.smsja.com/sms-divisions/commodities",
                year: "2023",
                company: "Smart Mobile Solutions"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-1000 ${isVisible.work ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-700">
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                      <div className="text-xs font-light opacity-75">{project.company} • {project.year}</div>
                      <div>
                        <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                        <p className="text-sm font-light opacity-90">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 space-y-6">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex space-x-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-light rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 border border-gray-200 text-gray-700 text-xs font-light rounded-full hover:border-violet-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-violet-600 font-light group-hover:text-indigo-600 transition-colors duration-300"
                      >
                        <span className="text-sm">View Project</span>
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects */}
          <div className={`mt-16 transform transition-all duration-1000 delay-600 ${isVisible.work ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-800 mb-4">Additional Projects</h3>
              <div className="w-12 h-px bg-gray-300 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Chainge App",
                  description: "Digital payment mobile and web application with Stripe and Plaid integration",
                  tech: ["React Native", "Redux", "Stripe API", "Plaid API"],
                  year: "2022"
                },
                {
                  title: "Advantage General Insurance",
                  description: "Car insurance mobile app with document upload and questionnaire features",
                  tech: ["React Native", "Context API", "Document Processing"],
                  year: "2023"
                },
                {
                  title: "Order Tracking System",
                  description: "Automated e-commerce order tracking with multi-platform API integrations",
                  tech: ["React.js", "API Integration", "Documentation"],
                  year: "2024"
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                      <p className="text-xs text-gray-500">{project.year}</p>
                    </div>
                    <p className="text-sm text-gray-600 font-light">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-animate className="py-32 bg-gray-50/50 relative overflow-hidden">
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Diamond Shape */}
          <div className="absolute right-0 top-1/3 w-64 h-64 bg-gradient-to-br from-violet-300 to-indigo-400 transform rotate-45 rounded-3xl opacity-20"></div>

          {/* Hexagon Shape - Left */}
          <div className="absolute -left-32 top-20">
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-200 to-violet-300 opacity-30"
              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
            </div>
          </div>

          {/* Floating Rectangles */}
          <div className="absolute right-1/3 bottom-20 w-40 h-24 bg-violet-200 rounded-xl transform -rotate-12 opacity-40"></div>
          <div className="absolute left-1/4 bottom-32 w-32 h-20 bg-indigo-200 rounded-lg transform rotate-6 opacity-35"></div>

          {/* Abstract Lines */}
          <div className="absolute top-16 right-16 w-1 h-32 bg-gradient-to-b from-violet-300 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-16 left-20 w-1 h-24 bg-gradient-to-b from-indigo-300 to-transparent transform -rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-6 transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Skills</span>
            </h2>
            <div className={`w-16 h-px bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto transform transition-all duration-1000 delay-200 ${isVisible.experience ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Frontend Development",
                skills: ["React.js & Next.js", "React Native", "TypeScript & JavaScript", "Vue.js", "TailwindCSS & Redux"],
                color: "violet"
              },
              {
                icon: Server,
                title: "Backend Development",
                skills: ["Node.js & Python/Flask", "PHP/Laravel", "C#/.NET", "Java/Spring Boot", "RESTful APIs"],
                color: "indigo"
              },
              {
                icon: Database,
                title: "Data & Tools",
                skills: ["PostgreSQL & MySQL", "Supabase & Firebase", "Git & Docker", "Jest Testing", "Technical Documentation"],
                color: "purple"
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-violet-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-gray-900">
                      {category.title}
                    </h3>

                    {/* Skills */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                          <span className="text-gray-600 font-light">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className={`mt-20 transform transition-all duration-1000 delay-600 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-800 mb-4">Professional Experience</h3>
              <div className="w-12 h-px bg-gray-300 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {[
                {
                  company: "LTV SaaS Fund",
                  role: "Full-stack Developer",
                  period: "March 2024 – September 2024",
                  location: "Remote, USA",
                  highlights: ["Automated order tracking processes", "Integrated major advertising platform APIs", "Developed extensive technical documentation"]
                },
                {
                  company: "Smart Mobile Solutions",
                  role: "Full-stack Developer",
                  period: "March 2022 – January 2024",
                  location: "Kingston, Jamaica",
                  highlights: ["Developed insurance policy management applications", "Built RESTful API services in Laravel", "Implemented comprehensive testing strategies"]
                },
                {
                  company: "Cenedex Software Solutions",
                  role: "Front-end Developer",
                  period: "October 2020 – April 2021",
                  location: "Remote, USA",
                  highlights: ["Developed digital payment solutions", "Implemented Firebase integrations", "Applied advanced state management techniques"]
                }
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div className="md:col-span-1">
                      <h4 className="font-medium text-gray-900">{job.company}</h4>
                      <p className="text-sm text-violet-600">{job.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{job.period}</p>
                      <p className="text-xs text-gray-400">{job.location}</p>
                    </div>
                    <div className="md:col-span-3">
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-gray-600 font-light flex items-start">
                            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Additional Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Glowing Circle */}
          <div className="absolute -right-32 top-20 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-indigo-600/10 rounded-full blur-3xl"></div>

          {/* Left Side Triangle */}
          <div className="absolute -left-20 bottom-20 w-0 h-0 border-l-[120px] border-r-[120px] border-b-[160px] border-l-transparent border-r-transparent border-b-violet-500/20"></div>

          {/* Floating Squares */}
          <div className="absolute right-1/4 bottom-1/4 w-8 h-8 bg-violet-400/30 rounded transform rotate-45"></div>
          <div className="absolute left-1/3 top-1/3 w-6 h-6 bg-indigo-400/40 rounded transform rotate-12"></div>

          {/* Subtle Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className={`space-y-12 transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {/* Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-extralight tracking-tight">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Connect</span>
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto"></div>
              <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
                Ready to collaborate on innovative web and mobile solutions?
                Let's discuss how we can build something amazing together.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Mail, label: "Email", value: "bolivthom@gmail.com", href: "mailto:bolivthom@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "/in/brittanythomas", href: "https://www.linkedin.com/in/bthomas-tech/" },
                { icon: Github, label: "GitHub", value: "/brittanythomas", href: "https://github.com/bolivthom" }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-violet-400/30 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="space-y-4">
                    <contact.icon className="w-8 h-8 text-violet-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-light text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-light">{contact.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-16 border-t border-white/10">
              <p className="text-gray-400 font-light">
                © 2025 Brittany Thomas. 🇯🇲 Mi code it up nice and proper.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrittanyResumeWebsite;

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  Menu,
  X,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  value: string;
  link: string;
  gradient: string;
  hoverColor: string;
}

interface CompanyStat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "contact@powerpro.com",
    link: "mailto:contact@powerpro.com",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "blue"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "24/7 Emergency Service",
    value: "(555) 123-4567",
    link: "tel:+15551234567",
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverColor: "green"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Licensed & Insured",
    value: "Your Local Area",
    link: "#location",
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverColor: "purple"
  }
];

const companyStats: CompanyStat[] = [
  { label: "Response Time", value: "< 1 hour", icon: Clock },
  { label: "Service Areas", value: "50+", icon: Globe },
  { label: "Licensed", value: "Insured", icon: Shield },
  { label: "Success Rate", value: "99.9%", icon: Zap }
];

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const serviceItems = [
  "Electrical Installation",
  "Emergency Repairs", 
  "Panel Upgrades",
  "Lighting Solutions",
  "Safety Inspections"
];

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
  onClick?: () => void;
}> = ({ href, children, hasDropdown = false, className = "", onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className={cn("relative group text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center py-1", className)}
    whileHover="hover"
  >
    {children}
    {hasDropdown && <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-180" />}
    {!hasDropdown && (
      <motion.div
        className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-yellow-400"
        variants={{ initial: { scaleX: 0, originX: 0.5 }, hover: { scaleX: 1, originX: 0.5 } }}
        initial="initial"
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    )}
  </motion.a>
);

const DropdownMenu: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
}> = ({ children, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top z-40"
      >
        <div className="bg-[#111111] border border-gray-700/50 rounded-md shadow-xl p-2">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const DropdownItem: React.FC<{
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
}> = ({ href = "#", children, icon }) => (
  <a
    href={href}
    className="group flex items-center justify-between w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/30 hover:text-white rounded-md transition-colors duration-150"
  >
    <span>{children}</span>
    {icon && React.cloneElement(icon, { className: "w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" })}
  </a>
);

const PremiumElectricalContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96] as const // Fix: cast to const tuple for framer-motion
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const // Fix: use string literal for framer-motion
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    top: {
      backgroundColor: "rgba(17, 17, 17, 0.8)",
      borderBottomColor: "rgba(55, 65, 81, 0.5)",
      boxShadow: 'none',
    },
    scrolled: {
      backgroundColor: "rgba(17, 17, 17, 0.95)",
      borderBottomColor: "rgba(75, 85, 99, 0.7)",
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15, ease: 'easeIn' as const } }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col">
      {/* Header */}
      <motion.header
        variants={headerVariants}
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full fixed top-0 z-30 backdrop-blur-md border-b shadow-lg"
      >
        {/* Emergency Banner */}
        <div className="bg-yellow-400 text-black text-center py-2 text-sm font-semibold tracking-wide">
          24/7 Emergency Service Available - (555) 123-4567
        </div>
        <nav className="flex justify-between items-center max-w-7xl mx-auto h-[70px] px-4 md:px-10 lg:px-16">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Zap className="h-8 w-8 text-yellow-400" />
            <div>
              <div className="text-xl font-bold text-white leading-tight">PowerPro Electric</div>
              <div className="text-xs text-gray-400">Licensed & Insured</div>
            </div>
          </div>
          <div className="hidden md:flex items-center flex-grow justify-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink href={item.href} hasDropdown={item.hasDropdown}>
                  {item.name}
                </NavLink>
                {item.hasDropdown && (
                  <DropdownMenu isOpen={openDropdown === item.name}>
                    {serviceItems.map((service) => (
                      <DropdownItem key={service} href="#">
                        {service}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <motion.a
              href="tel:+15551234567"
              className="hidden md:flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </motion.a>
            <motion.button
              className="md:hidden text-gray-300 hover:text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </nav>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 right-0 bg-[#111111]/95 backdrop-blur-sm shadow-lg py-4 border-t border-gray-800/50"
            >
              <div className="flex flex-col items-center space-y-4 px-6">
                {navItems.map((item) => (
                  <NavLink key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </NavLink>
                ))}
                <hr className="w-full border-t border-gray-700/50 my-2" />
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Emergency Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center pt-36 pb-20 px-2 md:px-6 bg-gradient-to-br from-black via-blue-950/20 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-yellow-500/[0.05] to-blue-500/[0.08]"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '400% 400%' }}
          />
          <motion.div
            className="absolute top-1/3 left-1/5 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          ref={containerRef}
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className="text-center mb-10 md:mb-16" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="h-4 w-4 text-yellow-300" />
              </motion.div>
              <span className="text-sm font-medium text-white/80">
                ⚡ Professional Electrical Services
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>
            <motion.h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight" variants={fadeInUp}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Expert Electrical</span>
              <br />
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-blue-300 to-yellow-300"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Solutions
              </motion.span>
            </motion.h1>
            <motion.p className="text-lg sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
              Licensed, insured, and ready to solve your electrical needs. From emergency repairs to complete installations, we deliver safe, reliable service you can trust.
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div className="flex flex-wrap justify-center gap-6 mb-10 md:mb-16" variants={fadeInUp}>
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center w-40 h-32 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all shadow-md"
                whileHover={{ scale: 1.05, y: -5 }}
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center mb-2"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-yellow-300" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div className="space-y-8 bg-white/[0.03] rounded-2xl p-8 shadow-lg border border-white/[0.10]" variants={fadeInUp}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Get Your Free Estimate</h2>
                <p className="text-white/60 text-lg">
                  Tell us about your electrical project and we'll provide a detailed quote within 24 hours.
                </p>
              </div>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-all ${errors.name ? 'border-red-400' : 'border-white/[0.15]'}`}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-all ${errors.email ? 'border-red-400' : 'border-white/[0.15]'}`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text"
                        placeholder="Property Type (Residential/Commercial)"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full pl-10 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                      <textarea
                        placeholder="Describe your electrical needs..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-white/[0.15]'}`}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Get Free Estimate
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
                    <p className="text-white/60 text-lg mb-6">
                      Thank you for contacting PowerPro Electric. We'll get back to you within 1 hour with your free estimate.
                    </p>
                    <motion.button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="px-6 py-3 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white hover:bg-white/[0.12] transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Request
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* Contact Methods */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Contact Us Directly</h3>
                <p className="text-white/60 text-lg">
                  Need immediate assistance? Choose the best way to reach our team.
                </p>
              </div>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    className="block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group shadow-md"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotateY: 180 }}
                        transition={{ duration: 0.6 }}
                      >
                        <method.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">{method.title}</h4>
                        <p className="text-white/60 text-sm mb-2">{method.description}</p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>
              {/* Additional Info */}
              <motion.div
                className="p-6 bg-gradient-to-br from-yellow-500/[0.08] to-blue-500/[0.08] backdrop-blur-xl rounded-2xl border border-yellow-400/30 shadow-md"
                variants={fadeInUp}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Emergency Service Available</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Electrical emergencies don't wait for business hours. Our licensed electricians are available 24/7 
                  for urgent repairs, power outages, and safety concerns. Call now for immediate assistance.
                </p>
              </motion.div>
              {/* Service Areas */}
              <motion.div
                className="p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] shadow-md"
                variants={fadeInUp}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Service Areas</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-3">
                  We proudly serve residential and commercial customers throughout the greater metropolitan area.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Downtown", "Suburbs", "Industrial District", "Residential Areas"].map((area) => (
                    <span key={area} className="px-3 py-1 bg-white/[0.08] rounded-full text-xs text-white/70">
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
              style={{ left: `${10 + (i * 12)}%`, top: `${20 + (i * 10)}%` }}
              animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 2, 1] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default PremiumElectricalContact;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Zap, Shield, Wrench, Home } from "lucide-react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  text: string;
  className?: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#dc2626", second: "#ef4444" },
  className,
  sparklesCount = 8,
}) => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);

  React.useEffect(() => {
    const generateStar = (): Sparkle => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        }),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div className={`relative inline-block${className ? ` ${className}` : ""}`}>
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isEmergency?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  isEmergency = false,
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 ${
        isEmergency
          ? "bg-red-50 border-2 border-red-200 hover:border-red-300 hover:bg-red-100"
          : "bg-background border-2 border-border hover:border-primary/50 hover:bg-muted/50"
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <div
          className={`mb-6 inline-flex items-center justify-center rounded-full p-4 ${
            isEmergency ? "bg-red-500 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {icon}
        </div>
        
        {isEmergency ? (
          <SparklesText
            text={title}
            className="mb-4 text-2xl font-bold text-red-600"
            sparklesCount={6}
            colors={{ first: "#dc2626", second: "#ef4444" }}
          />
        ) : (
          <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>
        )}
        
        <p className="mb-6 text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`mr-3 h-2 w-2 rounded-full ${
                  isEmergency ? "bg-red-500" : "bg-primary"
                }`}
              />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isEmergency
            ? "bg-gradient-to-br from-red-500/5 to-red-600/10"
            : "bg-gradient-to-br from-primary/5 to-primary/10"
        }`}
      />
    </motion.div>
  );
};

const EmergencyServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency Services",
      description: "Electrical emergencies can't wait. Our emergency team is available 24/7 to handle urgent electrical issues, power outages, and safety hazards.",
      features: [
        "Immediate response within 30 minutes",
        "Licensed emergency electricians",
        "Safety-first approach",
        "Transparent emergency pricing"
      ],
      isEmergency: true,
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Electrical",
      description: "Complete electrical services for your home, from simple repairs to full rewiring projects.",
      features: [
        "Outlet and switch installation",
        "Circuit breaker upgrades",
        "Home rewiring",
        "Electrical inspections"
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Commercial Services",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      features: [
        "Commercial wiring",
        "Lighting systems",
        "Power distribution",
        "Maintenance contracts"
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all safety standards.",
      features: [
        "Code compliance checks",
        "Safety assessments",
        "Detailed reports",
        "Recommendation plans"
      ],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Repairs & Maintenance",
      description: "Expert repair services and preventive maintenance to keep your electrical systems running smoothly.",
      features: [
        "Troubleshooting",
        "Component replacement",
        "Preventive maintenance",
        "System optimization"
      ],
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Consultation Services",
      description: "Professional electrical consultation for planning, upgrades, and energy efficiency improvements.",
      features: [
        "System planning",
        "Energy audits",
        "Upgrade recommendations",
        "Cost estimates"
      ],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Electrical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive electrical services for residential and commercial properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-red-600 mr-3" />
              <SparklesText
                text="Emergency Hotline"
                className="text-2xl font-bold text-red-600"
                sparklesCount={5}
              />
            </div>
            <p className="text-lg text-red-700 mb-4">
              Need immediate electrical assistance? Call our 24/7 emergency line
            </p>
            <a
              href="tel:+1-800-ELECTRIC"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              1-800-ELECTRIC
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyServicesSection;

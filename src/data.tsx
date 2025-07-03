import React from 'react';
import { Home as HomeIcon, Building, Lightbulb, AlertTriangle } from 'lucide-react';

export const services = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Emergency Repairs",
    description: "24/7 emergency electrical repairs when you need us most",
    features: ["Power outages", "Electrical fires", "Sparking outlets", "Circuit breaker issues"]
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-blue-500" />,
    title: "Residential Services",
    description: "Complete electrical solutions for your home",
    features: ["Outlet installation", "Panel upgrades", "Ceiling fans", "Home rewiring"]
  },
  {
    icon: <Building className="h-8 w-8 text-green-500" />,
    title: "Commercial Services",
    description: "Professional electrical work for businesses",
    features: ["Office lighting", "Safety inspections", "Code compliance", "Equipment installation"]
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Installations",
    description: "Expert installation of electrical systems and fixtures",
    features: ["LED lighting", "Smart switches", "EV chargers", "Security systems"]
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "PowerPro Electric saved the day! Our power went out during a storm and they came out immediately to fix it. Professional and reliable!",
    service: "Emergency Repair"
  },
  {
    name: "Mike Chen",
    rating: 5,
    text: "Excellent work on our kitchen renovation. They installed new outlets and under-cabinet lighting perfectly. Clean work and fair pricing.",
    service: "Residential Installation"
  },
  {
    name: "Lisa Martinez",
    rating: 5,
    text: "I was impressed with their professionalism. They explained everything clearly and the work was completed on time and on budget.",
    service: "Panel Upgrade"
  }
];

export const allServiceTypes = [
    { icon: <AlertTriangle className="h-6 w-6 text-red-500" />, name: "Emergency Repairs", link: "/services#emergency" },
    { icon: <HomeIcon className="h-6 w-6 text-blue-500" />, name: "Residential Services", link: "/services#residential" },
    { icon: <Building className="h-6 w-6 text-green-500" />, name: "Commercial Services", link: "/services#commercial" },
    { icon: <Lightbulb className="h-6 w-6 text-yellow-500" />, name: "Installations", link: "/services#installations" },
];
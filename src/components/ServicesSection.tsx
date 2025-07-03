import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Electrical Services
          </h2>
          <p className="text-lg text-gray-600">
            From emergency repairs to complete installations, we've got you covered
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300 animate-fade-in-up">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-dark">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg animate-fade-in-up"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
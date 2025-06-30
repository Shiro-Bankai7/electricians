import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, AlertTriangle, Home as HomeIcon, Building, 
  Lightbulb, Zap, Shield, CheckCircle, Clock 
} from 'lucide-react';

const Services = () => {
  const emergencyServices = [
    {
      title: "Power Outages",
      description: "Complete power loss diagnosis and restoration",
      response: "30-min response"
    },
    {
      title: "Electrical Fires",
      description: "Safe electrical fire investigation and repair",
      response: "Immediate"
    },
    {
      title: "Sparking Outlets",
      description: "Dangerous outlet and wiring repair",
      response: "Same day"
    },
    {
      title: "Circuit Breaker Issues",
      description: "Panel problems and breaker replacement",
      response: "24/7 available"
    }
  ];

  const residentialServices = [
    {
      category: "Electrical Repairs",
      services: [
        "Outlet and switch replacement",
        "Circuit breaker repair",
        "Electrical panel upgrades",
        "Wiring repairs and replacement",
        "GFCI outlet installation",
        "Light fixture repair"
      ]
    },
    {
      category: "Electrical Installations",
      services: [
        "Ceiling fan installation",
        "Recessed lighting",
        "Under-cabinet lighting",
        "Smart switch installation",
        "EV charger installation",
        "Generator hookup"
      ]
    },
    {
      category: "Home Improvements",
      services: [
        "Kitchen electrical work",
        "Bathroom electrical upgrades",
        "Basement finishing electrical",
        "Outdoor lighting",
        "Pool and spa wiring",
        "Home automation wiring"
      ]
    }
  ];

  const commercialServices = [
    {
      category: "Office & Retail",
      services: [
        "Commercial lighting design",
        "Emergency lighting systems",
        "Security system wiring",
        "Data and communication wiring",
        "Electrical code compliance",
        "Energy efficiency upgrades"
      ]
    },
    {
      category: "Industrial Services",
      services: [
        "Motor and equipment installation",
        "Three-phase power systems",
        "Industrial panel upgrades",
        "Machinery wiring",
        "Power distribution systems",
        "Preventive maintenance"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Electrical Services
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            From emergency repairs to complete electrical installations, 
            our licensed electricians provide reliable service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency: (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24/7 Emergency Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Electrical emergencies can't wait. Our emergency team is available 24/7 
              to handle urgent electrical problems safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center space-x-2 text-red-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{service.response}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-600 text-white p-6 rounded-lg inline-block">
              <h3 className="text-xl font-bold mb-2">Emergency Service Available Now</h3>
              <p className="mb-4">Don't wait - electrical emergencies can be dangerous</p>
              <a
                href="tel:+15551234567"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <HomeIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Residential Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete electrical solutions for your home, from simple repairs to major installations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {residentialServices.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Building className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Electrical Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional electrical services for businesses, offices, and industrial facilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commercialServices.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Building className="h-8 w-8 text-green-600 mr-3" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Guarantee
            </h2>
            <p className="text-lg text-blue-200">
              Quality work you can count on, backed by our comprehensive warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
              <p className="text-blue-200">
                All work performed by licensed electricians with full insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work Guaranteed</h3>
              <p className="text-blue-200">
                All electrical work comes with our comprehensive warranty and guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-800 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-Time Service</h3>
              <p className="text-blue-200">
                We arrive on time and complete work efficiently with minimal disruption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free estimate on your electrical project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Service Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
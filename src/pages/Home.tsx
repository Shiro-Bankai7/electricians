import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Star, Shield, Clock, CheckCircle, Zap, 
  Home as HomeIcon, Building, Lightbulb, AlertTriangle 
} from 'lucide-react';

const Home = () => {
  const services = [
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

  const testimonials = [
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Licensed Electricians <br />
              <span className="text-blue-300">Ready When You Need Us</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              24/7 emergency service • Residential & Commercial • Fully licensed & insured
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+15551234567"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <Phone className="h-6 w-6" />
                <span>Emergency: (555) 123-4567</span>
              </a>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule a Service Call
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>5-Star Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-300" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
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
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PowerPro Electric?
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted electrical professionals with a commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Electrical emergencies don't wait for business hours. We're available around the clock to help.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured for your peace of mind. All work guaranteed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Rating</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by our customers. Quality work and exceptional service every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Electrical Work Done Right?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Get a free estimate from licensed professionals. Emergency service available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule a Service Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import { Phone, Star, Shield, Clock, Zap } from 'lucide-react';
import { services, testimonials, allServiceTypes } from '../data.tsx';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Service Types Quicklinks (Product Types) */}
      <section className="py-6 bg-[#181818] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center items-center overflow-x-auto">
            {allServiceTypes.map((type: { name: string; link: string; icon: React.ReactNode }) => (
              <Link
                key={type.name}
                to={type.link}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors whitespace-nowrap shadow-sm border border-white/10"
                aria-label={type.name}
              >
                {type.icon}
                <span>{type.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-blue-950/20 to-black relative overflow-hidden">
        {/* Hero Background Image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1L8hbd1H_yArL9HF4pRD6CfZ_wiWub_wgg&s"
          alt="Professional electrician working on a modern home electrical panel"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none select-none z-0"
          style={{maxHeight: '600px'}}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" aria-hidden="true"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6">
            <Zap className="h-4 w-4 text-yellow-300 animate-spin-slow" />
            <span className="text-sm font-medium text-white/80">PowerPro Electric</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Licensed Electricians<br /><span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 animate-text-gradient'>Ready When You Need Us</span></h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            24/7 emergency service • Residential & Commercial • Fully licensed & insured
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:+15551234567"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-2xl hover:shadow-accent transform hover:-translate-y-1 flex items-center space-x-3 animate-pulse-fast"
            >
              <Phone className="h-6 w-6" />
              <span>Emergency: (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-neutral-light text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-accent"
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
      </section>

      <ServicesSection services={services} />

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
            <div className="text-center animate-fade-in-up">
              <div className="bg-primary-light p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Electrical emergencies don't wait for business hours. We're available around the clock to help.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay:'0.1s'}}>
              <div className="bg-green-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured for your peace of mind. All work guaranteed.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay:'0.2s'}}>
              <div className="bg-accent p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12 text-accent-dark" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">5-Star Rating</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by our customers. Quality work and exceptional service every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <section className="py-8 bg-primary-dark text-white">
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
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-3 animate-pulse-fast"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-neutral-light text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-accent"
            >
              Schedule a Service Call
            </Link>
          </div>
        </div>
      </section>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1); }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-fast { animation: pulse-fast 1.2s infinite; }
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% 200%;
          animation: text-gradient 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
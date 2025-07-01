
import { Link } from 'react-router-dom';
import { 
  Award, Shield, Users, Clock, Star, CheckCircle, 
  Phone, Zap, Calendar, Sparkles 
} from 'lucide-react';


const About = () => {
  const certifications = [
    { name: "Licensed Electrician", id: "#EL-12345" },
    { name: "Bonded & Insured", id: "Policy #BI-67890" },
    { name: "BBB Accredited", id: "A+ Rating" },
    { name: "NECA Member", id: "Member #N-2024" }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2000+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "5-Star", label: "Average Rating" }
  ];

  const teamMembers = [
    {
      name: "Mike Rodriguez",
      title: "Master Electrician & Owner",
      experience: "15+ years",
      specialties: ["Residential Electrical", "Panel Upgrades", "Emergency Repairs"],
      description: "Mike founded PowerPro Electric with a mission to provide reliable, professional electrical services to the community."
    },
    {
      name: "Sarah Thompson",
      title: "Licensed Electrician",
      experience: "8+ years",
      specialties: ["Commercial Wiring", "Smart Home Installation", "LED Lighting"],
      description: "Sarah specializes in commercial electrical work and energy-efficient lighting solutions."
    },
    {
      name: "David Chen",
      title: "Apprentice Electrician",
      experience: "3+ years",
      specialties: ["Residential Service", "Outlet Installation", "Troubleshooting"],
      description: "David brings fresh energy and attention to detail to every electrical project."
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-blue-950/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-yellow-300 animate-spin-slow" />
            <span className="text-sm font-medium text-white/80">About PowerPro Electric</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Your Trusted Local Electricians
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            Providing professional electrical services to residential and commercial customers since 2010.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10 md:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-40 h-32 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all shadow-md">
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2010 by Master Electrician Mike Rodriguez, PowerPro Electric 
                  began with a simple mission: to provide reliable, professional electrical 
                  services that homeowners and business owners can trust.
                </p>
                <p>
                  What started as a one-person operation has grown into a full-service 
                  electrical company, but we've never forgotten our commitment to personal 
                  service, quality workmanship, and treating every customer like family.
                </p>
                <p>
                  Today, we're proud to be the go-to electricians for thousands of satisfied 
                  customers throughout the area, handling everything from emergency repairs 
                  to major electrical installations.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Service</span>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Licensed, bonded, and fully insured",
                  "24/7 emergency service available",
                  "Upfront pricing with no hidden fees",
                  "100% satisfaction guarantee",
                  "Local family-owned business",
                  "15+ years of experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Licensed professionals committed to delivering exceptional electrical services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{member.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <ul className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                        <Zap className="h-3 w-3 text-blue-500" />
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Licensed, Certified & Trusted
            </h2>
            <p className="text-lg text-gray-600">
              We maintain all required licenses and certifications to ensure safe, 
              compliant electrical work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.id}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 inline-block">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="font-semibold text-green-800">Fully Insured & Bonded</span>
              </div>
              <p className="text-green-700 text-sm">
                All work is covered by comprehensive liability insurance for your protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Providing professional electrical services throughout the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "Downtown", "Westside", "Northfield", "Southbrook",
              "Eastgate", "Riverside", "Hillcrest", "Valley View",
              "Oakwood", "Pinewood", "Maple Heights", "Cedar Ridge"
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow">
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don't see your area listed? Give us a call!</p>
            <a
              href="tel:+15551234567"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the PowerPro Difference
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of satisfied customers who trust us with their electrical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: (555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Service Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
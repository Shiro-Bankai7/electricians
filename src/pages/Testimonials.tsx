import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Phone, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Westside",
      rating: 5,
      service: "Emergency Electrical Repair",
      date: "March 2024",
      text: "PowerPro Electric saved the day! Our power went out during a storm at 11 PM and they came out immediately to fix it. Mike was professional, knowledgeable, and had us back up and running within an hour. I can't recommend them highly enough!",
      verified: true
    },
    {
      name: "Mike Chen",
      location: "Downtown",
      rating: 5,
      service: "Kitchen Renovation Electrical",
      date: "February 2024",
      text: "Excellent work on our kitchen renovation. They installed new outlets, under-cabinet lighting, and upgraded our electrical panel. The work was clean, professional, and completed exactly on schedule. Fair pricing too!",
      verified: true
    },
    {
      name: "Lisa Martinez",
      location: "Northfield",
      rating: 5,
      service: "Panel Upgrade",
      date: "January 2024",
      text: "I was impressed with their professionalism from start to finish. They explained everything clearly, provided upfront pricing, and the work was completed on time and on budget. Our new electrical panel works perfectly.",
      verified: true
    },
    {
      name: "David Thompson",
      location: "Eastgate",
      rating: 5,
      service: "Ceiling Fan Installation",
      date: "March 2024",
      text: "Quick and professional service. Called in the morning and they had someone out the same afternoon to install ceiling fans in three bedrooms. Clean work and they cleaned up after themselves completely.",
      verified: true
    },
    {
      name: "Amanda Rodriguez",
      location: "Southbrook",
      rating: 5,
      service: "Smart Home Installation",
      date: "February 2024",
      text: "PowerPro Electric helped us convert our home to smart switches and outlets. Sarah was incredibly knowledgeable about the latest smart home technology and made great recommendations. Everything works perfectly!",
      verified: true
    },
    {
      name: "Robert Wilson",
      location: "Riverside",
      rating: 5,
      service: "Commercial Electrical Work",
      date: "January 2024",
      text: "Used PowerPro for electrical work at our office building. They were professional, efficient, and worked around our business hours to minimize disruption. Great communication throughout the project.",
      verified: true
    },
    {
      name: "Jennifer Lee",
      location: "Hillcrest",
      rating: 5,
      service: "EV Charger Installation",
      date: "March 2024",
      text: "Had them install a Level 2 EV charger in our garage. They handled all the permits and inspection coordination. The installation was clean and professional. Highly recommend for EV charger installations!",
      verified: true
    },
    {
      name: "Carlos Mendez",
      location: "Valley View",
      rating: 5,
      service: "Electrical Troubleshooting",
      date: "February 2024",
      text: "Had a tricky electrical issue that other electricians couldn't figure out. PowerPro's team diagnosed and fixed the problem quickly. Their troubleshooting skills are excellent and they stand behind their work.",
      verified: true
    },
    {
      name: "Kelly O'Brien",
      location: "Oakwood",
      rating: 5,
      service: "Outdoor Lighting Installation",
      date: "January 2024",
      text: "Beautiful outdoor lighting installation for our backyard. They designed a lighting plan that perfectly highlighted our landscaping. The quality of work and attention to detail was outstanding.",
      verified: true
    }
  ];

  const stats = [
    { number: "500+", label: "5-Star Reviews" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "2000+", label: "Happy Customers" },
    { number: "15+", label: "Years in Business" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Reviews & Testimonials
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            See what our satisfied customers have to say about our electrical services
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-lg text-gray-600">
              Based on 500+ verified customer reviews across Google, Yelp, and Facebook
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600 text-sm">
                  We show up on time and complete work as promised, every single time.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                <p className="text-gray-600 text-sm">
                  Licensed professionals using quality materials and proven techniques.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-600 text-sm">
                  Emergency electrical service available around the clock when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Reviews from Real Customers
            </h2>
            <p className="text-lg text-gray-600">
              These are just a few of the hundreds of 5-star reviews we've received
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 opacity-20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{testimonial.service}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on Review Platforms
            </h2>
            <p className="text-lg text-gray-600">
              We're proud of our reputation across all major review platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-lg p-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-gray-900">Google Reviews</p>
              <p className="text-gray-600 text-sm">200+ reviews</p>
            </div>

            <div className="text-center bg-gray-50 rounded-lg p-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-gray-900">Yelp</p>
              <p className="text-gray-600 text-sm">150+ reviews</p>
            </div>

            <div className="text-center bg-gray-50 rounded-lg p-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-gray-900">Facebook</p>
              <p className="text-gray-600 text-sm">150+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of satisfied customers who trust PowerPro Electric
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

export default Testimonials;
import React from 'react';

// New, stable image links have been sourced to ensure longevity.
const projects = [
  {
    title: 'Electrical Panel Upgrade',
    before: 'https://images.pexels.com/photos/15184024/pexels-photo-15184024.jpeg?auto=compress&w=600&q=80', // Rusty, old electrical panel
    after: 'https://images.pexels.com/photos/9679179/pexels-photo-9679179.jpeg?auto=compress&w=600&q=80',  // Electrician working on a modern circuit breaker panel
    description: 'Upgraded a dangerously outdated fuse box to a modern, safe, and efficient breaker panel, ensuring home safety and capacity for future needs.'
  },
  {
    title: 'Kitchen Lighting Transformation',
    before: 'https://images.pexels.com/photos/5953549/pexels-photo-5953549.jpeg?auto=compress&w=600&q=80', // Dimly lit kitchen
    after: 'https://images.pexels.com/photos/8089188/pexels-photo-8089188.jpeg?auto=compress&w=600&q=80',   // Bright, modern kitchen with new lighting
    description: 'Replaced a single, inefficient fixture with a multi-layered lighting design, including recessed LEDs and a central pendant for a bright, functional workspace.'
  },
  {
    title: 'Office Cable Management',
    before: 'https://images.pexels.com/photos/6804585/pexels-photo-6804585.jpeg?auto=compress&w=600&q=80', // Messy cables under desk
    after: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&w=600&q=80',   // Organized cables in a server rack
    description: 'Tamed a hazardous "cable spaghetti" situation in a commercial office, improving safety, aesthetics, and ease of maintenance.'
  },
  {
    title: 'Home EV Charger Installation',
    before: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&w=600&q=80', // Garage wall with outlet/charger
    after: 'https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg?auto=compress&w=600&q=80',   // Modern EV charger in use
    description: 'Installed a dedicated 240V Level 2 fast charger, providing a convenient, reliable, and rapid charging solution for the client’s electric vehicle.'
  },
  {
    title: 'Landscape & Architectural Lighting',
    before: 'https://images.pexels.com/photos/30018177/pexels-photo-30018177.jpeg?auto=compress&w=600&q=80', // House exterior at dusk
    after: 'https://images.pexels.com/photos/13582360/pexels-photo-13582360.jpeg?auto=compress&w=600&q=80',   // House beautifully illuminated at night
    description: 'Designed and installed a beautiful outdoor lighting system, enhancing curb appeal, increasing security, and creating a warm, usable evening space.'
  },
  {
    title: 'Smart Thermostat Upgrade',
    before: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&w=600&q=80', // Old thermostat on wall
    after: 'https://images.pexels.com/photos/27638181/pexels-photo-27638181.jpeg?auto=compress&w=600&q=80',   // Modern smart thermostat
    description: 'Replaced an inefficient analog thermostat with a smart system, enabling remote control, scheduling, and significant energy savings.'
  },
  {
    title: 'Commercial Lighting Retrofit',
    before: 'https://images.pexels.com/photos/7019314/pexels-photo-7019314.jpeg?auto=compress&w=600&q=80', // Dim warehouse lighting
    after: 'https://images.pexels.com/photos/26609603/pexels-photo-26609603.jpeg?auto=compress&w=600&q=80',   // Bright LED warehouse lighting
    description: 'Upgraded an entire warehouse to high-efficiency LED lighting, drastically improving visibility for workers and reducing monthly energy costs.'
  },
  {
    title: 'Modern Ceiling Fan Installation',
    before: 'https://images.pexels.com/photos/14129563/pexels-photo-14129563.jpeg?auto=compress&w=600&q=80', // Ceiling with exposed wires/box
    after: 'https://images.pexels.com/photos/4030070/pexels-photo-4030070.jpeg?auto=compress&w=600&q=80',   // Modern ceiling fan installed
    description: 'Installed a new, whisper-quiet ceiling fan where none existed before, improving both air circulation and the room’s overall aesthetic.'
  }
];

const Gallery = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#111111] text-white py-4 px-2 sm:px-4 lg:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Our Work</h2>
        <h1 className="mt-2 text-4xl lg:text-5xl font-extrabold text-white tracking-tight">See the Difference We Make</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
          From simple upgrades to complete transformations, see the quality and care we bring to every single project.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className="group bg-slate-800/50 rounded-xl shadow-lg overflow-hidden ring-1 ring-white/10 hover:ring-cyan-400 transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col"
          >
            <div className="p-5">
              <h3 className="text-xl font-bold mb-4 truncate text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">{p.title}</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <img src={p.before} alt={`Before ${p.title}`} className="rounded-lg w-full object-cover h-40 border-2 border-red-500/30 group-hover:border-red-500 transition-all duration-300" />
                  <div className="text-sm font-semibold text-red-400 mt-2 tracking-wider">BEFORE</div>
                </div>
                <div className="text-center">
                  <img src={p.after} alt={`After ${p.title}`} className="rounded-lg w-full object-cover h-40 border-2 border-green-500/30 group-hover:border-green-400 transition-all duration-300" />
                  <div className="text-sm font-semibold text-green-400 mt-2 tracking-wider">AFTER</div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-black/20 mt-auto">
              <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
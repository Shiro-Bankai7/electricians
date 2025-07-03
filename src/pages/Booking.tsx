import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In a real app, this URL would be your backend API endpoint
      await axios.post('https://jsonplaceholder.typicode.com/posts', form);
      setStatus('success');
    } catch (error) {
      console.error("Booking submission failed:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center py-4 text-center">
        <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Thank You!</h2>
          <p>Your booking request has been received. We will contact you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-lg shadow-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
            <input id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required type="email" className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-400" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
            <input id="phone" name="phone" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} required className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-400" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service</label>
            <select id="service" name="service" value={form.service} onChange={handleChange} required className="w-full p-2 rounded bg-white/20 text-white">
              <option value="">Select Service</option>
              <option>Emergency Repair</option>
              <option>Panel Upgrade</option>
              <option>Lighting Installation</option>
              <option>Smart Home Setup</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">Preferred Date</label>
              <input id="date" name="date" type="date" value={form.date} onChange={handleChange} required className="w-full p-2 rounded bg-white/20 text-white" />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">Preferred Time</label>
              <input id="time" name="time" type="time" value={form.time} onChange={handleChange} required className="w-full p-2 rounded bg-white/20 text-white" />
            </div>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-1">Additional Notes</label>
            <textarea id="notes" name="notes" placeholder="Please describe the issue or project." value={form.notes} onChange={handleChange} className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-400" />
          </div>
          <button type="submit" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors">
            {status === 'loading' ? 'Submitting...' : 'Book Now'}
          </button>
          {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Booking;

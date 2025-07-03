import React, { useState } from 'react';

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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send to backend or email service
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center py-4">
      <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg shadow">Thank you! Your booking request has been received.</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white/10 p-4 rounded-lg shadow-lg w-full max-w-md space-y-2">
          <input className="w-full p-2 rounded bg-white/20 text-white" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input className="w-full p-2 rounded bg-white/20 text-white" name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" />
          <input className="w-full p-2 rounded bg-white/20 text-white" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          <select className="w-full p-2 rounded bg-white/20 text-white" name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option>Emergency Repair</option>
            <option>Panel Upgrade</option>
            <option>Lighting Installation</option>
            <option>Smart Home Setup</option>
            <option>Other</option>
          </select>
          <input className="w-full p-2 rounded bg-white/20 text-white" name="date" type="date" value={form.date} onChange={handleChange} required />
          <input className="w-full p-2 rounded bg-white/20 text-white" name="time" type="time" value={form.time} onChange={handleChange} required />
          <textarea className="w-full p-2 rounded bg-white/20 text-white" name="notes" placeholder="Additional Notes" value={form.notes} onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">Book Now</button>
        </form>
      )}
    </div>
  );
};

export default Booking;

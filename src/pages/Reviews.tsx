import React, { useState } from 'react';

// --- Types ---
type Review = { name: string; rating: 1|2|3|4|5; text: string };
type RatingsDist = { 5: number; 4: number; 3: number; 2: number; 1: number };

const initialReviews: Review[] = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'PowerPro Electric saved the day! Our power went out during a storm and they came out immediately to fix it. Professional and reliable!'
  },
  {
    name: 'Mike Chen',
    rating: 5,
    text: 'Excellent work on our kitchen renovation. They installed new outlets and under-cabinet lighting perfectly. Clean work and fair pricing.'
  },
  {
    name: 'Lisa Martinez',
    rating: 5,
    text: 'I was impressed with their professionalism. They explained everything clearly and the work was completed on time and on budget.'
  }
];

function getRatingsDistribution(reviews: Review[]): RatingsDist {
  const dist: RatingsDist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => { dist[r.rating] = (dist[r.rating] || 0) + 1; });
  return dist;
}

const MAX_REVIEWS_DESKTOP = 15;
const MAX_REVIEWS_MOBILE = 10;
const MIN_REVIEWS_TO_SHOW_DISTRIBUTION = 5;
const REVIEWS_TO_SHOW_INITIALLY = 6;

const isMobile = () => window.innerWidth < 768;

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [form, setForm] = useState<{ name: string; rating: number; text: string }>({ name: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showCount, setShowCount] = useState(REVIEWS_TO_SHOW_INITIALLY);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([{ ...form, rating: Number(form.rating) as 1|2|3|4|5 }, ...reviews]);
    setForm({ name: '', rating: 5, text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  const handleLoadMore = () => {
    setShowCount(
      Math.min(
        reviews.length,
        showCount + (isMobile() ? MAX_REVIEWS_MOBILE : MAX_REVIEWS_DESKTOP)
      )
    );
  };

  const handleToggleExpand = (i: number) => {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const ratingsDist = getRatingsDistribution(reviews);
  const total = reviews.length;
  const avg = total ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-[#111111] text-white py-4 px-2">
      <h1 className="text-3xl font-bold mb-4 text-center">Customer Reviews</h1>
      {total >= MIN_REVIEWS_TO_SHOW_DISTRIBUTION && (
        <div className="max-w-lg mx-auto mb-4 bg-white/10 p-4 rounded-lg shadow flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold text-yellow-400 mr-2">{avg}</span>
            <span className="text-lg text-white/80">/ 5</span>
          </div>
          <div className="w-full space-y-1">
            {[5,4,3,2,1].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="w-8 text-yellow-300">{'★'.repeat(star)}</span>
                <div className="flex-1 bg-gray-700 rounded h-3 overflow-hidden">
                  <div
                    className="bg-yellow-400 h-3 rounded"
                    style={{ width: `${(ratingsDist[star as 1|2|3|4|5] / total) * 100 || 0}%` }}
                  />
                </div>
                <span className="w-8 text-white/70 text-sm">{ratingsDist[star as 1|2|3|4|5]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl max-w-md mx-auto mb-6 space-y-3 glass-form transition-all duration-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
      >
        <input
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200 shadow-inner"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <select
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200 shadow-inner"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
        >
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Star{r>1?'s':''}</option>)}
        </select>
        <textarea
          className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200 shadow-inner resize-none min-h-[100px]"
          name="text"
          placeholder="Your Review"
          value={form.text}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-cyan-500/70 hover:bg-cyan-400/80 text-white font-bold py-3 rounded-lg shadow-lg backdrop-blur-md border border-cyan-300/30 transition-all duration-200 uppercase tracking-wider text-lg"
        >
          Submit Review
        </button>
        {submitted && <div className="text-green-400 text-center">Thank you for your review!</div>}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.slice(0, showCount).map((r, i) => {
          const isLong = r.text.length > 180;
          const isExp = expanded[i];
          return (
            <div key={i} className="bg-white/10 rounded-lg shadow-lg p-2">
              <div className="flex items-center mb-2">
                <div className="text-yellow-400 mr-2">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                <div className="font-semibold">{r.name}</div>
              </div>
              <div className="text-gray-200 text-sm">
                {isLong && !isExp ? (
                  <>
                    {r.text.slice(0, 180)}... <button className="text-blue-400 underline text-xs" onClick={() => handleToggleExpand(i)}>Read More</button>
                  </>
                ) : (
                  <>
                    {r.text} {isLong && <button className="text-blue-400 underline text-xs" onClick={() => handleToggleExpand(i)}>Show Less</button>}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {showCount < reviews.length && (
        <div className="flex justify-center mt-4">
          <button onClick={handleLoadMore} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Load More</button>
        </div>
      )}
    </div>
  );
};

export default Reviews;

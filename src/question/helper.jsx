import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Helper() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c03a7tm', 'template_lf8eaum', form.current, {
        publicKey: 'BQRnhOE7CiYcAfII-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Application sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send application.');
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 py-4 px-6">
          <h2 className="text-xl font-bold text-white">Become a Helper</h2>
        </div>

        {/* ✅ Attach ref & onSubmit */}
        <form ref={form} onSubmit={sendEmail} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Your Qualification *</label>
            <textarea 
              id="skills" 
              name="skills" 
              rows="3" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="B.Sc, B.com..."
            />
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Weekly Availability *</label>
            <select 
              id="availability" 
              name="availability" 
              required
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              <option value="1-3">1–3 hours</option>
              <option value="3-5">3–5 hours</option>
              <option value="5-10">5–10 hours</option>
              <option value="10+">10+ hours</option>
            </select>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">Why do you want to help?</label>
            <textarea 
              id="motivation" 
              name="motivation" 
              rows="2" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Your motivation..."
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>

          <p className="text-xs text-gray-500">* Required fields. We respect your privacy.</p>
        </form>
      </div>
    </div>
  );
}

export default Helper;

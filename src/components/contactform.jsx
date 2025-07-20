import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c03a7tm', 'template_n98zfrb', form.current, {
        publicKey: 'BQRnhOE7CiYcAfII-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="topic">
              What do you need help with?
            </label>
            <select
              id="topic"
              name="topic"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="General Question">General Question</option>
              <option value="Feedback">Feedback</option>
              <option value="Volunteer Inquiry">Volunteer Inquiry</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="We'll only use this to respond"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your question in detail..."
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="consent" required className="mr-3 h-5 w-5" />
            <label htmlFor="consent" className="text-gray-600 text-sm">
              I agree to have my data stored according to your{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

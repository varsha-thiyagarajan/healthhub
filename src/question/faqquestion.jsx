import React, { useState } from "react";

function Faq() {
  // State to track which FAQ is open
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do I need to create an account to get help?",
      answer: "No! We offer anonymous help, though creating an account lets you track responses and participate in discussions."
    },
    {
      question: "How long until I get a response?",
      answer: "Most questions get answered within 6 hours. Complex issues may take up to 24 hours during weekdays."
    },
    {
      question: "Is there any cost for using this service?",
      answer: "Absolutely not! All our help is completely free of charge. We're funded by community donations and volunteer efforts."
    },
    {
      question: "What kind of questions can I ask?",
      answer: "You can ask about any technical topic, from beginner to advanced levels. We specialize in web development, programming, and system administration."
    },
    {
      question: "Can I volunteer to help others?",
      answer: "Yes! We welcome new volunteers. Please visit our 'Join Us' page to learn how you can contribute your expertise."
    },
    {
      question: "How do I report an inappropriate answer?",
      answer: "Each answer has a 'Report' button. Our moderation team reviews all reports within 12 hours."
    },
    {
      question: "Do you offer one-on-one support?",
      answer: "While we primarily focus on public Q&A (so everyone can benefit), we do offer limited one-on-one sessions for complex issues."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button 
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-medium group"
              aria-expanded={activeIndex === index}
            >
              <span className="text-lg group-hover:text-blue-600 transition-colors">
                {item.question}
              </span>
              <span className={`text-blue-500 text-2xl transition-transform ${activeIndex === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div 
              className={`mt-2 text-gray-1000 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="pb-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
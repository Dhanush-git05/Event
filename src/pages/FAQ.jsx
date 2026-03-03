import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a trip with Wanderlust?",
      answer:
        "You can book a trip directly through our website by selecting your preferred package and clicking the 'Book Now' button. Our team will contact you for confirmation.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, UPI, net banking, and international payments via secure gateways.",
    },
    {
      question: "Can I customize my travel package?",
      answer:
        "Yes! Wanderlust offers fully customizable travel packages based on your preferences and budget.",
    },
    {
      question: "Is travel insurance included?",
      answer:
        "Travel insurance is optional but highly recommended. You can add it during the booking process.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellation policies depend on the package selected. Please refer to the terms & conditions of your chosen trip.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wanderlust FAQs ❓
        </h1>
        <p className="text-lg">
          Find answers to common questions about our travel services
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 Wanderlust Travel Partner | All Rights Reserved</p>
      </footer>

    </div>
  );
}
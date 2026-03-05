import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ssbspl",
        "template_iv5jo2f",
        form.current,
        "DTqHwlbRLQ5nfkBkg"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div id="Contact" className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Wanderlust 🌍
        </h1>
        <p className="text-lg">
          Your Trusted Travel Partner for Dream Destinations
        </p>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">

        {/* Contact Details */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Address:</strong><br />
              Wanderlust Travel Agency <br />
              Chennai, Tamil Nadu
            </p>

            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> support@wanderlusttravel.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Send Us a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 Wanderlust Travel Partner | All Rights Reserved</p>
      </footer>

    </div>
  );
}
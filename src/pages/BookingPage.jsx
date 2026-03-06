import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function BookingPage() {

  const pricePerPerson = 125000;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState("");
  const [payment, setPayment] = useState("");

  const total = travelers * pricePerPerson;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!payment) {
      alert("Please select a payment method");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      travelers: travelers,
      date: date,
      payment: payment,
      total: total
    };

    emailjs.send(
      "service_r66rqne",
      "template_k9i0h8s",
      templateParams,
      "DTqHwlbRLQ5nfkBkg"
    )
    .then(() => {
      alert("Booking Successful! Email Sent ✈️");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send booking email");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Wanderlust Trip Booking
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Trip Details */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              className="rounded-xl mb-6"
              alt="trip"
            />

            <h2 className="text-2xl font-bold mb-3">
              Paris Romantic Tour
            </h2>

            <p className="text-gray-600 mb-4">
              Enjoy a 5 Days / 4 Nights romantic trip exploring
              the Eiffel Tower, Louvre Museum and Seine River Cruise.
            </p>

            <ul className="text-gray-700 space-y-2">
              <li>✔ 4 Star Hotel</li>
              <li>✔ Daily Breakfast</li>
              <li>✔ Airport Transfers</li>
              <li>✔ City Tour Guide</li>
            </ul>

            <p className="mt-6 text-2xl font-bold text-blue-600">
              ₹1,25,000 / Person
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full border rounded-lg p-3"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full border rounded-lg p-3"
                placeholder="Enter your email"
              />
            </div>

            {/* Travelers */}
            <div>
              <label className="block mb-2 font-medium">
                Number of Travelers
              </label>
              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e)=>setTravelers(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Travel Date */}
            <div>
              <label className="block mb-2 font-medium">
                Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block mb-2 font-medium">
                Payment Method
              </label>

              <div className="space-y-2">

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    onChange={(e)=>setPayment(e.target.value)}
                  />
                  Credit / Debit Card
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e)=>setPayment(e.target.value)}
                  />
                  UPI Payment
                </label>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="PayPal"
                    onChange={(e)=>setPayment(e.target.value)}
                  />
                  PayPal
                </label>

              </div>
            </div>

            {/* Total Price */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg font-semibold">
                Total Price
              </p>

              <p className="text-3xl text-blue-600 font-bold">
                ₹{total.toLocaleString()}
              </p>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            >
              Pay Now
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
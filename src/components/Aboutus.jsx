import React from "react";

const About = () => {
  return (
    <div id="Aboutus" className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>

        {/* Intro Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Welcome to <span className="font-semibold text-blue-500">Your Company Name</span>. 
            We are passionate about delivering high-quality products and innovative 
            solutions that help businesses grow and succeed in the digital world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to provide reliable, scalable, and user-friendly 
              solutions that empower individuals and businesses to achieve their goals.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              Our vision is to become a leading technology partner known for 
              innovation, integrity, and excellence in everything we do.
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Member 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>

            {/* Member 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Lee</h3>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
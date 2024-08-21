import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 mt-10">Contact<span className="text-green"> Us</span></h1>
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full md:w-1/2 mx-4">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Reach Us At</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-orange-500">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>+91 9793703393</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-orange-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>ayushkeshari9@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-orange-500">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>KIIT University</span>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099037!2d144.95373531531714!3d-37.816279279751566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b4e921bff6b8!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1618546287563!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  className="border-none rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

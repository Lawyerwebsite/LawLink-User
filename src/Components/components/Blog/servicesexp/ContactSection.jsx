import React from 'react';

const ContactS = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="w-full p-2 border rounded-lg" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a6c6d87b1e!2sLaw%20Firm!5e0!3m2!1sen!2sus!4v1633033226784!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactS;
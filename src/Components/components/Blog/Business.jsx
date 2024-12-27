import React from 'react';
import NavbarComp from '../../ReusableComponents/NavbarComponent';
import Footer from '../Footer';

const Business = ({ firmName = "Your Firm's Name" }) => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <NavbarComp/>
      {/* Container */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 mb-10">
        {/* Image Section */}
        <div className="h-60 md:h-80 bg-gray-200">
          <img
            src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_11_Business-Laws-1.jpg"
            alt="Business Law Illustration"
            className="w-full h-full "
          />
        </div>
        {/* Content Section */}
        <div className="p-6 md:p-8 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Business Formations, Contracts, and Legal Advisory Services in Chennai, India
          </h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">{firmName}</span>, we offer specialized legal services to help businesses establish and thrive in Chennai, India. Whether you’re an entrepreneur starting a new venture or an established business seeking expert contract management, our team of experienced lawyers is here to support you with precision and professionalism.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We provide end-to-end assistance in <span className="font-semibold">business entity formation</span>, ensuring compliance with legal and regulatory requirements. From registering a private limited company or LLP to advising on the most suitable business structure for your goals, we simplify the complexities of starting your business.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our expertise in <span className="font-semibold">contract drafting and review</span> ensures your agreements are legally sound and aligned with your objectives. Be it employment contracts, service agreements, or shareholder agreements, we focus on safeguarding your interests and mitigating risks.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Additionally, our <span className="font-semibold">legal advisory services</span> cater to businesses across industries, offering guidance on corporate governance, regulatory compliance, and dispute resolution. We are dedicated to delivering solutions tailored to the unique needs of our clients, ensuring a seamless legal experience.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Choose <span className="font-semibold">{firmName}</span> for reliable and efficient legal support in Chennai. Let us handle the legal intricacies while you focus on growing your business.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Business;

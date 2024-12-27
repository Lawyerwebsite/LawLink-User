import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Privacypolicy = () => {
  return (
    <div>
      <NavbarComp />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 mt-20">
        <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            PRIVACY POLICY
          </h1>
          <div className="text-gray-700 space-y-6">
            <p>
              Our privacy policy (Policy) is designed to provide greater
              transparency into our privacy practices and principles in a format
              that is easy to navigate, read, and understand.
            </p>
            <p>
              This Policy describes the treatment of information provided or
              collected on our website where this Policy is posted. For the
              purposes of this Policy, the term ‘website’ shall mean and include
              services operated by us (or on our behalf) that may be displayed
              on various online, mobile, or other platforms.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li className="font-semibold">Information We Collect</li>
              <p>
                At the outset, you are free to refrain from sharing your
                information with us. There is no obligation on you to share any
                information with us to access the website...
              </p>
              <li className="font-semibold">Why We Collect Your Information</li>
              <p>
                You may share your name and e-mail address with us to enable us
                to send you a newsletter by email titled ‘Lex Lumis,’ which
                contains the latest amendments to laws currently in force in the
                Republic of India...
              </p>
              <li className="font-semibold">Changes to this Privacy Policy</li>
              <p>
                From time to time, we may change this Policy to accommodate new
                technologies, industry practices, regulatory requirements, or
                for other purposes...
              </p>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacypolicy;

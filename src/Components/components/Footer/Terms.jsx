import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      category: "FAQ",
      questions: [
        {
          question: "What is this platform, and how does it work?",
          answer:
            "Our platform connects you with qualified lawyers based on your legal needs, location, and preferences. Use the search tool to find a lawyer, view their profiles, and book a consultation.",
        },
        {
          question: "Is this service free for clients?",
          answer:
            "Yes, using the platform to search for lawyers and view profiles is completely free. Fees are only applicable for legal consultations or services arranged with a lawyer.",
        },
        {
          question: "How do I start searching for a lawyer?",
          answer:
            "Simply use the search bar on the homepage to filter lawyers by practice area, location, or expertise. You can also browse our categories for specific legal needs.",
        },
        {
          question: "Can I contact multiple lawyers at the same time?",
          answer:
            "Yes, you can reach out to multiple lawyers to discuss your case and compare their expertise before making a decision.",
        },
        {
          question: "How do I know which lawyer is right for me?",
          answer:
            "Review lawyer profiles, client reviews, and ratings to make an informed decision. You can also schedule initial consultations to find the best fit.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle logic
  };

  return (
    <div>
      <NavbarComp />
      <div className="m-10 mt-28">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Terms & Services
        </h1>
        <p className="text-center text-lg">
          Our platform is designed to create professional, compliant, and
          user-friendly websites tailored to the needs of legal professionals.
          While we strive to ensure the accuracy and reliability of content and
          features, it is the client's responsibility to provide accurate legal
          information and to review all website materials for compliance with
          applicable laws and professional standards. We are not liable for any
          legal or regulatory issues arising from the website’s content or use.
          Payment terms, project timelines, and scope of work will be outlined
          in a separate agreement. For any questions, please contact us
          directly.
        </p>

        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-20">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                {section.category}
              </h2>
              {section.questions.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-md mb-4 p-4 cursor-pointer bg-white hover:shadow-md transition-all flex justify-between items-center"
                  onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                >
                  <span className="text-gray-700 font-medium text-lg">
                    {faq.question}
                  </span>
                  <MdArrowDropDown
                    className={`text-2xl text-blue-600 transform transition-transform ${
                      activeIndex === `${sectionIndex}-${index}`
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                  {activeIndex === `${sectionIndex}-${index}` && (
                    <p className="mt-2 text-blue-500 w-full">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

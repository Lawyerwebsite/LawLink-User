export default function BankingLawSection() {
    return (
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            {/* Image Section */}
            <div className="md:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-lg shadow-lg"
                alt="Banking Law Illustration"
              />
            </div>
  
            {/* Content Section */}
            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Understanding Banking Law
                </h2>
                <p className="mt-4 text-gray-700">
                  Banking law governs the operations of financial institutions, ensuring compliance with regulations and protecting consumers. Our team of experts provides comprehensive legal support to navigate complex banking regulations.
                </p>
                {/* Call-to-Action Button */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring"
                  >
                    Learn More
                  </a>
                  <br></br>
                  <br></br>
                  <a 
                  href="#"
                  className="bg-transparent border bg-slate-400 border-black text-blue font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
              Get Legal Help Now
            </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Additional Legal Information Section */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: Regulatory Compliance */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Regulatory Compliance</h3>
              <p className="mt-2 text-gray-700">
                Stay compliant with ever-changing banking regulations. Our legal team ensures your institution meets all regulatory requirements.
              </p>
            </div>
  
            {/* Card 2: Consumer Protection */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Consumer Protection</h3>
              <p className="mt-2 text-gray-700">
                Protect your customers' rights and interests with our expert guidance on consumer protection laws.
              </p>
            </div>
  
            {/* Card 3: Risk Management */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Risk Management</h3>
              <p className="mt-2 text-gray-700">
                Mitigate risks with our tailored legal strategies designed to safeguard your financial institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
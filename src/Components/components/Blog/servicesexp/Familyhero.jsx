export default function FamilyLawsHero() {
    return (
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Understanding <span className="dark:text-violet-600">Family Laws</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Protecting your rights and ensuring justice for families through legal guidance and support.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Learn More</a>
              <a href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Get Legal Help</a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="https://hakifm.or.ke/wp-content/uploads/2022/04/Family-Law-Succession-Matters-2.jpeg" alt="Family Laws" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    );
  }
  
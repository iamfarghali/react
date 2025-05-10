import Section from "./Section";

function NewsletterSection() {
  return (
    <Section>
      <div id="newsletter" className="bg-blue-600 rounded-2xl overflow-hidden -mt-8">
        <div className="relative px-6 py-16 md:px-16 md:py-24">
          <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left */}
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text3xl lg:text-4xl font-semibold text-blue-50 mb-2">
                Subscribe Newsletter
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm">
                Best cooks and best delivery guys all at your service. Hot tasty
                food.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row">
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className=" w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-r-none focus:outline-none " />
                <button className="w-full sm:w-auto bg-yellow-400 text-yellow-950 hover:bg-yellow-950 hover:text-yellow-400 duration-200 font-semibold cursor-pointer px-8 py-2 sm:py-0  rounded-xl sm:rounded-l-none">Discover</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;

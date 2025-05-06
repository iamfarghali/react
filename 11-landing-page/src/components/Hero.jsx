import heroImage from "../assets/hero-image.png"
function Hero() {
  return (
    <section className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 pt-20 md:pt-28 pb-6 px-4 sm:px-6 lg:px-8">
      {/* First Box */}
      <div className="space-y-6 pr-2">
        {/* Badge */}
        <div className="group w-fit flex items-center gap-2 px-4 py-3 bg-amber-50/40 shadow-xs shadow-red-300 hover:bg-amber-50 duration-300 rounded-full">
          <span className="text-xs text-red-400 group-hover:text-amber-400 duration-300">
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="text-xs font-medium text-amber-950">
            Jump start your growth
          </span>
        </div>

        <div className="space-y-8 pl-1">
          {/* Heading */}
          <h1 className="text-gray-700 text-2xl sm:text-4xl sm:leading-12 md:text-2xl md:leading-normal lg:text-5xl lg:leading-tight font-semibold">
            We boost the growth for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
              Startup to Fortune 500
            </span>{" "}
            Companies<span className="ml-1 animate-pulse">⏰</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Fueling growth from bold startups to industry-leading Fortune 500s.
            We build success, together.
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 max-w-sm">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 border rounded-lg border-red-300 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <button 
            className="px-4 py-2.5 md:block bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300">
             <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Second Box */}
      <div className="hidden md:block p-8 pt-0">
        <div>
            <img src={heroImage} alt="Hero image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

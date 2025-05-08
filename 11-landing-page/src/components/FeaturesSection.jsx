function FeaturesSection() {
    const features = [
        {
          icon: "🔍",
          title: "Find out what you need",
          description: "We present you a proposal and discuss nitty-gritty like",
          backgroundColor:'bg-purple-100',
        },
        {
          icon: "⚙️",
          title: "Work out the details",
          description: "Communication protocols apart from engagement models",
          backgroundColor:'bg-amber-100',
        },
        {
          icon: "🚀",
          title: "We get to work fast",
          description: "Protocols apart from engage models, pricing billing",
          backgroundColor:'bg-orange-100',
        },
      ];

    return (
        <section className="container mx-auto flex flex-col gap-14 items-center justify-center pt-12 pb-32 px-4 sm:px-6 md:px-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-3">
                <h2 className="text-gray-700 text-2xl sm:text-3xl md:text-4xl font-semibold">How can we help your business?</h2>
                <p className="text-gray-500 text-sm sm:text-base md:text-xl">When you resell besink, you build trust and increase</p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 items-center md:flex-row md:gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col gap-4 items-center md:items-start lg:items-center justify-between p-4">
                        {/* Icon */}
                        <div className={`w-4 h-4 flex items-center justify-center p-10 rounded-full ${feature.backgroundColor}`}>
                            <i className="text-xl">{feature.icon}</i>
                        </div>
                       <div className="flex flex-col items-center justify-center gap-3 px-1">
                            <h3 className="text-gray-700 text-xl sm:text-xl font-medium">{feature.title}</h3>
                            <p className="text-gray-500 text-sm sm:text-base lg:text-center">{feature.description}</p>
                       </div>
                    </div>
                ))}
            </div>

            {/* CTA */}

            <button 
            className="-mt-2 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300">
                Become a Partner
            </button>

        </section>
    )
}

export default FeaturesSection

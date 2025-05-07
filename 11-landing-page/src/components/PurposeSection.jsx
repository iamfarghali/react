function PurposeSection() {
    const features = [
        {
          icon: "fa-check", 
          title: "Built for impact",
          description:
            "We identify and nurture a truly diverse team of designers, developers and marketers",
        },
        {
          icon: "fa-rotate",
          title: "In sync with you",
          description:
            "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
        }
    ];

    return (
        <section className="w-full bg-gradient-to-br from-red-50/50 to-blue-100 pt-12 pb-32 px-4 sm:px-6 md:px-8">
            <div 
                className="
                max-w-5xl mx-auto grid grid-cols-1 gap-10 
                md:grid-cols-[220px_1fr] md:gap-22 
                lg:gap-24 items-center
            ">
                <div>
                    <span className="pl-1 text-xs font-bold text-yellow-600 uppercase">Achive more</span>
                    <h2 className="text-3xl md:text-4xl text-gray-700 font-medium mt-1">Purpose of a convoy is to keep your team</h2>
                </div>

                <div className="pl-6 md:pl-0 grid grid-cols-1 gap-8 md:grid-cols-2 text-gray-700">
                   {features.map((feature, idx) => (
                     <div key={idx} className="flex items-baseline gap-2">
                        <i className={`fa-solid ${feature.icon} text-xl text-yellow-600`}></i>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl font-bold">{feature.title}</p>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                   ))}
                </div>
            </div>
        </section>
    )
}

export default PurposeSection

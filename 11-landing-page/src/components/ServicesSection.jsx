import Section from './Section';

function ServicesSection() {
    const services = [
  {
    icon: '#',
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: '#',
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: '#',
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: '#',
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];

return (
    <Section>
        <div id='services' className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8'>
            {/* First box */}
            <div className="md:mt-8 lg:max-w-2/3 flex flex-col items-start gap-6 px-4">
                <h2 className='text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl'>Future of support with new shape</h2>
                
                <div className='flex flex-col gap-2  text-gray-600'>
                    <p>Discuss your goals, determine success metrics, identify problems.</p>
                    <ul className='flex flex-col gap-1 pl-2'>
                        <li className='flex items-center gap-2'>
                            <span className='inline-block w-2 h-2 rounded-full bg-blue-500'></span>
                            UX Design Content Stratege
                        </li>
                        <li  className='flex items-center gap-2'>
                                <span className='inline-block w-2 h-2 rounded-full bg-blue-500'></span>
                            Development Bring
                        </li>
                    </ul>
                </div>

                    <button 
                    className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Get Started
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {services.map((service, idx) => (
                    <div key={idx} className="flex flex-col gap-3 justify-between p-4 rounded-3xl hover:shadow duration-200 hover:scale-105 cursor-pointer">
                        {/* Icon */}
                        <div className="w-2 h-2 flex items-center justify-center p-4 rounded-full text-yellow-950 bg-yellow-400">
                            <i className="text-xl">{service.icon}</i>
                        </div>
                       <div className="flex flex-col gap-1 px-1">
                            <h3 className="text-gray-700 font-bold">{service.title}</h3>
                            <p className="text-gray-500 text-sm sm:text-base">{service.description}</p>
                       </div>
                       <a href="#" className='text-xs uppercase font-semibold text-blue-600'>Learn more</a>
                    </div>
                ))}
            </div>
        </div>
    </Section>
)
}

export default ServicesSection

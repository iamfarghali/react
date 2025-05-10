import Section from './Section';
import scheduleImage from "../assets/stats.webp";

function ScheduleSection() {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap:4 md:gap-24 md:justify-items-center items-center">
                <div>
                   <img src={scheduleImage} alt="stats image" className='w-full h-auto' />
                </div>

                <div className='flex flex-col gap-5'>
                   <div className='flex flex-col gap-2'>
                        <span className='text-xs font-bold text-yellow-600 uppercase'>Schedule</span>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700'>Streamline your business with smart scheduling solutions</h2>
                   </div>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos minus a assumenda quis illum dolorem, omnis commodi quidem ducimus unde quod itaque amet eius cumque maxime, recusandae asperiores corrupti voluptatibus!
                    </p>

                    <a href="#" className='text-blue-500 font-semibold'>Explore scheduling features &rarr;</a>
                </div>
            </div>
        </Section>
    )
}

export default ScheduleSection

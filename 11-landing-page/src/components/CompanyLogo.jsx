import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import woocommerce from '../assets/woocommerce.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';


function CompanyLogo() {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint];

    return (
        <section 
        className="container overflow-hidden mx-auto py-20 flex flex-col gap-10 items-start sm:flex-row sm:items-center">
            <div 
            className="
                w-[200px] md:w-[250px] shrink-0 text-gray-700 
                border-l-4 border-yellow-700 bg-red-50 
                p-4 text-sm z-99 font-semibold
                shadow-xs md:text-base rounded-tr-lg rounded-br-lg
            ">
                <p>Proud parter at <br/> Hubspot & Segment</p>
            </div>

            <div className='flex items-center animate-marquee  whitespace-nowrap'>
                {logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt="A company logo" 
                    className='mx-8 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 duration-200' />
                ))}
                 {logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt="A company logo" 
                    className='mx-8 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 duration-200' />
                ))}
            </div>
        </section>
    )
}

export default CompanyLogo

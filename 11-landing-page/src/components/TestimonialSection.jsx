import Section from "./Section";

// core version + navigation modules:
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
          What out happy clients say
        </h2>
        <p className="text-gray-500">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* Slider */}
      <div className="relative swiper">
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-slider md:mb-12"
        >
          {testimonials.map((testi, idx) => (
            <SwiperSlide key={idx} className="h-full pt-1 pb-6 md:pt-1 md:pb-0 md:px-4">
              <div className="group flex flex-col gap-4 justify-between items-center text-center bg-gradient-to-bl from-red-50 to-blue-50 p-4 shadow h-full rounded-2xl">
                <div className="w-24 h-24 mx-auto p-1 border border-gray-200 group-hover:border-blue-400 duration-200 rounded-full mb-4">
                    <img src={testi.image} alt="" className="w-full h-full rounded-full object-cover" />
                </div>
                <h3 className="text-sm font-bold text-gray-700 -mt-4">{testi.name}</h3>
                <p className="text-gray-500">{testi.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation */}
        <div className="flex items-center justify-center gap-4">
          <button className="swiper-button-prev-custom flex items-center justify-center hover:scale-105 text-gray-700 duration-200 cursor-pointer w-12 h-12 bg-blue-300 rounded-full p-4">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button className="swiper-button-next-custom flex items-center justify-center hover:scale-105 text-gray-700 duration-200 cursor-pointer w-12 h-12 bg-blue-300 rounded-full p-4">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Section>
  );
}

export default TestimonialSection;

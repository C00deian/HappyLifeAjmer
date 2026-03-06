import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import f1 from "../../assets/facility/IMG-20230624-WA0014-1024x774.jpg";
import f2 from "../../assets/facility/WhatsApp-Image-2023-06-29-at-09.48.24-4.jpeg";
import f3 from "../../assets/facility/WhatsApp-Image-2023-06-29-at-09.48.24-5.jpeg";
import f4 from "../../assets/facility/WhatsApp-Image-2023-06-29-at-09.48.24-6.jpeg";
import f5 from "../../assets/facility/WhatsApp-Image-2023-06-29-at-09.53.30-1.jpeg";
import f6 from "../../assets/facility/doctorW.jpeg";

const slides = [
  {
    image: f1,
    label: "Hospital Ambulance",
    description:
      "Modern infrastructure designed for patient comfort and efficient care delivery.",
  },
  {
    image: f2,
    label: "Laboratory",
    description:
      "State-of-the-art equipment and clean environment across all departments.",
  },
  {
    image: f3,
    label: "X-Ray",
    description:
      "Dedicated wards with expert nursing staff for round-the-clock patient care.",
  },
  {
    image: f4,
    label: "Ultrasound",
    description:
      "Advanced diagnostic tools for accurate and timely test results.",
  },
  {
    image: f6,
    label: "Operation Theatre OT",
    description:
      "Fully equipped OT for general, laparoscopic and specialized surgeries.",
  },
  {
    image: f5,
    label: "Ward",
    description:
      "Expert gynecological care for mothers and newborns in a safe environment.",
  },
];

export default function FacilitySlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facility" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
       
          <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl mb-4">
           Our Medical Facilities
          </h2>
             <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <p className="font-roboto text-muted max-w-xl mx-auto text-base leading-relaxed">
            Our hospital is equipped with advanced medical technology to provide
            superior patient care across all our departments.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-[4/3]">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Label badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-poppins font-semibold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {slide.label}
                  </div>

                  {/* Description on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-roboto text-white text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

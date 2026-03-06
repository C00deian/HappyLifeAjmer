import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../../assets/3.jpeg";
import img2 from "../../assets/2.jpeg";
import img4 from "../../assets/WhatsApp-Image-2023-07-08-at-16.20.49.jpeg";

const slides = [img1, img2, img4];

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[120vh] flex items-center justify-start overflow-hidden">
      {/* Sliding background images */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[current]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent z-[1]" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-poppins font-medium text-primary text-lg uppercase tracking-widest mb-3">
            Welcome to
          </p>
          <h1 className="font-poppins font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mb-8">
            <span className="block mb-3">Happy Life</span>
            <span className="block text-primary mb-3">Multispeciality</span>
            <span className="block">Hospital</span>
          </h1>
          <p className="font-roboto text-gray-200 text-base  md:text-xl leading-relaxed mb-8 max-w-xl">
            At Happy Life Ajmer Hospital, we are committed to providing
            exceptional healthcare services with a focus on patient-centered
            care and well-being. Our hospital is dedicated to improving the
            health and happiness of individuals and families in the Ajmer
            community and beyond. With a team of highly skilled medical
            professionals and state-of-the-art facilities, we strive to deliver
            the highest quality of care to our patients.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/"
              className="bg-white text-navy font-poppins font-semibold px-8 py-3.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              Health Advice
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "bg-primary w-7 h-2.5"
                : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/80 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

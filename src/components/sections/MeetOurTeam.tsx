import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import t1 from "../../assets/t1.jpeg";
import t2 from "../../assets/t2.jpeg";

export default function MeetOurTeam() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-primary rounded-full" />
            <span className="font-poppins font-semibold text-primary uppercase tracking-wider text-sm">
              Meet Our Team
            </span>
            <div className="h-1 w-10 bg-primary rounded-full" />
          </div>
          <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl mb-4">
            Happy Life Multispeciality Hospital
          </h2>
          <p className="font-roboto text-muted max-w-2xl mx-auto text-base leading-relaxed">
            Our dedicated team of medical professionals is committed to
            delivering compassionate, evidence-based care to every patient who
            walks through our doors.
          </p>
        </motion.div>

        {/* Two Team Photos side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left — t1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] bg-gray-50"
          >
            <img
              src={t1}
              alt="Happy Life Hospital Team"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-poppins font-bold text-white text-lg mb-0.5">
                Our Medical Team
              </h3>
              <p className="font-roboto text-gray-200 text-sm">
                Committed to excellence in patient care
              </p>
            </div>
          </motion.div>

          {/* Right — t2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] bg-gray-50"
          >
            <img
              src={t2}
              alt="Happy Life Hospital Staff"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-poppins font-bold text-white text-lg mb-0.5">
                Expert Staff
              </h3>
              <p className="font-roboto text-gray-200 text-sm">
                Trained at India's premier medical institutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

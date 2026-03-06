import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHospital } from "react-icons/fa";

export default function WelcomeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="font-poppins font-semibold text-primary uppercase tracking-wider text-sm">
                About Us
              </span>
            </div>
            <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl leading-tight mb-6">
              Welcome to <br />
              <span className="text-primary">Happy Life</span> Multispeciality
              Hospital
            </h2>
            <p className="font-roboto text-muted text-base leading-relaxed mb-5">
              At Happy Life Ajmer Hospital, we are committed to providing
              exceptional healthcare services with a focus on patient-centered
              care and well-being. Our hospital is dedicated to improving the
              health and happiness of individuals and families in the Ajmer
              community and beyond.
            </p>
            <p className="font-roboto text-muted text-base leading-relaxed">
              With a team of highly skilled medical professionals and
              state-of-the-art facilities, we strive to deliver the highest
              quality of care to our patients. Our doctors are trained from
              premier institutions like AIIMS and Lady Hardinge Medical College,
              New Delhi.
            </p>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: "10+", label: "Years Experience" },
              { num: "5000+", label: "Happy Patients" },
              { num: "6+", label: "Specialties" },
              { num: "3", label: "Locations in Rajasthan" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/10 to-blue-50 border border-primary/20 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-poppins font-extrabold text-primary text-4xl mb-2">
                  {stat.num}
                </div>
                <div className="font-roboto text-muted text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Award-like feature badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center gap-4 bg-gradient-to-r from-navy to-primary text-white rounded-2xl p-6"
        >
          <FaHospital className="text-5xl text-white/70 shrink-0" />
          <div>
            <div className="font-poppins font-bold text-lg">
              Doctors from AIIMS &amp; Lady Hardinge, New Delhi
            </div>
            <div className="font-roboto text-white/80 text-sm mt-1">
              Expert medical care with premier institutional training — now
              available in Ajmer, Rajasthan.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

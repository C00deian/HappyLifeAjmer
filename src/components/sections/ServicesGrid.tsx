import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBone, FaXRay, FaBaby, FaPills, FaSyringe } from "react-icons/fa";

import { GiMicroscope } from "react-icons/gi";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FaBone,
    title: "Orthopedics",
    description:
      "Advanced orthopedic care for bones, joints, muscles, and ligaments with expert surgical and non-surgical treatments.",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: FaXRay,
    title: "Radiology",
    description:
      "State-of-the-art diagnostic imaging including X-Ray, Ultrasound, 2D Echo, and Fetal Anomaly scans.",
    color: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
  },
  {
    icon: FaSyringe,
    title: "Surgery",
    description:
      "Expert surgical procedures including general, laparoscopic, and specialized surgeries performed with precision.",
    color: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    icon: FaBaby,
    title: "Obstetrics & Gynecology",
    description:
      "Comprehensive women's healthcare including normal/cesarean delivery, gynecological surgeries, and infertility treatment.",
    color: "from-pink-50 to-pink-100",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
  },
  {
    icon: FaPills,
    title: "Medicine",
    description:
      "General medicine and internal medicine services for diagnosis and treatment of a wide range of medical conditions.",
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    icon: GiMicroscope,
    title: "Path & Microbiology Lab",
    description:
      "Equipped pathology laboratory providing accurate diagnostic tests and microbiological analysis for precise diagnosis.",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
          ref={ref}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-primary rounded-full" />
            <span className="font-poppins font-semibold text-primary uppercase tracking-wider text-sm">
              Our Services
            </span>
            <div className="h-1 w-10 bg-primary rounded-full" />
          </div>
          <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl mb-4">
            Speciality Departments
          </h2>
          <p className="font-roboto text-muted max-w-xl mx-auto text-base leading-relaxed">
            We offer comprehensive medical services across multiple specialties,
            delivered by expert doctors trained at India's premier medical
            institutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-7 border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
              >
                <div
                  className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`${service.iconColor} text-3xl`} />
                </div>
                <h3 className="font-poppins font-bold text-navy text-xl mb-3">
                  {service.title}
                </h3>
                <p className="font-roboto text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/consultancy-form"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-poppins font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Book Consultation →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

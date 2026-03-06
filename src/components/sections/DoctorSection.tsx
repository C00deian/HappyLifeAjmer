import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle, FaHospital } from "react-icons/fa";
import { Link } from "react-router-dom";
import doctorM from "../../assets/doctorImgM.png";
import doctorF from "../../assets/doctorW.jpeg";

const doctors = [
  {
    name: "Dr. Lohit Shivashish",
    photo: doctorM,
    role: "CONSULTANT RADIOLOGIST",
    qualifications: [
      "MBBS, MD Radio-Diagnosis",
      "Ex SR Radio Diagnosis, AIIMS Delhi",
      "Ex Consultant Radiologist, New Delhi",
      "Specialist in Fetal Congenital Anomalies, Fetal Echo & Adult 2D Echo",
    ],
    experience: [
      "AIIMS, New Delhi",
      "Guru Nanak Hospital, Amritsar, Punjab",
      "Safdarjung Hospital, New Delhi",
      "Sanjeevani & R J Multispeciality Hospital, Haryana",
      "Jawahar Lal Nehru Hospital, Ajmer",
      "Railway Hospital, Ajmer",
    ],
    tagColor: "bg-primary",
    imgSide: "left",
  },
  {
    name: "Dr. Anjali Singh Shivashish",
    photo: doctorF,
    role: "CONSULTANT OBSTETRICIAN AND GYNECOLOGIST",
    qualifications: [
      "MBBS, Lady Hardinge Medical College, Delhi",
      "MS Obstetrics & Gynecology, Lady Hardinge Medical College, Delhi",
      "Ex SR Obstetrics & Gynecology LHMC Delhi",
      "Certificate in Preventive Oncology (FOGSI)",
    ],
    experience: [
      "Lady Hardinge Medical College and Hospital, Delhi",
      "Delhi Hospitals",
    ],
    services: [
      "नॉर्मल / सीजेरियन डिलेवरी",
      "बच्चेदानी व अंडाशय का ऑपरेशन",
      "निसंतान दम्पतियो का इलाज",
    ],
    tagColor: "bg-pink-500",
    imgSide: "right",
  },
];

export default function DoctorSection() {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-10 bg-primary rounded-full" />
            <span className="font-poppins font-semibold text-primary uppercase tracking-wider text-sm">
              Our Experts
            </span>
            <div className="h-1 w-10 bg-primary rounded-full" />
          </div>
          <h2 className="font-poppins font-bold text-navy text-3xl md:text-4xl mb-4">
            Meet Our Doctors
          </h2>
          <p className="font-roboto text-muted max-w-xl mx-auto text-base">
            Highly trained physicians from India's premier medical institutions,
            bringing world-class care to Ajmer.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="flex flex-col gap-16">
          {doctors.map((doc, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });
            const isLeft = doc.imgSide === "left";

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start ${!isLeft ? "md:flex-row-reverse" : ""}`}
              >
                {/* Photo */}
                {isLeft && (
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                    <div
                      className={`absolute -bottom-4 left-6 ${doc.tagColor} text-white font-poppins font-semibold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider`}
                    >
                      {doc.role}
                    </div>
                  </div>
                )}

                {/* Info */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    <span className="text-primary font-poppins font-semibold text-sm uppercase tracking-wider">
                      Specialist
                    </span>
                  </div>
                  <h3 className="font-poppins font-extrabold text-navy text-3xl md:text-4xl mb-5">
                    {doc.name}
                  </h3>

                  {/* Qualifications */}
                  <div className="mb-5">
                    <h4 className="font-poppins font-semibold text-navy text-base uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FaHospital className="text-primary" /> Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {doc.qualifications.map((q, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-roboto text-muted text-base"
                        >
                          <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div className="mb-5">
                    <h4 className="font-poppins font-semibold text-navy text-base uppercase tracking-wider mb-3">
                      Experience
                    </h4>
                    <ul className="space-y-2">
                      {doc.experience.map((e, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 font-roboto text-muted text-base"
                        >
                          <span className="text-primary mt-1.5 text-xs">●</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hindi services if present */}
                  {doc.services && (
                    <div className="mb-5">
                      <h4 className="font-poppins font-semibold text-navy text-base uppercase tracking-wider mb-3">
                        Our Services
                      </h4>
                      <ul className="space-y-2">
                        {doc.services.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 font-roboto text-muted text-base"
                          >
                            <FaCheckCircle className="text-pink-500 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to="/consultancy-form"
                    className="inline-block bg-primary text-white font-poppins font-semibold px-7 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 text-sm mt-2"
                  >
                    Book Appointment
                  </Link>
                </div>

                {/* Photo on right side */}
                {!isLeft && (
                  <div className="relative order-first md:order-last">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                    <div
                      className={`absolute -bottom-4 left-6 ${doc.tagColor} text-white font-poppins font-semibold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider`}
                    >
                      {doc.role}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

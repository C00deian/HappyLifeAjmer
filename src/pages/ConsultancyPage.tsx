import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaCommentMedical,
  FaCheckCircle,
} from "react-icons/fa";

export default function ConsultancyPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    reason: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-primary rounded-full" />
              <span className="font-poppins font-semibold text-primary uppercase tracking-wider text-sm">
                Book Appointment
              </span>
            </div>
            <h1 className="font-poppins font-extrabold text-navy text-3xl md:text-4xl mb-5 leading-tight">
              Fill The Form
              <br />
              <span className="text-primary">Get Consultancy</span>
            </h1>
            <p className="font-roboto text-muted text-base leading-relaxed mb-8">
              Reach out to our expert medical team for a consultation. We
              provide specialized care in Radiology, Obstetrics & Gynecology,
              Surgery and more. Your health is our priority.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <FaPhone className="text-primary text-lg" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-navy text-sm">
                    Call Us
                  </div>
                  <a
                    href="tel:+917852033531"
                    className="font-roboto text-muted text-sm hover:text-primary transition-colors"
                  >
                    +91 7852033531
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <FaCommentMedical className="text-primary text-lg" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-navy text-sm">
                    Visit Us
                  </div>
                  <p className="font-roboto text-muted text-sm">
                    D-13, Chandvardai Nagar, Taragarh Road, Ajmer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <FaCheckCircle className="text-green-500 text-4xl" />
                </motion.div>
                <h2 className="font-poppins font-bold text-navy text-2xl mb-3">
                  Request Submitted!
                </h2>
                <p className="font-roboto text-muted text-base">
                  Thank you, <strong>{form.fullName}</strong>! We'll contact you
                  shortly on <strong>{form.mobile}</strong> to confirm your
                  appointment.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ fullName: "", mobile: "", reason: "", date: "" });
                  }}
                  className="mt-6 bg-primary text-white font-poppins font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-poppins font-bold text-navy text-2xl mb-7">
                  Appointment Request
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block font-poppins font-semibold text-navy text-sm mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm" />
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl font-roboto text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block font-poppins font-semibold text-navy text-sm mb-2">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm" />
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl font-roboto text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Reason for Consultation */}
                  <div>
                    <label className="block font-poppins font-semibold text-navy text-sm mb-2">
                      Reason for Consultation *
                    </label>
                    <div className="relative">
                      <FaCommentMedical className="absolute left-4 top-4 text-muted text-sm" />
                      <textarea
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your symptoms or reason for visit..."
                        className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl font-roboto text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block font-poppins font-semibold text-navy text-sm mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm" />
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl font-roboto text-navy text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-poppins font-semibold py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-primary/40 text-base"
                  >
                    Request Appointment
                  </button>

                  <p className="font-roboto text-muted text-xs text-center">
                    We'll call you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../assets/logo.png";

export default function StayInTouch() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    reason: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ fullName: "", mobile: "", reason: "", date: "" });
    }, 3000);
  };

  return (
    <section ref={ref} className="bg-navy py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center"
        >
          {/* ── Left: logo + button ── */}
          <div className="flex flex-col items-center gap-6">
            <img
              src={logo}
              alt="Happy Life Hospital Logo"
              className="w-36 h-36 object-contain"
            />
            <button
              form="stay-in-touch-form"
              type="submit"
              className="w-full bg-primary text-white font-poppins font-bold py-3 px-8 rounded-full text-base hover:brightness-110 transition-all duration-300 shadow-lg"
            >
              Get Consultancy
            </button>
          </div>

          {/* ── Right: form ── */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <p className="font-poppins font-bold text-white text-2xl mb-2">
                ✅ Request Submitted!
              </p>
              <p className="font-roboto text-gray-300 text-base">
                We'll contact you shortly at{" "}
                <span className="text-primary font-semibold">
                  {form.mobile}
                </span>
                .
              </p>
            </motion.div>
          ) : (
            <form
              id="stay-in-touch-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full bg-transparent border border-gray-400/60 text-white placeholder-gray-400 font-roboto text-base px-5 py-3.5 rounded-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />

              {/* Mobile Number */}
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="Mobile Number"
                className="w-full bg-transparent border border-gray-400/60 text-white placeholder-gray-400 font-roboto text-base px-5 py-3.5 rounded-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />

              {/* Reason */}
              <input
                type="text"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                placeholder="Reason for Consultation"
                className="w-full bg-transparent border border-gray-400/60 text-white placeholder-gray-400 font-roboto text-base px-5 py-3.5 rounded-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />

              {/* Date */}
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-white text-navy font-roboto text-base px-5 py-3.5 rounded-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-[#2d2d2d] hover:bg-[#444] text-white font-poppins font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

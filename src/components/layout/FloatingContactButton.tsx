import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

const actions = [
  {
    icon: FaPhone,
    label: "Phone",
    bg: "#22c55e",
    href: "tel:+917852033531",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    bg: "#25D366",
    href: "https://wa.me/917852033531",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    bg: "#ef4444",
    href: "mailto:info@happylifeajmer.com",
  },
];

const BUTTON_SIZE = 60; // px — main button diameter
const ITEM_SIZE = 60; // px — action button diameter
const GAP = 14; // px — gap between buttons
// Each action sits above the main button: index 0 is the closest
const getBottom = (i: number) => BUTTON_SIZE + GAP + i * (ITEM_SIZE + GAP);

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    // Outer wrapper: fixed bottom-right, sized just to the main button
    // Action buttons overflow upward via absolute positioning — no layout shift
    <div
      className="fixed z-50"
      style={{ bottom: 24, right: 24, width: BUTTON_SIZE, height: BUTTON_SIZE }}
    >
      {/* ── Action buttons (float above, absolutely positioned) ── */}
      <AnimatePresence>
        {open &&
          actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={action.label}
                initial={{ opacity: 0, y: 10, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.7 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 24,
                  delay: open ? i * 0.07 : (actions.length - 1 - i) * 0.05,
                }}
                className="absolute flex items-center justify-center rounded-full text-white shadow-lg group"
                style={{
                  width: ITEM_SIZE,
                  height: ITEM_SIZE,
                  bottom: getBottom(i),
                  right: (BUTTON_SIZE - ITEM_SIZE) / 2, // horizontally centered with main btn
                  background: action.bg,
                }}
              >
                <Icon className="text-2xl" />
                {/* Tooltip */}
                <span className="absolute right-16 bg-[#1D213B] text-white text-xs font-poppins font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow">
                  {action.label}
                </span>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* ── Main toggle button — NEVER moves ── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        animate={{ rotate: open ? 135 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
        className="relative w-full h-full rounded-full flex items-center justify-center text-white shadow-xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7b36ce, #9b55e5)" }}
      >
        {/* Pulse ring — only when closed */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ background: "#7b36ce" }}
          />
        )}

        {/* Icon cross-fade */}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute"
            >
              <FaTimes className="text-2xl" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute"
            >
              <FaCommentDots className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

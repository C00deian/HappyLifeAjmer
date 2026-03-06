import { Link } from "react-router-dom";
import locationIcon from "../../assets/hospital-location.svg";
import callIcon from "../../assets/emergency_call_1.svg";

export default function TopBar() {
  return (
    <div className="bg-black/85 text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
      
        {/* Center: Address + Phone */}
        <div className="flex items-center gap-8 flex-1 justify-center flex-wrap text-center">
          {/* Address */}
          <span className="flex items-center gap-2.5">
            <span className="rounded-full w-10 h-10 flex items-center justify-center shrink-0">
              <img
                src={locationIcon}
                alt="Location"
              />
            </span>
            <span className="font-poppins font-semibold text-white text-sm md:text-base whitespace-nowrap">
              D-13,Chandvardai Nagar, Taragarh Road, Ajmer
            </span>
          </span>

          {/* Phone */}
          <a
            href="tel:+917852033531"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <span className="rounded-full w-10 h-10 flex items-center text-center justify-center shrink-0">
              <img src={callIcon} alt="Call"/>
            </span>
            <span className="font-poppins font-semibold text-white text-sm md:text-base whitespace-nowrap">
              +917852033531
            </span>
          </a>
        </div>

        {/* Appointment Button */}
        <Link
          to="/consultancy-form"
          className="shrink-0 bg-white text-navy px-6 py-3 text-md tracking-widest border border-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
        >
          APPOINTMENT
        </Link>
      </div>
    </div>
  );
}

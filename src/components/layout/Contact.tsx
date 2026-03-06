import { FaMapMarkerAlt} from "react-icons/fa";

const locations = [
  {
    name: "Happy Life Multispeciality Hospital",
    address: "D-13, Chandvardai Nagar, Taragarh Road, Ajmer",
    mapUrl: "https://goo.gl/maps/XPBqApyeJxYrspuJ7",
  },
  {
    name: "Happy Life Maternity Clinic & Diagnostic Centre",
    address: "Shop No. 2 & 3, Near Government Hospital, Saradhana",
    mapUrl: "https://goo.gl/maps/ySDhGxzLa2vG7ev79",
  },
  {
    name: "Happy Life Clinic And Diagnostic Centre, Kharwa",
    address:
      "Shop No 4, Jai Jinendra Market, Sarkari Hospital K Samne, Beawar Road Kharwa",
    mapUrl: "https://goo.gl/maps/GzmNxExcq8PwjxGN8",
  },
];

export default function Contact() {
  return (
    <footer id="locations" className=" text-black">
      {/* Location Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10  rounded-xl p-6 hover:bg-primary hover:text-white transition-all duration-300 group bg-gray-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary p-2 rounded-lg shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-black text-lg" />
                </div>
                <div>
                  <h3 className=" font-semibold text-black text-base leading-tight mb-2">
                    {loc.name}
                  </h3>
                  <p className="font-roboto text-gray-black/80 text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              </div>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange text-navy px-5 py-2 rounded-full text-sm hover:bg-yellow-400 transition-all duration-300"
              >
                Get Location
              </a>
            </div>
          ))}
        </div>
      </div>

   
    </footer>
  );
}

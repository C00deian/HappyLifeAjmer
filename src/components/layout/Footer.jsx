const Footer = () => {
    return (
        <footer id="locations" className="bg-navy text-white">
     <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-poppins font-semibold text-gray-300">
            <FaGlobe className="text-primary" />
            <a
              href="https://happylifeajmer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              happylifeajmer.com
            </a>
          </div>
        </div>
      </div>
        </footer>
    );
};
export default Footer;
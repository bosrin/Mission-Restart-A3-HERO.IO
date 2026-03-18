import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#072b45] text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center border-b border-white/20">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-lg sm:text-xl font-bold">HERO.IO</span>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <p className="mb-2 text-xs sm:text-sm">Social Links</p>
          <div className="flex gap-3 sm:gap-4 justify-center md:justify-end text-sm sm:text-base">
            <FaXTwitter className="cursor-pointer hover:text-gray-300 text-sm sm:text-base" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300 text-sm sm:text-base" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300 text-sm sm:text-base" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-3 sm:py-4 text-xs sm:text-sm text-gray-300">
        Copyright © 2025 - All right reserved
      </div>

    </footer>
  );
};

export default Footer;

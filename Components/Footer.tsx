import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2120] text-white">
      <div className="px-8 md:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/planet-icon.svg" alt="Planet Blog" className="w-6 h-6" />
              <h2 className="text-xl font-bold">Planet Blog</h2>
            </div>
            <p className="font-semibold text-[#CACACA] text-[14px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          {/* Subscribe block comes second */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-[14px] pb-[20px]">Subscribe To Our News</h3>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full md:w-[245px] h-[40px] px-4 py-2 mb-[16px] font-semibold rounded-[5px] bg-white text-black text-[12px]"
            />
            <button className="bg-[#7873FF] text-white text-sm font-semibold items-center justify-center rounded-[5px] w-[120px] h-[40px]">
              Send
            </button>
          </div>

          {/* Our Company and Services section */}
          <div className="md:col-span-2 flex flex-col sm:flex-row md:justify-center gap-10 md:gap-40">
            <div>
              <h3 className="font-bold mb-4">Our Company</h3>
              <ul className="space-y-2 text-sm text-[#CACACA]">
                <li><a href="#" className="hover:underline">OFFICES</a></li>
                <li><a href="#" className="hover:underline">Works</a></li>
                <li><a href="#" className="hover:underline">Developments</a></li>
                <li><a href="#" className="hover:underline">Locations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-[#CACACA]">
                <li><a href="#" className="hover:underline">Regular</a></li>
                <li><a href="#" className="hover:underline">Premium</a></li>
                <li><a href="#" className="hover:underline">Special Offers</a></li>
                <li><a href="#" className="hover:underline">New Deals</a></li>
                <li><a href="#" className="hover:underline">Custom Offers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <hr className="border-[#CACACA] w-full mt-12 mb-2" />
      <p className="text-center text-sm py-[8px] text-[#CACACA]">
        © 2019 Planet Blog | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
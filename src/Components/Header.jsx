import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full shadow z-50 bg-white flex items-center justify-between px-11 py-12 lg:px-30 lg:py-12 h-[58.76px]">
        <img src="/Logo.png" alt="logo" />

        <div className="flex gap-4 items-center">

          {/* DESKTOP MENU */}
          <ul className="flex gap-6 max-[901px]:hidden">
            <li><a className="text-[#4D4D4D] hover:text-emerald-700" href="#">Home</a></li>
            <li><a className="text-[#4D4D4D] hover:text-emerald-700" href="#">Features</a></li>
            <li><a className="text-[#4D4D4D] hover:text-emerald-700" href="#">Community</a></li>
            <li><a className="text-[#4D4D4D] hover:text-emerald-700" href="#">Blog</a></li>
            <li><a className="text-[#4D4D4D] hover:text-emerald-700" href="#">Pricing</a></li>
          </ul>

          <button className="bg-[#4CAF4F] px-3 py-2 text-white flex items-center gap-2 max-[901px]:hidden">
            Register Now
            <i className="bx bx-right-arrow-alt"></i>
          </button>

          {/* BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="min-[901px]:hidden"
          >
            <i className="bx bx-menu text-3xl"></i>
          </button>

        </div>
      </div>

      {/* MOBILE MENU (WITH ANIMATION) */}
      <div
        className={`absolute w-full bg-emerald-100 shadow-md min-[901px]:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col gap-3 px-10">

          <ul className="flex flex-col gap-3">
            <li><a className="hover:text-emerald-700" href="#">Home</a></li>
            <li><a className="hover:text-emerald-700" href="#">Features</a></li>
            <li><a className="hover:text-emerald-700" href="#">Community</a></li>
            <li><a className="hover:text-emerald-700" href="#">Blog</a></li>
            <li><a className="hover:text-emerald-700" href="#">Pricing</a></li>
          </ul>

          <hr />

          <button className="bg-[#4CAF4F] px-3 py-2 text-white flex items-center gap-2 self-center cursor-pointer">
            Register Now
            <i className="bx bx-right-arrow-alt"></i>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Header;
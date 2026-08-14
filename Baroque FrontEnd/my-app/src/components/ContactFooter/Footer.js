import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-[#a3a3a3] text-sm py-12 px-6 md:px-16 font-sans tracking-wide select-none">
      <div className="flex flex-col items-start justify-between gap-10 pb-12 mx-auto border-b max-w-7xl md:flex-row border-neutral-800">
        <div className="w-full md:w-auto">
          <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">
            About
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Our Responsibility
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Service We Provide
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Careers
              </a>
            </li>
            <li className="leading-relaxed mt-4 text-[#a3a3a3]">
              Our Shop: First Floor, Dolmen Mall,
              <br />
              Shop No F-06, A Block DHA Phase 6,
              <br />
              Lahore
            </li>
          </ul>

          <div className="flex items-center mt-8 space-x-6">
            <a
              href="#!"
              className="text-lg text-white transition duration-200 hover:opacity-80"
            >
              <FaFacebookF />
            </a>
            <a
              href="#!"
              className="text-lg text-white transition duration-200 hover:opacity-80"
            >
              <FaInstagram />
            </a>
            <a
              href="#!"
              className="text-lg text-white transition duration-200 hover:opacity-80"
            >
              <FaYoutube />
            </a>
            <a
              href="#!"
              className="text-lg text-white transition duration-200 hover:opacity-80"
            >
              <FaTiktok />
            </a>
            <a
              href="#!"
              className="text-lg text-white transition duration-200 hover:opacity-80"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">
            Customer Service
          </h3>
          <ul className="space-y-3">
            <li>
              <Link to = "/contactUs"className="transition duration-200 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Dispatch Timeline
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Exchange Information
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@baroque.pk"
                className="transition duration-200 hover:text-white"
              >
                info@baroque.pk
              </a>
            </li>
            <li>UAN 111-302-302</li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="transition duration-200 hover:text-white"
              >
                +92 325 7001111
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="mb-5 text-xs font-bold tracking-widest text-white uppercase">
            Policies
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-200 hover:text-white">
                Legal
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 pt-6 mx-auto text-xs tracking-wider max-w-7xl md:flex-row text-neutral-400">
        <div className="flex items-center space-x-1 uppercase transition duration-200 cursor-pointer hover:text-white">
          <span>Pakistan</span>
          <span className="text-[10px]">▼</span>
        </div>

        <div className="text-center uppercase md:text-left">
          © 2026 - BAROQUE
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-[#121212] px-2 py-1 rounded flex items-center justify-center border border-neutral-800 h-6 w-10">
            <span className="text-[#EB001B] font-bold text-[10px] -mr-1">
              ●
            </span>
            <span className="text-[#F79E1B] font-bold text-[10px]">●</span>
          </div>
          <div className="bg-[#121212] px-2 py-1 rounded flex items-center justify-center border border-neutral-800 h-6 w-10">
            <span className="text-[#00579F] font-bold italic text-[10px]">
              VISA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

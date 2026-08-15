import React, { useState, useEffect } from "react";
import banner from "../../images/homepageimages/home1.webp";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import FirstGrid from "./FirstGrid";
import SecondBanner from "./SecondBanner";
import TwoGrid from "./TwoGrid";
import ThirdBanner from "./ThirdBanner";
import Footer from "../ContactFooter/Footer";
import { Link } from "react-router-dom";

const MainBanner = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
   
      {!scrolled && <TopBar />}

      <section className="relative">
        <img
          src={banner}
          alt="Banner"
          className="object-cover w-full h-screen"
        />
        <Navbar /> 
       
        <div className="absolute w-full px-4 text-center -translate-x-1/2 bottom-8 sm:bottom-16 left-1/2 sm:w-auto">
          <h1 className="mb-6 text-base font-medium tracking-[0.15em] sm:tracking-[0.3em] text-white uppercase sm:mb-10 sm:text-xl md:text-3xl">
            Own Your New Look
          </h1>

          <div className="flex justify-center gap-4 sm:gap-10 md:gap-40">
            <button className="px-5 py-2.5 sm:px-10 sm:py-3 text-xs sm:text-base tracking-wide sm:tracking-widest text-black uppercase bg-white hover:bg-transparent hover:text-white hover:border whitespace-nowrap">
            <Link to="/premium">Unstitched</Link>  
            </button>

           <Link to="/product"> <button className="px-5 py-2.5 sm:px-10 sm:py-3 text-xs sm:text-base tracking-wide sm:tracking-widest text-white uppercase bg-black hover:bg-transparent hover:border hover:text-black whitespace-nowrap">
              Stitched
            </button></Link>
          </div>
        </div>
      </section>

      <FirstGrid />
      <SecondBanner/>
      <TwoGrid/>
      <ThirdBanner/>
      <Footer/>
    </div>
  );
};

export default MainBanner;
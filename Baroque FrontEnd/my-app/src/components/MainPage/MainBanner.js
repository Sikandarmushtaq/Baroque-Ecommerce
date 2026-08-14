import React, { useState, useEffect } from "react"; // 1. Yahan useState aur useEffect add kiya
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
       
        <div className="absolute text-center -translate-x-1/2 bottom-16 left-1/2">
          <h1 className="mb-10 text-xl font-medium tracking-[0.3em] text-white uppercase md:text-3xl">
            Own Your New Look
          </h1>

          <div className="flex justify-center gap-10 md:gap-40">
            <button className="px-10 py-3 tracking-widest text-black uppercase bg-white hover:bg-transparent hover:text-white hover:border">
            <Link to="/premium">Unstitched</Link>  
            </button>

           <Link to="/product"> <button className="px-10 py-3 tracking-widest text-white uppercase bg-black hover:bg-transparent hover:border hover:text-black">
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

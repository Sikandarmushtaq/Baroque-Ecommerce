import React from 'react'
import secondbanner from "../../images/homepageimages/home4.webp"
import {Link} from "react-router-dom"

const SecondBanner = () => {
  return (
    <div>
       

<div className="px-4 py-10 sm:py-20">
  <h2 className="text-2xl sm:text-4xl md:text-[55px] font-light tracking-[3px] sm:tracking-[6px] md:tracking-[10px] uppercase text-center">
    READY TO WEAR
  </h2>
</div>


<div className="relative w-full h-[380px] sm:h-[500px] md:h-[700px] overflow-hidden">

  <img
    src={secondbanner}
    alt=""
    className="object-cover w-full h-full"
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[3px] sm:tracking-[6px] md:tracking-[10px] text-white uppercase text-center">
      Summer
    </h1>

    <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-white tracking-[3px] sm:tracking-[8px] uppercase">
      Collection 2026
    </p>
  </div>


  <div className="absolute flex gap-[2px] bottom-5 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 sm:bottom-10">
    <button className="bg-black text-white px-5 py-3 sm:px-8 sm:py-4 uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm hover:bg-transparent hover:text-black transition hover:border whitespace-nowrap">
     <Link to="/premium"  >Summer</Link>
    </button>

    <button className="bg-white text-black px-5 py-3 sm:px-8 sm:py-4 uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm hover:bg-transparent hover:text-black transition hover:border whitespace-nowrap">
    <Link to="/product" > Shop All </Link>
    </button>
  </div>

</div>
    </div>
    
  )
}

export default SecondBanner
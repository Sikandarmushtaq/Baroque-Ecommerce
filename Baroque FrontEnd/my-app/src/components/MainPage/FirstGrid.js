import React from 'react'
import home2 from "../../images/homepageimages/home2.webp";
import home3 from "../../images/homepageimages/home3.webp";
import { Link } from 'react-router-dom';


const FirstGrid = () => {
  return (
    <div>
        <div className="px-4 mt-10 sm:px-6 sm:mt-14 lg:px-10">

  <h2 className="mb-8 text-2xl font-medium text-center sm:mb-12 sm:text-4xl">
    Eid Lawn 2026
  </h2>

 
  <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">

   
    <div className="relative overflow-hidden cursor-pointer group">
      <img
        src={home2}
        alt="Eid Lawn"
        className="w-full h-[380px] sm:h-[500px] md:h-[650px] object-cover duration-500 group-hover:scale-105"
      />

     
      <button className="absolute px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 -translate-x-1/2 bg-white bottom-5 sm:bottom-8 left-1/2 hover:bg-black hover:text-white whitespace-nowrap">
      <Link to="/premium">  Unstitched</Link>
      </button>
    </div>

    
    <div className="relative overflow-hidden cursor-pointer group">
      <img
        src={home3}
        alt="Eid Lawn"
        className="w-full h-[380px] sm:h-[500px] md:h-[650px] object-cover duration-500 group-hover:scale-105"
      />

      
      <button className="absolute px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 -translate-x-1/2 bg-white bottom-5 sm:bottom-8 left-1/2 hover:bg-black hover:text-white whitespace-nowrap">
     <Link to="/product">  Stitched</Link>
      </button>
    </div>

  </div>
</div>

    </div>
  )
}

export default FirstGrid
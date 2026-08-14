import React from 'react'
import home5 from "../../images/homepageimages/home5.webp";
import home6 from "../../images/homepageimages/home6.webp";
import {Link} from "react-router-dom"


const TwoGrid = () => {
  return (
    <div>
        <div className="px-6 mt-16 lg:px-10">

  <h2 className="mb-8 text-4xl font-medium text-center">
    Eid Lawn 2026
  </h2>

 
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

   
    <div className="relative overflow-hidden cursor-pointer group">
      <img
        src={home5}
        alt="Eid Lawn"
        className="w-full h-[650px] object-cover duration-500 group-hover:scale-105"
      />

     
      <button className="absolute px-8 py-3 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 -translate-x-1/2 bg-white bottom-8 left-1/2 hover:bg-black hover:text-white">
      <Link to="/premium" > Unstitched </Link>
      </button>
    </div>

    
    <div className="relative overflow-hidden cursor-pointer group">
      <img
        src={home6}
        alt="Eid Lawn"
        className="w-full h-[650px] object-cover duration-500 group-hover:scale-105"
      />

      
      <button className="absolute px-8 py-3 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 -translate-x-1/2 bg-white bottom-8 left-1/2 hover:bg-black hover:text-white">
     <Link to="/product" > Stitched </Link>
      </button>
    </div>

  </div>
</div>

    </div>
  )
}

export default TwoGrid
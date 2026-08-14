import React from 'react'
import secondbanner from "../../images/homepageimages/home4.webp"
import {Link} from "react-router-dom"

const SecondBanner = () => {
  return (
    <div>
       

<div className="py-20">
  <h2 className="text-center text-[55px] font-light tracking-[10px] uppercase">
    READY TO WEAR
  </h2>
</div>


<div className="relative w-full h-[700px] overflow-hidden">

  <img
    src={secondbanner}
    alt=""
    className="object-cover w-full h-full"
  />


  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h1 className="text-white text-6xl font-light tracking-[10px] uppercase">
      Summer
    </h1>

    <p className="mt-8 text-white text-lg tracking-[8px] uppercase">
      Collection 2026
    </p>
  </div>


  <div className="absolute bottom-10 left-10 flex gap-[2px]">
    <button className="bg-black text-white px-8 py-4 uppercase tracking-[4px] text-sm hover:bg-transparent hover:text-black transition hover:border">
     <Link to="/premium"  >Summer</Link>
    </button>

    <button className="bg-white text-black px-8 py-4 uppercase tracking-[4px] text-sm hover:bg-transparent hover:text-black transition hover:border">
    <Link to="/product" > Shop All </Link>
    </button>
  </div>

</div>
    </div>
    
  )
}

export default SecondBanner
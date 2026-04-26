import { useState } from 'react'
import { FaRegCompass } from "react-icons/fa"
import './left.css'
import { FaInstagram } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { CgPlayButtonR } from "react-icons/cg";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

function LeftSide() {
  return (
    <nav className="left-nav">


      <FaInstagram className='instagram-icon' size={25} color="#ffffff" />

      <div className='nav-item'>
        <GoHomeFill size={25} color="#ffffff" />
        <span>Home</span>
      </div>

      <div className='nav-item'>
        <CgPlayButtonR size={25} color="#ffffff" />
        <span>Reels</span>
      </div>

      <div className='nav-item'>
        <PiPaperPlaneTiltFill size={25} color="#ffffff" />
        <span>Direct</span>
      </div>

      <div className='nav-item'>
        <CiSearch size={25} color="#ffffff" />
        <span>Search</span>
      </div>

      <div className='nav-item'>
        <FaRegCompass size={25} color="#ffffff" />
        <span>Explore</span>
      </div>

      <div className='nav-item'>
        <FaRegHeart size={25} color="#ffffff" />
        <span>Notifications</span>
      </div>

      <div className='nav-item'>
        <FaPlus size={25} color="#ffffff" />
        <span>Create</span>
      </div>


      <div className='left-bottom'>

        <div className='nav-item'>
          <CgProfile size={25} color="#ffffff" />
          <span>Profile</span>
        </div>

        <div className='nav-item'>
          <FaBars size={25} color="#ffffff" />
          <span>More</span>
        </div>
      </div>

    </nav>

  )
}

export default LeftSide
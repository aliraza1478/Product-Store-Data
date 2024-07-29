import React from 'react';
import './SidebarTwo.css';
import { FaPhoneAlt, FaArrowDown, FaBookOpen } from "react-icons/fa";
import { SlSupport, SlCalender } from "react-icons/sl";
import { SiHtmlacademy } from "react-icons/si";
import { FaOldRepublic, FaPaintbrush } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { GrCafeteria } from "react-icons/gr";
import { HiLibrary } from "react-icons/hi";

const SidebarTwo = ({ isClose }) => {
  return (
    <div className={`sidebartwo ${isClose ? 'collapsed' : ''}`}>
      <div className='phone'>
        <FaPhoneAlt className='phn-icon' />
        <p className='p'> Extensions Directory </p>
      </div>
      <div className='docment'>
        <FaArrowDown className='doc-icon' />
        <p className='p'> Useful Documents </p>
      </div>
      <div className='support'>
        <SlSupport className='sup-icon' />
        <p className='p'> Support </p>
      </div>
      <div className='digital'>
        <SiHtmlacademy className='dig-acadmy' />
        <p className='p'> Digtal Academy </p>
      </div>
      <div className='Learning'>
        <FaBookOpen className='learn-hub' />
        <p className='p'> learning Hub </p>
      </div>
      <div className='Publication'>
        <FaOldRepublic className='pub-icon' />
        <p className='p'> Publication </p>
      </div>
      <div className='Events'>
        <SlCalender className='even-calend' />
        <p className='p'> Events Calender </p>
      </div>
      <div className='Jobopen'>
        <IoBag className='job-open' />
        <p className='p'> Job Openings </p>
      </div>
      <div className='cafe'>
        <GrCafeteria className='cafe-menu' />
        <p className='p'> Cafeteria Menu </p>
      </div>
      <div className='creative'>
        <FaPaintbrush className='creative-form' />
        <p className='p'> Creative Brief form </p>
      </div>
      <div className='Job'>
        <HiLibrary className='Job-Library' />
        <p className='p'> Job Description Library </p>
      </div>
    </div>
  );
}

export default SidebarTwo;

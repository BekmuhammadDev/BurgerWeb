import React from 'react';
import "./style.css"
import Image from 'next/image';
import Map from "../../assets/icon/MapPin.svg"
import Phone from "../../assets/icon/Phone.svg"
import Email from "../../assets/icon/EnvelopeSimpleOpen.svg"
import Clock from "../../assets/icon/Clock.svg"
const index: React.FC = () => {
  return (
    <footer className='h-[565px] pt-40'>

      <div className="container mx-auto">

        <div className='flex justify-end gap-40'>

          <div>
            <h1 className='text-white text-[35px] font-bold mb-3'>Explore</h1>
            <div className="flex gap-20">
              <ul>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; Home</a>
                </li>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; About us</a>
                </li>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; Contact us</a>
                </li>
              </ul>

              <ul>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; Blog</a>
                </li>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; Team</a>
                </li>
                <li className='text-white text-lg font-normal mb-3'>
                  <a href="#">  &gt; Our Menu</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='mr-40'>
            <h1 className='text-white text-3xl font-bold mb-3'> Contact us</h1>
            <ul>
              <li className='text-white text-lg font-normal mb-3 flex gap-2'>
                <Image src={Map} alt='#' /> <a href="#"> 3rd Floor, Office 45</a>
              </li>
              <li className='text-white text-lg font-normal mb-3 flex gap-2'>
                <Image src={Phone} alt='#' /> <a href="#">00965 - 96659986</a>
              </li>
              <li className='text-white text-lg font-normal mb-3 flex gap-2'>
                <Image src={Email} alt='#' /> <a href="#">M.Alyaqout@4house.Co</a>
              </li>
              <li className='text-white text-lg font-normal mb-3 flex gap-2'>
                <Image src={Clock} alt='#' /> <a href="#">Sun - Sat / 10:00 AM - 8:00 PM</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default index;
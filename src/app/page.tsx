import React from 'react'
import { Button, Container, Input } from '@chakra-ui/react';
import Image from 'next/image';
import HumCircle from "../assets/img/hamburgercircle.png"
import Humburger from "../assets/img/bighamburger.png"
import Circle from "../assets/icon/circle.svg"
import Chefs from "../assets/icon/chefs.svg"
import Foods from "../assets/icon/Foods.svg"
import ForkSP from "../assets/icon/forkspoon.svg"
import Pizza from "../assets/icon/pizza.svg"
import MenuBurger from "../assets/img/MenuBurger.png"
import Card from "../components/ui/card"
import ProfileIcon from "../assets/icon/Profile.svg"
import HumburgerPng from "../assets/img/hambur.png"
import Stars from "../assets/icon/Star.svg"
import THamburgers from "../assets/img/pngwing 1 (1).png"
import IPHone from "../assets/img/iPhone 12 Pro (Wooden Hands) (2).png"
import burgermini from "../assets/img/pngwing 3 (1).png"
import Kitchen from "../assets/img/Kitchen.png"
import CardBurger from "../assets/icon/cardburger.svg"
import Favebook from "../assets/icon/facebook.svg"
import Instagram from "../assets/icon/Instagram.svg"
import Twitter from "../assets/icon/Twitter.svg"
import Youtube from "../assets/icon/Youtube.svg"


const page = () => {
  return (
    <>



      <section>
        <div className="container mx-auto">
          <div className=' flex justify-between mt-20'>

            <div className='w-[704px] mt-5'>
              <h1 className='text-[116px] font-bold'>Tasty Food <span className='text-[116px] font-bold text-[#90E051]'>Collections</span> </h1>
              <p className='text-[22px] font-medium mb-[62px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Varius sed pharetra dictum neque massa congue</p>
              <div className='gap-x-1'>
                <Button colorScheme='green' w='246px' h='88px' rounded={20} fontSize={29}>
                  See All
                </Button>
                <Button colorScheme='white' textColor='green' size='lg' fontSize={29}>
                  Menu
                </Button>
              </div>
            </div>

            <div className='pl-10'>
              <Image src={HumCircle} alt="Hamburger Circle" width={673} height={673} className='absolute right-10  ' />
              <Image src={Circle} alt="Hamburger Circle" width={151} height={151} className='absolute top-52   z-40' />
              <h1 className='text-white text-[34px] font-bold absolute z-50 pl-5 pt-3'>$22.53</h1>
              <Image src={Humburger} alt="Hamburger Circle" width={765} height={616} className='relative  z-30 ' />
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className='mt-40 flex justify-center gap-28 '>

            <div>
              <Image src={Chefs} alt='#' className='ml-5 animate-pulse' /> <br />
              <h2 className='text-base font-semibold'>Professional Chefs</h2>
              <p className='text-center text-[26px] font-medium'>420</p>
            </div>

            <div>
              <Image src={Foods} alt='#' className='ml-4  animate-pulse' /> <br />
              <h2 className='text-base font-semibold'>Items Of Food</h2>
              <p className='text-center text-[26px] font-medium'>320</p>
            </div>

            <div>
              <Image src={ForkSP} alt='#' className='ml-5  animate-pulse' /> <br />
              <h2 className='text-base font-semibold'>Years Of Experienced</h2>
              <p className='text-center text-[26px] font-medium'>30+</p>
            </div>

            <div>
              <Image src={Pizza} alt='#' className='ml-4  animate-pulse' /> <br />
              <h2 className='text-base font-semibold'>Happy Customers</h2>
              <p className='text-center text-[26px] font-medium'>220</p>
            </div>
          </div>
        </div>
      </section>

      <section>

        <div className='mt-40 flex justify-between'>
          <div className='mt-24'>
            <Image src={MenuBurger} alt="" />
          </div>

          <div className=' Cards w-[686px] h-[748px]  rounded-[70px] shadow-lg bg-gradient-to-b from-[#90E051] p-16 mr-20 '>

            <div className='grid grid-cols-2 grid-rows-2 gap-10 '>
              <Card />
              <Card />
              <Card />
              <Card />
              <Button position='relative' w={265} h={63} rounded={17} fontSize={26} textColor='green' className='-top-28 -right-40'>
                sell
              </Button>
            </div>

          </div>

        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className='mt-[250px] flex justify-between'>

            <div className='p-28'>
              <h1 className='text-6xl font-bold'>Customer Review</h1><br />
              <div className='w-[675px]'>

                <p className='text-xl font-normal text-[#828282]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <br /><br />

                <div className='flex gap-5 items-center'>
                  <Image src={ProfileIcon} alt="#" />
                  <div>
                    <h1 className='text-[22px] font-bold text-[#90E051]'>Abdur Rahman</h1>
                    <p className='text-lg font-normal'>Customer</p>
                  </div>

                </div>
              </div>
            </div>


            <div>
              <Image src={HumburgerPng} alt='#' />
              <div className='w-[546px] h-[268px] p-10 border shadow relative -top-40 -left-24 rounded-md bg-white'>

                <div className='flex justify-between mb-3'>
                  <h1 className='text-[25px] font-bold text-[#333333]'>Order now</h1>
                  <h1 className='text-xl font-bold text-[#4F4F4F]'>10.00$</h1>
                </div>
                <div>
                  <Image src={Stars} alt='#' />
                  <p className='text-xl font-normal mt-5 text-[#828282]'>Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section>

        <div className='mt-[200px] mb-[200px]'>
          <div className=' h-[374px] bg-[#90E051] flex'>
            <Image src={THamburgers} alt='#' className='relative -top-40 w-[506px]' />
            <Image src={IPHone} alt='#' className='relative -top-40 -left-10 z-10 w-[344px] h-[694px]' />
            <Image src={IPHone} alt='#' className='relative -top-20 -left-44 z-0 w-[288px] h-[582px]' />
            <h1 className='relative text-white text-[55px] font-bold '>Now With Your Favotite Mobile Applivation In Your Pocket</h1>
            <Image src={burgermini} alt='#' className='relative top-24  w-[380px] h-[388px] ' />



          </div>


        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className='mt-[300px] mb-[200px]'>

            <div className='flex gap-40'>
              <div className='w-[662px] h-[324px] shadow rounded-md  p-10 relative bg-white -right-60 top-96 z-10'>
                <Image src={CardBurger} alt='#' className='absolute -top-24 -left-20' />
                <h1 className='text-[40px] font-bold'>About Us</h1>
                <p className='text-[28px] font-bold text-[#828282]'>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              </div>
              <Image src={Kitchen} alt='#' className='-mr-40' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className='mt-[250px] w-[1320px] h-[242px] rounded-[20px] shadow-lg flex justify-between items-center p-20 ml-32 relative z-20 top-20 bg-white'>

            <div>
              <h1 className='text-[32px] text-[#90E051] font-bold'>Subscribe <br />
                To Our Newsletter</h1>
            </div>

            <div className='flex'>
              <Input type='text' rounded={0} placeholder='Enter your mail' className='w-[400px] h-[60px] p-6' />
              <Button colorScheme='green' rounded={0} className='w-[193px] h-[54px] p-6 '>
                Subscrib now
              </Button>
            </div>

            <div className='flex gap-5'>
              <Image src={Favebook} alt='#' className='box' />
              <Image src={Instagram} alt='#' className='box' />
              <Image src={Twitter} alt='#' className='box' />
              <Image src={Youtube} alt='#' className='box' />

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default page;
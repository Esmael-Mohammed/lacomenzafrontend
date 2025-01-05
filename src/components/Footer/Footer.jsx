import React from 'react'
import { CiInstagram, CiLocationOn, CiMail } from 'react-icons/ci'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6'
import { RxMobile } from 'react-icons/rx'
const footerLinks=[
    {
        id: 1,
        name: "About us",
        link: "/#",
      },
     
      {
        id: 2,
        name: "Product",
        link: "/#products",
      },
      {
        id: 4,
        name: "Services",
        link: "/#about",
      },
      {
        id: 5,
        name: "News",
        link: "/#blogs",
      },
]
const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* logo */}
                <div className=''>
                <a
              href=""
              className="text-primary font-semibold
                    tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Lakomenza
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum dolor, sit consectetur adipisicing .
                sit amet consectetur adipisicing elit </p>
                </div>
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    {/* fooer links  */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {
                                footerLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.link}
                                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:to-gray-400 duration-300'>{data.name}</a>
                                        

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* second links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                footerLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.link}
                                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:to-gray-400 duration-300'>{data.name}</a>
                                        

                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Contact Us</h1>
                        <div>
                            <div className="flex items-center gap-3 ">
                            <CiLocationOn />
                            <p>Dessie,Ethiopia</p>
                            </div>
                            <div className="flex items-center gap-3 ">
                            <CiMail />
                            <p>info@lakomenza.et</p>
                            </div>
                            <div className="flex items-center gap-3">
                            <RxMobile />
                            <p>+251-333-11-52-04</p>
                            </div>
                        </div>

                    </div>
                    {/* social media links */}
                    <div className='flex items-center mt-6 gap-3'>
                        <a href="#">
                        <FaFacebookF className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                        <CiInstagram className='text-3xl hover:text-primary duration-300'/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
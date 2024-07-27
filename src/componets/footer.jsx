import React from 'react'
import './App.css'

export default function Footer() {
  return (
    <>
    <FooterApp/>
    <Footers/>
    </>
   
  )
}


function FooterApp(){
    return(
        <div className='bg-[#F0F0F5] lg:h-[100px] h-[150px] py-2'>
        <div className='flex container h-full mx-auto justify-between lg:flex-row flex-col'>
            <h1 className='text-xl flex items-center font-[900]'>For better experience,<br /> download the Swiggy app now
            </h1>
            <div className='flex justify-end items-center gap-3'>
                <img src="images/play_store.png" className='w-[15rem] h-[4rem]'  alt="" />
                <img src="images/play_store.png" className='w-[15rem] h-[4rem]' alt="" />
            </div>
        </div>
    </div>
    )
}

function Footers(){
    return(
        <div className='bg-[#02060C] px-2 text-white'>

        <footer className="footer container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 py-4">
         
        <div className='my-2'>
        <div className='flex  items-center'>
          <img src="images/swiggy1.png" className='w-[3rem]' alt="" />
          <h1 className='text-2xl'>Swiggy</h1>
        </div>
        <h3 className='text-[2rem] text-[#555]'>© 2024 Bundl Technologies <br /> Pvt. Ltd
        </h3>
        </div>   
        <div className="footer-section my-2">
          <h3>About</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/mission">Our Mission</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section my-2">
          <h3>Content</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section my-2">
          <h3>Company</h3>
          <ul>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section my-2">
          <h3>Delivery</h3>
          <ul>
            <li><a href="/shipping">Shipping Information</a></li>
            <li><a href="/returns">Returns Policy</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </footer>
      </div>
  
    )
}
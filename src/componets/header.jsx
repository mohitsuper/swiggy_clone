import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import  './App.css';


export default function Header() {
  let [Form,setForm] = useState(false);
  let Linkes = [
    {
      icon:<FaSearch />,
      text: "Search",
    },
    {
      icon:<BiSolidOffer />,
      text: "Offers",
      sub: "New",
    },
     {
      icon:<IoHelpBuoyOutline />,
      text: "Help",
    },
    {
      icon:<FaUser/>,
      text:"singin",
    },
     {
      icon:<MdOutlineAddShoppingCart />,
      text: "Cart",
    },
  ]

  return (
    <>
    <div className={`overlay form  fixed h-[100vh] w-[100%] duration-75 z-10
     ${Form?"opacity-1":"opacity-0",
       Form? "visible":"invisible"
     }`} onClick={()=>setForm(false)}>
      <div className={`w-[30%] h-[100%] bg-white absolute  ${Form?"left-[0]":"left-[-20rem]"}`}>
        </div>
    </div>

    <header className='container-2xl shadow-xl flex mx-auto w-full border h-[5rem] w-full fixed my-auto'>
        <div className='container flex items-center gap-5'>
            <div className='w-[50px]'>
                <img src="img/swiggy1.png"  className="w-full h-full" alt="" />
            </div>
            <div className='flex  gap-2 '>
               <span className='other font-bold border-b-red-500  text-orange-600'>other</span> 
               <span className="">jodhpur,Rajsthan,India</span>
               <RxCaretDown className='pointer inline text-[#fc0819] ml-2 text-[1.3rem]' onClick={()=>{setForm(!Form)}}/>
            </div>
            <div className="nav flex gap-1 ml-auto">
             <nav className="flex gap-5">
             {
               Linkes.map(
                (Link,index) =>{
                  return(
                    <li className='text-[1.2rem] font-[400]'>
                      {Link.icon}
                      {Link.text}
                      <sub className='text-orange-400'>{Link.sub}</sub>                 
                    </li>
                  )
                }
               )
             }
             </nav>
            </div>
        </div>
    </header>


    </>
  )
}

import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


import  './App.css';


export default function Header() {
  let [Form,setForm] = useState(false);
  let [open,setOpen] = useState(false)
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
    <div className={`overlay from fixed h-[100vh] w-[100%] duration-75 z-[1000]
     ${Form?"opacity-1":"opacity-0",
       Form? "visible":"invisible"
     }`} onClick={()=>setForm(false)}>
      <div className={`w-[30%] h-[100%] bg-white absolute  ${Form?"left-[0]":"left-[-20rem]"}`}>
        </div>
    </div>

    <header className='container-2xl shadow-xl flex mx-auto w-full border h-[5rem] w-full sticky top-0 my-auto bg-white z-[1000]'>
        <div className='container-sm flex items-center gap-5' >
            <div className='w-[50px]'>
                <img src="images/swiggy1.png"  className="w-full h-full scale-[1.2] hover:scale-[1.4] duration-500" alt="a" />
            </div>
            <div className='flex  gap-2 '>
               <span className='other font-bold border-b-red-500  text-orange-600'>other</span> 
               <span className="">jodhpur,Rajsthan,India</span>
               <RxCaretDown className='pointer inline text-[#fc0819] ml-2 text-[1.3rem]' onClick={()=>{setForm(!Form)}}/>
            </div>
            <div className="nav flex gap-1 ml-auto duration-500" >
              <CiMenuFries onClick={()=>setOpen(!open)} className='lg:hidden block'/>
             <nav className={`flex gap-5 duration-500 block md:hidden ${open?"Navshow":""}`}>
               <IoMdClose onClick={()=>setOpen(!open)} className='lg:hidden block absolute top-[.5rem] right-[2rem]'/>
             {
               Linkes.map(
                (Link,index) =>{
                  return(
                    <li className='text-[1.2rem] font-[400] '>
                      
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

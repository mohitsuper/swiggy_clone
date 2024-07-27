import React, { useState } from 'react'
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import {obj} from "./category";


export default function Hero() {
  let [silder,setSilder] = useState(0);
  console.log(silder)
  let RightSilder =()=>{
    if(silder!==1200){
      setSilder(silder+300)
    }
  }
  let LeftSilder =()=>{
    if(silder!==0){
      setSilder(silder-300)
    }
  }
  return (
    <div className='pt-5 container-2xl'>
       <div className=" container">
        <div className='flex justify-between  items-center'>
        <h1 class="mb-3 text-2xl">What's on your mind?</h1>
        <div className='flex  gap-3'>
            <div className='icon'><RiArrowLeftLine onClick={LeftSilder}/>
            </div>
            <div className='icon'><RiArrowRightLine onClick={RightSilder}/>
            </div>
        </div>
      
        </div> 
        <div className='flex overflow-hidden'>
          {
            obj.map((obj,index)=>
              {
              return(
                <div style={{transform:`translateX(-${silder}%)`}} className='shrink-0 w-[180px] mr-1 duration-500' key={index}>
                  <img src={`images/${obj.image}`} className="" alt="no founds"/>
                </div>
              )
             })
            
          }
        </div>
        <hr class="border h-[2px]"/>

      </div> 


    </div>

  )
}

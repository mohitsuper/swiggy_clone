import React from 'react'
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import {obj} from "./category";


export default function Hero() {
  return (
    <div className='pt-[6rem] container-2xl'>
       <div className=" container">
        <div className='flex justify-between'>
        <h1>What's on your mind?</h1>
        <div className='flex  gap-3 '>
            <div className='icon flex items-center justify-center bg-[#eee] rounded-full '><RiArrowLeftLine />
            </div>
            <div className='icon flex items-center justify-center bg-[#eee] rounded-full '><RiArrowRightLine />
            </div>
        </div>
      
        </div> 
        <div className='flex'>
          {
            obj.map((obj,index)=>{
              return(
                <div class="flex flex-col">
                  <img src={"http:/localhost:5000/images"+obj.image}/>
                  <h3>{obj.path}</h3>
                </div>
              )
             })
            
          }
        </div>
      </div> 
    </div>
  )
}

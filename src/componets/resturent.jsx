import React from 'react'
import { useState } from 'react';
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";
import {RestaurantData} from './restaurantChains'
// import * as React from "react"
import { ProItem } from './mini_compontes/ProItem';


export default function Resturent() {
    let [silder,setSilder] = useState(0);
    console.log(silder)
    let RightSilder =()=>{
      console.log(RestaurantData.length)
      if(silder!==900){
        setSilder(silder+100)
      }
    }
    let LeftSilder =()=>{
      if(silder!==0){
        setSilder(silder-100)
      }
    }  
  return (
    <div>
        <div className=' container mx-auto my-5'>
        <div className='flex justify-between items-center'>
        <h1 class="mb-3 text-2xl">Top restaurant chains in Delhi</h1>
        <div className='flex  gap-3'>
            <div className='icon' onClick={LeftSilder}><RiArrowLeftLine />
            </div>
            <div className='icon' onClick={RightSilder}><RiArrowRightLine />
            </div>
        </div>
        </div>
        <div class="flex gap-3  overflow-hidden ">
          <ProItem silder={silder} width={300}/>
        </div>
        </div>
        <hr class="border h-[2px] container"/>

    </div>    
  )
}







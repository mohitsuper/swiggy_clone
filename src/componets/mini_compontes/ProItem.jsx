import React from 'react'
import { RestaurantData } from '../restaurantChains'

export let ProItem =({silder,width})=>{
     console.log(width)
    return(
      
        RestaurantData.map((v)=>{
          return(
            <div style=
            {{transform:`translateX(-${silder}%)`,
            width:`${width}px`}}  className="shrink-0 duration-500 hover:scale-[0.95] duration-500 overflow-hidden">
           <div className={`flex  h-[200px] w-[${width}]overflow-hidden relative bg-gradient-to-r from-[#1111] to-[#0005] rounded-[15px]`}>
               <img src={`images/${v.image}`} className={`w-full  h-[200px] rounded-[15px] object-cover z-[-10]  duration-500`} alt="" />
              <h1 class="flex z-1 text-[1.5rem] absolute text-white bottom-[3px] left-[3px] ">{v.offer}</h1>
            </div>
            <div className=''>
             <h3 className='text-[1.4rem] text-[#000] font-bold mb-0 mt-1'>{v.title}</h3> 
             <h3 className='text-[1.2rem] text-[#000] p-0 m-0 font-semibold'><SvgComponent/> {v.rating} {v.maxTime}-{v.minTime} min</h3> 
             <p className='m-0 text-[1.2rem]'>{v.name} <br /> {v.place}</p>
            </div>
           </div>
          )
        })
      
    )
  }
  
  function SvgComponent(props) {
    return (
      <svg className='inline'
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        {...props}
      >
        <circle
          cx={10}
          cy={10}
          r={9}
          fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
        />
        <path
          d="M10.082 12.865a.16.16 0 00-.164 0l-2.602 1.532a.5.5 0 01-.739-.551l.699-2.822a.16.16 0 00-.054-.162L4.955 8.99a.5.5 0 01.28-.884l3-.232a.16.16 0 00.135-.096l1.17-2.714a.5.5 0 01.92 0l1.17 2.714a.161.161 0 00.135.096l3 .232a.5.5 0 01.28.884l-2.267 1.872a.16.16 0 00-.054.162l.698 2.822a.5.5 0 01-.739.55l-2.601-1.531z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id="StoreRating20_svg__paint0_linear_32982_71567"
            x1={10}
            y1={1}
            x2={10}
            y2={19}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#21973B" />
            <stop offset={1} stopColor="#128540" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
  
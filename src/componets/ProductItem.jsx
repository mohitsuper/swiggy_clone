import React, { useState } from 'react'
import Heading from './mini_compontes/Heading'
import { ProItem } from './mini_compontes/ProItem'



export default function ProductItem() {
  let filter = [
    {
      text:"Filter"
    },
    {
      text:'Sort by'
    },
    {
      text:"fast delivery"
    }
  ]  
  
  return (
    <div>
        
        <div className='container mx-auto'>
           <div>
            <Heading title={'Restaurants with online food delivery in Delhi'}/>
            <div className={`flex z-[1000] sticky top-0 w-full  h-[78px] items-center bg-white`} >
              <div className='flex h-[40px]  gap-3'>
                {
                  filter.map((v)=>{
                    return(
                      <div className='item shadow inline p-2 rounded-md '><span></span>{v.text}</div>
                    )
                  })
                }
              </div>
              
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1 my-5 gap-3 w-full mx-auto'>
              <ProItem width={273}/>
            </div>
            </div> 

        </div>
    </div>
  )
}





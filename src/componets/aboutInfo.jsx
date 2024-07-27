import React from 'react'
import Heading from './mini_compontes/Heading'

export default function AboutInfo() {
    const indianCities = [
      {
        name: 'Mumbai',
        state: 'Maharashtra',
        population: 12442373,
        areaSqKm: 603.4,
      },
      {
        name: 'Delhi',
        state: 'Delhi',
        population: 16787941,
        areaSqKm: 1484,
      },
      {
        name: 'Bangalore',
        state: 'Karnataka',
        population: 8443675,
        areaSqKm: 709,
      },
      {
        name: 'Kolkata',
        state: 'West Bengal',
        population: 4496694,
        areaSqKm: 185,
      },
      {
        name: 'Chennai',
        state: 'Tamil Nadu',
        population: 7088000,
        areaSqKm: 426,
      },
      {
        name: 'Hyderabad',
        state: 'Telangana',
        population: 6809970,
        areaSqKm: 650,
      },
      {
        name: 'Pune',
        state: 'Maharashtra',
        population: 3115431,
        areaSqKm: 331.26,
      },
      {
        name: 'Ahmedabad',
        state: 'Gujarat',
        population: 5577940,
        areaSqKm: 464,
      },
      {
        name: 'Surat',
        state: 'Gujarat',
        population: 4462002,
        areaSqKm: 326.52,
      },
      {
        name: 'Jaipur',
        state: 'Rajasthan',
        population: 3073350,
        areaSqKm: 484,
      },
      {
        name: 'Lucknow',
        state: 'Uttar Pradesh',
        population: 2815601,
        areaSqKm: 349,
      },
      {
        name: 'Kanpur',
        state: 'Uttar Pradesh',
        population: 2765348,
        areaSqKm: 403,
      },
      {
        name: 'Nagpur',
        state: 'Maharashtra',
        population: 2405665,
        areaSqKm: 217.65,
      },
      {
        name: 'Indore',
        state: 'Madhya Pradesh',
        population: 2468294,
        areaSqKm: 530,
      },
      {
        name: 'Thane',
        state: 'Maharashtra',
        population: 1841488,
        areaSqKm: 147,
      },
      {
        name: 'Bhopal',
        state: 'Madhya Pradesh',
        population: 1883381,
        areaSqKm: 463,
      },
      {
        name: 'Visakhapatnam',
        state: 'Andhra Pradesh',
        population: 2035922,
        areaSqKm: 681.96,
      },
      {
        name: 'Patna',
        state: 'Bihar',
        population: 1684222,
        areaSqKm: 136,
      },
      {
        name: 'Vadodara',
        state: 'Gujarat',
        population: 2065771,
        areaSqKm: 235.52,
      },
      {
        name: 'Ghaziabad',
        state: 'Uttar Pradesh',
        population: 2381452,
        areaSqKm: 210,
      },
      {
        name: 'Ludhiana',
        state: 'Punjab',
        population: 1639129,
        areaSqKm: 159.88,
      },
      {
        name: 'Agra',
        state: 'Uttar Pradesh',
        population: 1585705,
        areaSqKm: 188,
      },
      {
        name: 'Nashik',
        state: 'Maharashtra',
        population: 1486053,
        areaSqKm: 259.13,
      },
      {
        name: 'Faridabad',
        state: 'Haryana',
        population: 1404653,
        areaSqKm: 742.9,
      },
      {
        name: 'Meerut',
        state: 'Uttar Pradesh',
        population: 1305429,
        areaSqKm: 142,
      },
      {
        name: 'Rajkot',
        state: 'Gujarat',
        population: 1285000,
        areaSqKm: 170.00,
      },
      {
        name: 'Kalyan-Dombivli',
        state: 'Maharashtra',
        population: 1244585,
        areaSqKm: 137,
      },
      {
        name: 'Vasai-Virar',
        state: 'Maharashtra',
        population: 1221233,
        areaSqKm: 311,
      },
      {
        name: 'Varanasi',
        state: 'Uttar Pradesh',
        population: 1201815,
        areaSqKm: 112.26,
      },
      {
        name: 'Srinagar',
        state: 'Jammu and Kashmir',
        population: 1269751,
        areaSqKm: 294,
      },
      {
        name: 'Aurangabad',
        state: 'Maharashtra',
        population: 1171330,
        areaSqKm: 138.5,
      },
      {
        name: 'Dhanbad',
        state: 'Jharkhand',
        population: 1162425,
        areaSqKm: 207,
      },
      {
        name: 'Amritsar',
        state: 'Punjab',
        population: 1132383,
        areaSqKm: 5070.57,
      },
      {
        name: 'Navi Mumbai',
        state: 'Maharashtra',
        population: 1119464,
        areaSqKm: 163,
      },
      {
        name: 'Allahabad',
        state: 'Uttar Pradesh',
        population: 1119436,
        areaSqKm: 63.07,
      },
      {
        name: 'Howrah',
        state: 'West Bengal',
        population: 1077075,
        areaSqKm: 63.55,
      },
      {
        name: 'Ranchi',
        state: 'Jharkhand',
        population: 1073440,
        areaSqKm: 175,
      },
      {
        name: 'Gwalior',
        state: 'Madhya Pradesh',
        population: 1053503,
        areaSqKm: 289,
      },
      {
        name: 'Jabalpur',
        state: 'Madhya Pradesh',
        population: 1050678,
        areaSqKm: 207,
      },
      {
        name: 'Coimbatore',
        state: 'Tamil Nadu',
        population: 1064586,
        areaSqKm: 246.75,
      },
      {
        name: 'Vijayawada',
        state: 'Andhra Pradesh',
        population: 1048240,
        areaSqKm: 261.88,
      },
      {
        name: 'Jodhpur',
        state: 'Rajasthan',
        population: 1037228,
        areaSqKm: 228,
      },
      {
        name: 'Madurai',
        state: 'Tamil Nadu',
        population: 1011038,
        areaSqKm: 147.99,
      },
      {
        name: 'Raipur',
        state: 'Chhattisgarh',
        population: 1010087,
        areaSqKm: 226,
      },
      {
        name: 'Kota',
        state: 'Rajasthan',
        population: 1001694,
        areaSqKm: 527,
      },
      {
        name: 'Guwahati',
        state: 'Assam',
        population: 957352,
        areaSqKm: 328,
      },
      {
        name: 'Chandigarh',
        state: 'Chandigarh',
        population: 1026459,
        areaSqKm: 114,
      },
      {
        name: 'Solapur',
        state: 'Maharashtra',
        population: 951558,
        areaSqKm: 148,
      },
      {
        name: 'Hubli-Dharwad',
        state: 'Karnataka',
        population: 943857,
        areaSqKm: 200,
      },
      {
        name: 'Bareilly',
        state: 'Uttar Pradesh',
        population: 898167,
        areaSqKm: 73.18,
      },
      {
        name: 'Moradabad',
        state: 'Uttar Pradesh',
        population: 889810,
        areaSqKm: 79.67,
      },
      {
        name: 'Mysore',
        state: 'Karnataka',
        population: 893062,
        areaSqKm: 155,
      },
      {
        name: 'Gurgaon',
        state: 'Haryana',
        population: 876824,
        areaSqKm: 732,
      },
    ]

    let indiaRe = indianCities.filter((v,i)=>i<10) 
    let indiabe = indianCities.filter((v,i)=>i>10 && i<20) 
    let indiace = indianCities.filter((v,i)=>i>20 && i<24) 


    console.log(indiaRe)
  return (
    <>
    <AboutItem indiaRe={indiaRe} name={"best place your area eat it."}/>
    <AboutItem indiaRe={indiabe} name={"best place other area eat it."}/>
    <AboutItem indiaRe={indiace} name={"best place populer area eat it."}/>
    </>
  )
}


function AboutItem({indiaRe,name}){
    return(
        <div className='container mx-auto my-5'>
        <Heading title={name}/>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
        {
           indiaRe.map((v)=>{
            return(
                
               <div className='item border inline p-2 px-5 rounded-md text-[1.1rem] text-[#666] font-[400] items-center w-full'>best resturent {v.name}</div>
            )
            
           })
        }
        </div>
    </div>
    
    )
}
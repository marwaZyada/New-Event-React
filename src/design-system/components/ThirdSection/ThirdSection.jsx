import React from 'react'
import data from '../data'
import Overview from '../Overview'

export default function ThirdSection() {
   
  return (
    <div className='third-section bg-dark text-light text-center py-5'>
    <div className='container'>
   <div className='row'>
    {data.map(el=>
    (
<Overview icon={el.icon} title={el.title} details={el.details} key={el.id}/>
        )
    )}
   </div>
   </div>
   </div>
  )
}

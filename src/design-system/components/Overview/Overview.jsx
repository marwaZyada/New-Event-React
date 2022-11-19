import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Overview({icon,title,details}) {
  console.log(icon)
  return (
    <div className='col-4'>
     <div className='text-danger fs-3'> <FontAwesomeIcon icon={icon} /></div>
     <h4>{title}</h4>
     <p className='text-white-50'>{details}</p>
    </div>
  )
}

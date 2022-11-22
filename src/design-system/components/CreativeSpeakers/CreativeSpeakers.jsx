import React from 'react';
import './CreativeSpeakers.css'

const CreativeSpeakers = ({img,name,job,alt}) => {
    return (
        <div className='speaker text-center text-capitalize'>
            <img src={img} alt={alt} className="w-100"/>
            <h3>{name}</h3>
            <span>{job}</span>
        </div>
    );
}

export default CreativeSpeakers;

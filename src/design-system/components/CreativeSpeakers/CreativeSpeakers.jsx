import React from 'react';
import './CreativeSpeakers.css'

const CreativeSpeakers = ({img,name,job,alt}) => {
    return (
        <div className=" text-capitalize ">
            <img src={img} alt={alt} className="w-100"/>
            <h3>{name}</h3>
            <span className='text-secondary'>{job}</span>
        </div>
    );
}

export default CreativeSpeakers;

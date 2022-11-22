
import React from 'react';
import CreativeSpeakers from '../CreativeSpeakers';
import SpeakersData from '../CreativeSpeakers/SpeakersData';
const FifthSection = () => {
    return (
        <div className='row py-5'>
          {SpeakersData.map(el=>(
            <CreativeSpeakers key={el.id} img={el.img} name={el.name} job={el.job} alt={el.alt}/>
          ))}  
        </div>
    );
}

export default FifthSection;

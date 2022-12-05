import React from 'react';
import OurSponser from '../OurSponser/OurSponser';
import OurSponserData from '../OurSponser/OurSponserData';

const OurSponserSection = () => {
    return (
        <div className="container">
        <div className='row py-5'>
            {OurSponserData.map(el=>(
                <OurSponser img={el.img} alt={el.alt} key={el.id}/>
            ))}
        </div>
        </div>
    );
}

export default OurSponserSection;

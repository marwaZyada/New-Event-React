import React from 'react';
import OurData from '../OurPrograms/OurData';
import OurProgram from '../OurPrograms/OurProgram';

const OurProgramSection = () => {
    return (
        <div className="container">
        <div className='py-5'>
            {OurData.map(el=>(
                <OurProgram key={el.id} img={el.img} name={el.name} description={el.description} alt={el.alt} time={el.time} roomNumber={el.roomNumber} title={el.title}/>
            ))}
        </div>
        </div>
    );
}

export default OurProgramSection;

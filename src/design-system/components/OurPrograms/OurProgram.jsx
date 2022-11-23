import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const OurProgram = ({img,alt,time,roomNumber,title,name,description}) => {
    return (
        <div className='our-program d-flex justify-content-start align-items-center gap-3 mb-5'>
            <div className="image" style={{width:'10%'}}>
                <img src={img} alt={alt} style={{ borderRadius: '50%',width:"100%"}}/>
            </div>
            <div className="content">
                <div className="icons d-flex gap-3">
                    <div>
                    <FontAwesomeIcon size='xs' icon={faClock} />{time} 
                    </div>
                    <div>
                    <FontAwesomeIcon size='xs' icon={faMapMarker} />{roomNumber}
                    </div>
                </div>
                <h2>{title}</h2>
                <span>{name}</span>
                <p>{description}</p>

            </div>
            
        </div>
    );
}

export default OurProgram;

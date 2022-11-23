import React from 'react';

const OurSponser = ({img,alt}) => {
    return (
        <div className='col-lg-3 col-md-6'>
            <div>
            <img src={img} alt={alt} className='w-100'/>
            </div>
        </div>
    );
}

export default OurSponser;

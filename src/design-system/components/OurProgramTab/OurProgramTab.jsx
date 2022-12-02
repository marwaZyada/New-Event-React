import React from 'react';
import './ourProgramTab.css'

const OurProgramTab = ({firstFunc,secondFunc,thirdFunc,flag1,flag2,flag3}) => {
  
    return (
        <div className='mt-5 fw-bold'>
            <span className={flag1?'active':''} onClick={firstFunc}>first day</span>
            <span className={flag2?'active mx-5  ':'mx-5'}onClick={secondFunc}>second day</span>
            <span className={flag3?'active':''}onClick={thirdFunc}>third day</span>
            <hr/>

        </div>
    );
}

export default OurProgramTab;

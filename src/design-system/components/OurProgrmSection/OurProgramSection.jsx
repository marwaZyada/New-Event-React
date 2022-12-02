import React ,{useState,useEffect} from 'react';
import {first,second,third} from '../OurPrograms/OurData';
import OurProgram from '../OurPrograms/OurProgram';
import OurProgramTab from '../OurProgramTab';



const OurProgramSection = () => {
    const [data,setData]=useState([])
    const [flag1,setFlag1]=useState([false])
    const [flag2,setFlag2]=useState([false])
    const [flag3,setFlag3]=useState([false])
    const firstFunc=()=>{
        setData(first)
        setFlag1(true)
        setFlag2(false)
        setFlag3(false)
    }
    const secondFunc=()=>{
        setData(second)
        setFlag2(true)
        setFlag1(false)
        setFlag3(false)
    }
    const thirdFunc=()=>{
        setData(third)
        setFlag3(true)
        setFlag2(false)
        setFlag1(false)
    }

    useEffect(()=>{
setData(first)
setFlag1(true)
setFlag2(false)
setFlag3(false)
    },[])
    return (
        <div className="container">
            <div className="our-program-title text-capitalize py-5 ">
                <h2 className='fw-bold'>our <span className='text-danger'>program</span></h2>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repellat?</p>
          
            <OurProgramTab firstFunc={firstFunc} secondFunc={secondFunc} thirdFunc={thirdFunc} flag1={flag1}flag2={flag2}flag3={flag3}/>
        <div className=''>
            {data.map(el=>(
                <OurProgram key={el.id} img={el.img} name={el.name} description={el.description} alt={el.alt} time={el.time} roomNumber={el.roomNumber} title={el.title}/>
            ))}
        </div>
        </div>
        </div>
    );
}

export default OurProgramSection;

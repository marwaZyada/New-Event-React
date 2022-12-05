import React ,{useState,useRef}from "react";
import './Question.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import QuestionData from "./QustionData";

const Questions = () => {
  const[flag,setFlag]=useState(null)
  const sign=useRef()
 
 
const showEl=(i)=>{
if(flag===i){
return  setFlag(null)
 
}
setFlag(i)
  console.log(i)
}
 
  
  return (
    <div className="questions py-5 ">
      <div className="head text-center py-5">
        <h2 className="text-capitalize">
          do you have <span className="text-danger"> questions</span>
        </h2>
        <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, laboriosam?</p>
      </div>
      <div className="accordion w-75 m-auto " id="accordionExample">
        {QuestionData.map((el,ind)=>(
        <div className="accordion-item mb-2" key={el.id}>
          <h2 className="accordion-header" id="headingOne" onClick={()=>showEl(ind)}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
             
            >
             <div className="d-flex justify-content-between w-100 text-capitalize">   
            {el.ques}
            {(flag===ind)? <AiOutlineMinus/>:<AiOutlinePlus />}
            
              </div>
            </button>
          </h2>
          {flag===ind?
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
           href={sign} 
          >
            <div className="accordion-body">
             {el.body}
            </div>
          </div>:""}
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default Questions;

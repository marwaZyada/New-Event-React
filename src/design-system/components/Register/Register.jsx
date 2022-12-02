import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
        <div className='container'>
            <div className='row align-items-center  py-5'>
                <div className='col-lg-7 col-sm-12 text-capitalize mb-3'>
                    <h2 className=' text-white'>register  <span className='text-danger text-capitalize'>here</span></h2>
                    <p className='text-white fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, inventore.</p>
                    <p className='text-secondary w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sint perferendis provident aliquam itaque eaque deleniti? Et autem minima a.</p>
                </div>
                <div className='col-lg-5 col-sm-12 m-auto '>
                    <div className='mb-2'>
                    <input type="text" placeholder="first name" className='w-75 text-capitalize'/>
                    </div>
                    <div className='mb-2'>
                    <input type="text" placeholder="last name" className='w-75 text-capitalize'/>
                    </div>
                    <div className='mb-2'>
                    <input type="number" placeholder="phone number" className='w-75 text-capitalize'/>
                    </div>
                    <div className='mb-2'>
                    <input type="email" placeholder="email address" className='w-75 text-capitalize'/>
                    </div>
                    <input type="submit" value="register" className='btn btn-danger  text-capitalize fs-3'/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Register;

import React from 'react';
import './headerStyle.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="content d-flex justify-content-center align-items-center h-100 text-light text-capitalize text-center w-100">
                <div className="info">
                <p className='fs-3'>Lorem ipsum dolor sit amet consectetur </p>
                <h1 className='my-4'>web design conference</h1>
                <div>
                <a href="#" className='btn btn-outline-light px-4 py-2 text-uppercase fs-6'>learn more</a>
                <a href="#"className='btn btn-danger px-4 py-2 text-uppercase'>register now</a>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;

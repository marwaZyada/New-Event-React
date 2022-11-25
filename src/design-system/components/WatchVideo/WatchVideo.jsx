import React from 'react';

const WatchVideo = () => {
    return (
        <div className='container'>
            <div className="row py-5 text-capitalize align-items-center">
                <div className="col-lg-6 col-sm-12">
                    <h2 className='text-uppercase'>watch video</h2>
                    <p className='my-3 fs-6 fw-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, provident! Lorem ipsum dolor sit amet.
                    </p>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, provident! Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className=''>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mR6e5GbyNfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default WatchVideo;

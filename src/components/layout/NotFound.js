import React from 'react';
import Navbar from '../layout/Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar active={''} />
            <div className='about-wrapper row justify-content-center'>
                <div className='col-6 my-auto'>
                    <h1 className='display-1 ms-5'>Page not found</h1>
                </div>
            </div>
        </>
    );
};

export default NotFound;

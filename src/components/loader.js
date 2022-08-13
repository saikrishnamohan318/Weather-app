import React from 'react';

function Loader(){
    return (
        <div className='loader d-flex justify-content-center align-items-center'>
            <div className='spinner-border text-primary' role='status' style={{width:"100px", height:"100px"}}>
                <span className='sr-only'></span>
            </div>
        </div>
    )
}
export default Loader;
import React from 'react'

function RightSection({productName,productDescription,learnMore,imageUrl}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-3 mt-5'>{productName}</h1>
                    <p className='mt-4 fs-5'>{productDescription}</p>
                    <a href={learnMore}>Learn More</a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageUrl} alt='pic'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
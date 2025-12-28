import React from 'react'

function LeftSection({imageUrl,productName, ProductDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageUrl} alt='pic' />
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-3'>{productName}</h1>
                    <p className='mt-4 fs-5'>{ProductDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className='mt-5'>
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt='pic' /></a>
                        <a href={appStore} className=''><img src="media/appstoreBadge.svg" alt='pic'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
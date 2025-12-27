import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2 mt-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basuc to advance trading.</p>
                    <a href='' style={{textDecoration:"none"}}> Versity <i class="fa-solid fa-right-long"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
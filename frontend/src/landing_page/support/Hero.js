import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid' id="support-hero">
            <div className='p-5' id='support-wrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row'>
            <div className='col-6 p-5'>
                <h1 className='fs-3 mb-4'>Browse help topics to create a ticket</h1>
                <input placeholder='Eg. how do I activate F&O, why is my order getting rejected' className='p-3 fs-5 mb-2' style={{borderRadius:"7px", width:"95%"}}/>
                <br></br>
                <a href="" className='p-2'>Track account opening</a>
                <a href=""className='p-2'>Track segment activation</a><br/>
                <a href=""className='p-2'>Intraday margins</a>
                <a href=""className='p-2'>Kite user manual</a>
            </div>
            <div className='col-6 p-5'>
                <h1 className='fs-3 mb-4'>Featured</h1>
                <a href="" className=''>Current Takeovers and Delisting - January 2026</a><br/>
                <a href="">Latest Intraday leverages - MIS & CO</a>
            </div>
            </div>
        </section>
    );
}

export default Hero;
import React from 'react'

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center text-muted'>
                <h1 className='mt-5 fs-2'>The Zerodha Universe</h1>
                <p className='mt-3 fs-5 mb-5' >Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaseLogo.png"/>
                    <p className='text-small text-muted mt-2'>Thematic investment platform <br/> that helps you invest in diversed baskets</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/dittoLogo.png" style={{width:"30%"}} className='mb-2'/>
                    <p className='text-small text-muted mt-2'>Personalised advice on life and<br/> health insurance</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/goldenpiLogo.png" style={{width:"200px"}}/>
                    <p className='text-small text-muted mt-2'>Investment return platform<br/> that offers detailed insights</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/streakLogo.png" style={{width:"30%"}} className='mb-2'/>
                    <p className='text-small text-muted mt-2'>Systematic trading platform<br/> that allows you to create stratergies</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/zerodhaFundhouse.png" style={{width:"50%"}}  className='mb-2'/>
                    <p className='text-small text-muted mt-2'>Our asset management venture<br/> that is creatind simple and transparent index </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/sensibullLogo.svg" style={{width:"200px"}} className='mb-2'/>
                    <p className='text-small text-muted mt-2'>Options trading platform that lets you<br/> create stratergies </p>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-5 mt-2' style={{width:"20%", margin:"0 auto"}}>Signup Now</button> 
            </div>
        </div>
     );
}

export default Universe;
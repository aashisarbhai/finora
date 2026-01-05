import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center mt-5'>People</h1>
            </div>

            <div className='row p-3 text-muted ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-3 text-center'>
                    <img src="/media/aashi.jpeg" alt="photo" style={{borderRadius:"100%",width:"60%"}}/>
                    <h4 className='mt-5'>Aashi Sarbhai</h4>
                    <h6>Student</h6>
                    </div>

                <div className='col-6 p-3'>
                    <p>I built Finora in 2025 as a personal learning project to understand how modern trading and finance platforms are designed and developed. The goal was to overcome the technical and conceptual challenges involved in building scalable, user-friendly financial applications.</p>

                    <p>Through this project, I explored key aspects of the Indian broking ecosystem, including order flows, market data handling, and user experience design, helping me gain practical insight into how real-world trading platforms operate.</p>

                    <p>Outside of development, building Finora became a creative and problem-solving outlet for me.</p>

                    <p>Connect on <a href=''> Homepage</a> /<a href=""> TradingQnA</a> /<a href=''> Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;
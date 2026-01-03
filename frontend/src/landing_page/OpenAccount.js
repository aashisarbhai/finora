import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate("/signup"); // Signup page pe navigate karega
    };

    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Finora account</h1>
                <p className='mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button 
                    onClick={handleSignup} 
                    className='p-2 btn btn-primary fs-5 mb-5 mt-2' 
                    style={{width:"20%", margin:"0 auto"}}
                >
                    Signup Now
                </button> 
            </div>
        </div>
     );
}

export default OpenAccount;

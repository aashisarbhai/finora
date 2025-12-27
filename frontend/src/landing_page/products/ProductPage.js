import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductPage() {
    return ( 
        <>
            <Hero />
            <LeftSection />
            <RightSection />
        </>
     );
}

export default ProductPage;
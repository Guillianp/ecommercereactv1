import React from 'react';
// import Shipping from '../partials/shipping/Shipping';
import NavBar from '../partials/navbar/Navbar';
import Footer from "../partials/footer/Footer";

const withLayout = ContentComponent => props  => (
    <React.Fragment>
        {/* <Shipping /> */}
        <NavBar />
        <ContentComponent 
            {...props}
        />
        <Footer />
    </React.Fragment>
)

export default withLayout;
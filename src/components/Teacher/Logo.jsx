import React from 'react';
import './Styles/Logo.css'
function Logo(){
    return(
        <figure className="logo">
            {/* <img src='/assets/V3.ai' alt="NeuroLingua Logo" /> */}
            <img src={process.env.PUBLIC_URL + '/assets/img/logo.jpg'} alt="NeuroLingua Logo" /> 
        </figure>
    )
}
export default Logo;
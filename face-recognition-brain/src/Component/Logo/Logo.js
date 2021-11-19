import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './artificial-intelligence.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 100 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner" ><img alt='logo' src={brain}></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;

<div>Icons made by </div>
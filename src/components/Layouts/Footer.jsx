import React from 'react'

// css
import '../../assets/css/Footer.css'

// image
import logo from '../../assets/images/kmin-logo.png'



const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="KMIN logo" />
        </footer>
    )
}

export default Footer
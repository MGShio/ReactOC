import React from "react";
import "./footer.sass"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src="/logo_f.svg" alt="Logo" />
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}


export default Footer;
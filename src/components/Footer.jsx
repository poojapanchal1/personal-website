import React from 'react'
import '../styling/footer.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Pooja</h1>
            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer-link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer-link">Contact</a>
                </li>
            </ul>

            <div className="footer-social">
                <a href="https://www.instagram.com/po0japanchal/" className='footer-social-icon' target='_blank'>
                <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com/pooja.panchal.96930/" className='footer-social-icon' target='_blank'>
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/pooja-panchal-5a1932194/" className='footer-social-icon' target='_blank'>
                    <i class="bx bxl-linkedin-square"></i>
                </a>
            </div>

            <span className="footer-copy">
                &#169; 2023 Pooja Panchal. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer

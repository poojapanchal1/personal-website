import React, { useState } from 'react'
import '../styling/header.css'

const Header = () => {
  // change background header
  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
})

// toggle menu
  const[Toggle, showMenu] = useState(false);
  const[activeNav, setActiveNav] = useState('#home');
  const[darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  }

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav-logo'>Pooja</a>

        <div className={Toggle ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className='nav-list grid'>
            <li className='nav-item'>
              <a href='#home' onClick={() => setActiveNav ('#home')} className={activeNav=== '#home' ? 'nav-link active-link' : 'nav-link'}>
                <i class="uil uil-home nav-icon"></i> Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav=== '#about' ? 'nav-link active-link' : 'nav-link'}>
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' onClick={() => setActiveNav ('#projects')} className={activeNav=== '#projects' ? 'nav-link active-link' : 'nav-link'}>
                <i className="uil uil-folder nav-icon"></i> Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav=== '#contact' ? 'nav-link active-link' : 'nav-link'}>
                <i className="uil uil-message nav-icon"></i> Contact
              </a>
            </li>
            <li className='nav-item'>
              <div className='nav-btn'>
                <i onClick={toggleTheme} id='theme-button' className={!darkMode ? "uil uil-moon change-theme" : "uil uil-sun change-theme"}></i>
              </div>
            </li>
          </ul>
          <i className="uil uil-times nav-close" onClick={()=> showMenu(!Toggle)}></i>

        </div>
          <div className='nav-toggle' onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i> 
          </div>
      </nav>
    </header>
  )
}

export default Header

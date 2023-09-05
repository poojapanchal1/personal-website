import React from 'react'
import "../styling/about.css"
import AboutImg from '../assets/mypic-square.jpg'
import Resume from '../assets/Pooja_Panchal_CS_Resume.pdf'
import Info from './Info'

function About() {
  return (
    <section className='about section' id='about'>
        <h2 className='section-title'>About Me</h2>
        <span className='section-subtitle'>My introduction!</span>

        <div className="about-container container grid">
            <img src={AboutImg} alt="" className="about-img" />
            <div className="about-data">
                <Info /> 
                <p className='about-description'>
                  Hello! I'm Pooja, a recent graduate from Rutgers University with a Bachelor of Science in Computer Science. 
                  I'm excited to embark on my journey in the tech industry and bring my passion for coding to life.
                  I graduated from Rutgers University with a strong foundation in computer science, equipping me with the skills 
                  to tackle complex problems and create innovative solutions. My coursework has provided me with expertise in 
                  areas such as algorithms, software development, and data structures.
                </p>
                <p className='about-description'>
                  My goal is to secure a challenging and fulfilling position in the tech industry where I can apply my knowledge and creativity to contribute to exciting projects. I'm particularly interested in back-end and full-stack projects.
                </p>
                
                <p className='about-description'>
                  When I'm not in front of a computer, you can find me at the gym, crocheting stuffed animals, or playing video games!
                </p>
                <p className='about-description'>
                  Thank you for visiting my website. I'm excited about the possibilities that lie ahead, and I'm eager to connect with like-minded professionals and potential employers. If you'd like to chat or discuss potential opportunities, please feel free to contact me!
                </p>

                
                <p className='about-description skills'><strong>Skills:</strong>
                <ul>
                  <li>Languages listed above.</li>
                  <li>Experienced in React, Spotify API, OAuth, Eclipse, Visual Studio, IntelliJ, GitHub, Sublime, VirtualBox, MySQL.</li>
                  <li>Strong problem-solving, collaboration, and analytical skills honed through my academic journey and prior job experience.</li>
                </ul>
                </p>
                <a download="" href={Resume} className="button button--flex">Download Resume
                <i class="uil uil-download-alt"></i>
                </a>

            </div>
        </div>
    </section>
  )
}

export default About

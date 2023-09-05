import React, {useState} from 'react'
import "../styling/portfolio.css"
import tjWelcome from "../assets/TJ_welcome_ss.png"
import tjHome from "../assets/TJ_home_ss.png"
import spotifySS from "../assets/spotify_ss.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import PizzaMakerVid from "../assets/PizzaMakerVid.mp4"
import eBayVid from "../assets/EBayVid.mp4"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Portfolio() {

    const [toggleState, setToggleState] = useState(0);
    const [swiperToggleState, setSwiperToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const swiperToggle = (i) => {
        setSwiperToggleState(i); 
    }

  return (
    <section className='portfolio section' id='projects'>
        <h2 className='section-title'>Projects</h2>
        <span className='section-subtitle'>Some of my recent projects!</span>

        <div className='portfolio-container container swiper-container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            > 
                <SwiperSlide className='portfolio-content'>
                    <img src={tjWelcome} alt="" onClick={()=> swiperToggle(1)} className="portfolio-img"/>

                        <h3 className='info-text'>
                            View more
                        </h3> 
                        <div className={swiperToggleState === 1 ? 'slide-modal active-slide-modal' : 'slide-modal'}>
                            <div className='slide-modal-content'>
                                <i onClick={() => swiperToggle(0)} className='uil uil-times slide-modal-close'></i>    
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper2"
                                    >
                                    <SwiperSlide className='slide-content'>
                                        <img src={tjWelcome} alt="" className="modal-img" />       
                                    </SwiperSlide>
                                    <SwiperSlide className='slide-content'>
                                        <img src={tjHome} alt="" className="modal-img" />       
                                    </SwiperSlide>
                                    <SwiperSlide className='slide-content'>
                                        <img src={spotifySS} alt="" className="modal-img" />       
                                    </SwiperSlide>
                                    </Swiper>
                                
                            </div>
                        </div>
                    
                  
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">Treadmill Jams</h3>
                        <p className="portfolio-description">"Treadmill Jams" is a multifaceted React-based web application 
                        that seamlessly integrates with the Spotify API, leverages OAuth for user authentication, and 
                        incorporates MySQL database integration. Its primary objective is to enhance your workout sessions 
                        by curating personalized playlists based on your music preferences and desired treadmill tempo. 
                        Click on the image to explore more screenshots!
                        </p>
                        <div className="button button--flex portfolio-button" onClick={()=> toggleTab(1)}>
                            More info
                            <i class="uil uil-arrow-right button-icon"></i>
                        </div>
                        <div className={toggleState === 1 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                            <div className="portfolio-modal-content">
                                <i onClick={() => toggleTab(0)} className='uil uil-times portfolio-modal-close'> 
                                </i>
                                <h3 className="portfolio-modal-title"> More Information</h3>
                                <p className="services-modal-description">
                                <p>
                                <strong>Key Features:</strong>
                            </p>
                            <p>
                                <em>Spotify Integration:</em> "Treadmill Jams" seamlessly connects with the Spotify API, 
                                granting access to your music history and curating playlists based on your music preferences.
                            </p>
                            <p>
                                <em>OAuth Authentication:</em> To ensure the highest level of data security and user privacy, 
                                our application implements OAuth authentication for user login.
                            </p>
                            <p>
                                <em>Personalized Playlists:</em> Tailor your workout experience with precision. "Treadmill 
                                Jams" crafts playlists that align perfectly with your treadmill's speed tempo, keeping your 
                                workout rhythm in harmony.
                            </p>
                            <p>
                                <em>MySQL Database:</em> In addition to user account management, we're working on enabling 
                                playlist storage in our MySQL database, allowing users to save their playlists for future 
                                use or export them to Spotify.
                            </p>
                            <p>
                                <em>CSS:</em> We prioritize aesthetics. Our project incorporates CSS to create a visually 
                                captivating and user-friendly interface.
                            </p>
                            <p>
                                <strong>Collaboration and Full-Stack Expertise:</strong>
                            </p>
                            <p>
                                "Treadmill Jams" is a testament to collaboration and full-stack development prowess. I partnered 
                                with a colleague to handle both front-end and back-end development, ensuring a seamless and unified user experience.
                            </p>
                            <p>
                                This project is an ongoing endeavor, with a roadmap of continuous updates and enhancements. 
                                As I delve deeper into the realm of web development, I eagerly anticipate expanding "Treadmill 
                                Jams" with even more exciting features and functionalities.
                            </p>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='portfolio-content'>
                    <video src={eBayVid} alt="" className="portfolio-img" controls />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">Mock Ebay Site</h3>
                        <p className="portfolio-description">The Mock eBay Website stands as a collective endeavor, where 
                        a team of four dedicated individuals, including myself, joined forces to conceive and construct a 
                        dynamic online marketplace. This web application brings together a blend of web development technologies, 
                        including HTML, JavaScript, and MySQL, to create a feature-rich platform that mimics the functionalities 
                        of eBay.</p>
                        <div className="button button--flex portfolio-button" onClick={()=> toggleTab(1)}>
                            More info
                            <i class="uil uil-arrow-right button-icon"></i>
                        </div>
                        <a href="https://github.com/poojapanchal1/mockEbaySite" className='github-icon portfolio-button' target=''>
                            <i class="uil uil-github"></i>
                        </a>
                        <div className={toggleState === 1 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                            <div className="portfolio-modal-content">
                                <i onClick={() => toggleTab(0)} className='uil uil-times portfolio-modal-close'> 
                                </i>
                                <h3 className="portfolio-modal-title"> More Information</h3>
                                <p className="services-modal-description">
                                <p><strong>Key Features:</strong></p>
                                    <p>
                                        <em>Comprehensive User Management:</em> The website seamlessly integrates user 
                                        management capabilities, enabling the creation and deletion of various user roles, 
                                        including administrators and customer representatives. This feature demonstrates 
                                        meticulous database design and robust web functionality.
                                    </p>
                                    <p>
                                        <em>Database Integration with MySQL:</em> The website establishes a secure connection 
                                        with a MySQL database, ensuring the safe storage of user data, auction listings, 
                                        bids, and customer interactions. Data integrity and security remain paramount concerns 
                                        throughout the system.
                                    </p>
                                    <p>
                                        <em>Auction Dynamics:</em> Users are empowered to participate in dynamic auction-related 
                                        activities. They can initiate auctions, place bids on items of interest, and even 
                                        seek answers to their queries from customer representatives. The website's auction 
                                        mechanics exemplify astute coding and thoughtful design.
                                    </p>
                                    <p>
                                        <em>Admin Privileges:</em> Administrators enjoy comprehensive access, including 
                                        insightful sales reports that provide a detailed overview of total earnings. This 
                                        feature, developed under my purview, underscores the ability to retrieve and present 
                                        data in a user-friendly manner.
                                    </p>
                                    <p>
                                        <em>Customer Representative Interaction:</em> The website facilitates seamless 
                                        interaction between users and customer representatives, offering efficient query 
                                        resolution and valuable assistance.
                                    </p>    
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='portfolio-content'>
                    <video src={PizzaMakerVid} alt="" className="portfolio-img" controls />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">Pizza Maker Application</h3>
                        <p className="portfolio-description">The Pizza Maker App is an Android application that demonstrates 
                        advanced Java programming and object-oriented principles. Developed collaboratively, it emulates a 
                        virtual pizzeria with sophisticated features, allowing users to customize pizzas, calculate order 
                        costs, and place orders, with a distinct focus on user data management. View the video to see the 
                        features in action!</p>
                        <div className="button button--flex portfolio-button" onClick={()=> toggleTab(1)}>
                            More info
                            <i class="uil uil-arrow-right button-icon"></i>
                        </div>
                        <a href="https://github.com/poojapanchal1/PizzaMakerApplication" className='github-icon portfolio-button' target=''>
                            <i class="uil uil-github"></i>
                        </a>
                        <div className={toggleState === 1 ? "portfolio-modal active-modal" : "portfolio-modal"}>
                            <div className="portfolio-modal-content">
                                <i onClick={() => toggleTab(0)} className='uil uil-times portfolio-modal-close'> 
                                </i>
                                <h3 className="portfolio-modal-title"> More Information</h3>
                                <p className="services-modal-description">
                                <p><strong>Key Features:</strong></p>
                                    <p>
                                        <em>Java-Powered Customization:</em> The Pizza Maker App harnesses the capabilities 
                                        of Java, offering users a robust pizza customization experience. It exemplifies Java's 
                                        object-oriented programming prowess, enabling a flexible and modular design.
                                    </p>
                                    <p>
                                        <em>Dynamic Cost Computation:</em> Notably, the application provides real-time cost 
                                        calculation as users customize their pizzas. It efficiently computes the total cost,
                                         showcasing precise algorithmic implementation.
                                    </p>
                                    <p>
                                        <em>Order Management:</em> The app simplifies the pizza ordering process, requiring 
                                        users to input their phone number for effective order management.
                                    </p>
                                    <p>
                                        <em>Order History Exploration:</em> Users can effortlessly access their order history, 
                                        gaining insights into their previous orders. This feature underscores principles of data 
                                        retrieval and user experience, enhancing overall usability.
                                    </p>
                                    <p>
                                        The Pizza Maker App stands as a testament to the application of Java programming in 
                                        crafting a sophisticated Android solution. Its focus on data management, algorithmic 
                                        precision, and user experience reflects a dedication to technical excellence.
                                    </p>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        
    </section>
  )
}

export default Portfolio

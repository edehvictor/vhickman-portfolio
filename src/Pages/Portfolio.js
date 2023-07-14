    import React, { useContext } from 'react'
    import DataContext from '../context/DataContext'
    import proj1 from '../Assets/comfySloth.jpg'
    import proj2 from '../Assets/Blog.jpg'
    import proj3 from '../Assets/techtor.jpg'
    import proj4 from '../Assets/candy.jpg'
    import proj5 from '../Assets/weather app.jpg'
    const Portfolio = () => {
        const { link } = useContext(DataContext)
        return (
            <section className={link === 'portfolio' ? 'section sec3 portfolio active container' : 'section sec3 portfolio'} id='portfolio'>
                <div className="main-title">
                    <h2>My <span>Project</span></h2>
                </div>
                <p className="port-text">
                    Here are some of my work that I've done in various programming languages.
                </p>
                <div className="portfolios">
                    <div className="portfolio-item">
                        <div className="image">
                            <img src={proj1} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>Project Source</h3>
                            <div className="icons">
                                <p href="https://github.com/edehvictor/E-commerce-App" className="icon">
                                    <i className="fab fa-github"></i>
                                </p>
                                <p href="#" className="icon">
                                    <p href="https://vicman-store.netlify.app" className="icon">
                                        <i className="fas fa-external-link-alt "></i>
                                    </p>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src={proj2} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>Project Source</h3>
                            <div className="icons">
                                <p href="https://github.com/edehvictor/Vhickman-Blog" className="icon">
                                    <i className="fab fa-github"></i>
                                </p>
                                <p href="https://vhickman-blog.netlify.app/" className="icon">
                                    <i className="fas fa-external-link-alt "></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src={proj3} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>Project Source</h3>
                            <div className="icons">
                                <p href="https://github.com/edehvictor/TECHTOR" className="icon">
                                    <i className="fab fa-github"></i>
                                </p>
                                <p href="https://edehvictor.github.io/TECHTOR" className="icon">
                                    <i className="fas fa-external-link-alt "></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src={proj4} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>Project Source</h3>
                            <div className="icons">
                                <p href="https://github.com/edehvictor/Candy-Crush-Game" className="icon">
                                    <i className="fab fa-github"></i>
                                </p>
                                <p href="#" className="icon">
                                    <p href="https://edehvictor.github.io/Candy-Crush-Game" className="icon">
                                        <i className="fas fa-external-link-alt "></i>
                                    </p>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="image">
                            <img src={proj5} alt="" />
                        </div>
                        <div className="hover-items">
                            <h3>Project Source</h3>
                            <div className="icons">
                                <p href="https://github.com/edehvictor/Weather-App" className="icon">
                                    <i className="fab fa-github"></i>
                                </p>
                                <p href="#" className="icon">
                                    <p href="https://edehvictor.github.io/Weather-App" className="icon">
                                        <i className="fas fa-external-link-alt "></i>
                                    </p>
                                </p>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>
        )
    }

    export default Portfolio
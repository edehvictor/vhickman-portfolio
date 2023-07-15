import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const About = () => {
    const { link } = useContext(DataContext)
    return (
        <section className={link === 'about' ? 'section sec2 about active container' : 'section sec2 about'} id='about'>

            <div className="main-title">
                <h2>About <span>me</span></h2>
            </div>
            <div className="about-container">
                <div className="left-about">
                    <p>
                        I'm Edeh Victor Chinomso, currently based in Nigeria. A web developer with hands on curated modern web technologies to build scalable and robust real world applications that serve users desire. As an It ardent I satiate my mind with lofty books, high-minded videos and podcast that contributes to my professionalism and personal growth. As a chess and table-tennis hobbyist, my logical reasoning and team working acumen becomes refined.
                    </p>
                    <div className="btn-con">
                        <p className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </p>
                    </div>
                </div>
                <div className="about-stats">
                    <h4 className="stat-title">My Skills</h4>
                    <div className="progress-bars">
                        <div className="progress-bar">
                            <p className="prog-title">html5</p>
                            <div className="progress-con">
                                <p className="prog-text">80%</p>
                                <div className="progress">
                                    <span className="html"></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <p className="prog-title">css3</p>
                            <div className="progress-con">
                                <p className="prog-text">95%</p>
                                <div className="progress">
                                    <span className="css"></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <p className="prog-title">javascript</p>
                            <div className="progress-con">
                                <p className="prog-text">75%</p>
                                <div className="progress">
                                    <span className="js"></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <p className="prog-title">ReactJS</p>
                            <div className="progress-con">
                                <p className="prog-text">75%</p>
                                <div className="progress">
                                    <span className="react"></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <p className="prog-title">C#</p>
                            <div className="progress-con">
                                <p className="prog-text">50%</p>
                                <div className="progress">
                                    <span className="node"></span>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <p className="prog-title">Asp.Net</p>
                            <div className="progress-con">
                                <p className="prog-text">50%</p>
                                <div className="progress">
                                    <span className="python"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="stat-title">My Timeline</h4>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2022 - present</p>
                    <h5>Web Developement<span> - Tech-serv Africa</span></h5>
                    <p>
                        Currently on an intensive training on web develoment at Tech-serv Technologies.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2023 - present</p>
                    <h5>Mathematics Degree<span> - University of Nigeria,Nsukka.</span></h5>
                    <p>
                        Currently on a four years degree course(Mathematics) at University of Nigeria, Nsukka.
                    </p>
                </div>

                <div className="timeline-item">
                    <div className="tl-icon">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <p className="tl-duration">2015 - 2021</p>
                    <h5>Senoir Secondary Certificate Examination<span> - St.Leo the Great Secondary School.</span></h5>
                    <p>
                        Obtained my SSCE certificate during this peroid.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About
import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const About = () => {
    const { link } = useContext(DataContext)
    return (
        <section className={link === 'about' ? 'section sec2 about active container' : 'section sec2 about'} id='about'>

            <div class="main-title">
                <h2>About <span>me</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <p>
                        I'm Edeh Victor Chinomso, currently based in Nigeria. A web developer with hands on curated modern web technologies to build scalable and robust real world applications that serve users desire. As an It ardent I satiate my mind with lofty books, high-minded videos and podcast that contributes to my professionalism and personal growth. As a chess and table-tennis hobbyist, my logical reasoning and team working acumen becomes refined.
                    </p>
                    <div class="btn-con">
                        <p class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </p>
                    </div>
                </div>
                <div class="about-stats">
                    <h4 class="stat-title">My Skills</h4>
                    <div class="progress-bars">
                        <div class="progress-bar">
                            <p class="prog-title">html5</p>
                            <div class="progress-con">
                                <p class="prog-text">80%</p>
                                <div class="progress">
                                    <span class="html"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">css3</p>
                            <div class="progress-con">
                                <p class="prog-text">95%</p>
                                <div class="progress">
                                    <span class="css"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">javascript</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="js"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">ReactJS</p>
                            <div class="progress-con">
                                <p class="prog-text">75%</p>
                                <div class="progress">
                                    <span class="react"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">C#</p>
                            <div class="progress-con">
                                <p class="prog-text">50%</p>
                                <div class="progress">
                                    <span class="node"></span>
                                </div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <p class="prog-title">Asp.Net</p>
                            <div class="progress-con">
                                <p class="prog-text">50%</p>
                                <div class="progress">
                                    <span class="python"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2022 - present</p>
                    <h5>Web Developement<span> - Tech-serv Africa</span></h5>
                    <p>
                        Currently on an intensive training on web develoment at Tech-serv Technologies.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2023 - present</p>
                    <h5>Mathematics Degree<span> - University of Nigeria,Nsukka.</span></h5>
                    <p>
                        Currently on a four years degree course(Mathematics) at University of Nigeria, Nsukka.
                    </p>
                </div>

                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2015 - 2021</p>
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
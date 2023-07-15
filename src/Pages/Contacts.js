import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Contacts = () => {
    const { link } = useContext(DataContext)
    return (
        <section className={link === 'contact' ? "section sec5 contact active container" : "section sec5 contact"} id='contact'>
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span></h2>
                </div>
                <div className="contact-content-con">
                <div className="right-contact">
                        <form action="" className="contact-form">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME" />
                                <input type="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div className="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div className="input-control">
                                <textarea name="" id="" cols="14" rows="7" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <p href="#" className="main-btn">
                                    <span className="btn-text">Send Message</span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="left-contact">
                        <div className="contact-icons">
                            <div className="contact-icon">
                               
                                <a href="https://twitter.com/NomsyEdeh" target="blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/edehvictor" target='blank' >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://wa.link/lkpw4d" target="blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="mailto: edehvictor715@gmail.com" target="blank">
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </section>
    )
}

export default Contacts

import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Contacts = () => {
    const { link } = useContext(DataContext)
    return (
        <section className={link === 'contact' ? "section sec5 contact active container" : "section sec5 contact"} id='contact'>
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span></h2>
                </div>
                <div class="contact-content-con">
                <div class="right-contact">
                        <form action="" class="contact-form">
                            <div class="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME" />
                                <input type="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div class="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div class="submit-btn">
                                <p href="#" class="main-btn">
                                    <span class="btn-text">Send Message</span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div class="left-contact">
                        <div class="contact-icons">
                            <div class="contact-icon">
                               
                                <p href="https://twitter.com/NomsyEdeh" target="blank">
                                    <i class="fab fa-twitter"></i>
                                </p>
                                <p href="https://github.com/edehvictor" target='blank' >
                                    <i class="fab fa-github"></i>
                                </p>
                                <p href="https://wa.link/lkpw4d" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                </p>
                                <p href="mailto: edehvictor715@gmail.com" target="blank">
                                    <i class="fa fa-envelope"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </section>
    )
}

export default Contacts

import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import ProfilePix2 from '../Assets/WhatsApp Image 2023-04-05 at 21.50.19_preview_rev_1.png'

const Home = () => {
    const { link } = useContext(DataContext)
    const [LoopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [' Web Developer', 'Web Designer', 'Tech Educator'];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;


    const tick = () => {
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(LoopNum + 1)
            setDelta(500)
        }
    }




    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => {
            clearInterval(ticker)
        }
    }, [text])




    return (
        <header className={link === 'home' ? "section sec1 header active container" : "section sec1 header "} id='home'>
            <div className="header-content">
                <div className="left-header">
                    <div className="h-shape"></div>
                    <div className="image">
                        <img src={ProfilePix2} alt="" />
                    </div>
                </div>
                <div className="right-header">
                    <h1 className="name">
                        Hello, I'm <span>Edeh  Victor.</span>
                        <div>
                            {`A`} {text}
                        </div>
                    </h1>
                    <p>
                        As a Web Developer, I capture clients ideas to functional websites and web apps, that resonates aesthically and interactively with your taste. I aspires to revolutionalize the tech space with my cutting-edge skills. These skill combo makes for my web development prowess.
                    </p>
                    <div className="btn-con">
                        <p className="main-btn">
                            <span className="btn-text">Download CV</span>
                            <span className="btn-icon"><i className="fas fa-download"></i></span>
                        </p>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Home

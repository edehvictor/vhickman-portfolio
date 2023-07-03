import React from 'react'
import { auth, googleProvider } from '../Config/Firebase'
import { signInWithPopup,  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const AlreadyHaveAnAcc = () => {
    const navigate = useNavigate()
    const [emailRef, setEmailRef] = useState('')
    const [passwordRef, setPasswordRef] = useState('')

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            alert('Youre being logged in')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }



    async function signUserwithEmailAndPassword() {
        try {
            alert('Youre being logged in')
            await signInWithEmailAndPassword(auth, emailRef, passwordRef);
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='Login'>
            <div className="login-container">
                <h2>Login</h2>
                <input
                    type="email"
                    required
                    className="email-input"
                    placeholder="Email"
                    value={emailRef}
                    onChange={(e) => setEmailRef(e.target.value)}
                />

                <input
                    type="password"
                    className="password-input"
                    placeholder="Password"
                    required
                    value={passwordRef}
                    onChange={(e) => setPasswordRef(e.target.value)}
                />

                <button className="submit-button" onClick={signUserwithEmailAndPassword}>Login</button>
                <div className="reset-password">
                    <p >Create new account?
                        <Link to='/signup' style={{ color: "red" }}>Sign up</Link>
                    </p>
                </div>
            <button className="google-button" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default AlreadyHaveAnAcc
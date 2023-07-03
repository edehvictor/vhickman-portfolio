import React from 'react'
import { auth, googleProvider } from '../Config/Firebase'
import { signInWithPopup, createUserWithEmailAndPassword,  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    // const emailRef = useRef()
    // const passwordRef = useRef()
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

    async function signInwithEmailAndPassword() {
        try {
           await createUserWithEmailAndPassword(auth, emailRef, passwordRef);
           navigate('/')
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='Login'>
            <div className="login-container">
                <h2>Login</h2>
                <button className="google-button" onClick={signInWithGoogle}>Sign in with Google</button>
                <input
                    type="email"
                    required
                    className="email-input"
                    placeholder="Email"
                    value={emailRef}
                    onChange={(e)=> setEmailRef(e.target.value)}
                />

                <input
                    type="password"
                    className="password-input"
                    placeholder="Password"
                    required
                    value={passwordRef}
                    onChange={(e)=> setPasswordRef(e.target.value)}
                />

                <div className="reset-password">
                    <p >Forgot password?</p>
                </div>
                <button className="submit-button" onClick={signInwithEmailAndPassword}>Login</button>
            </div>
        </div>
    )
}

export default Login
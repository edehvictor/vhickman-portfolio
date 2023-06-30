import React from 'react'
import { auth, googleProvider } from '../Config/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {

        try {
            await signInWithPopup(auth, googleProvider)
            alert('Youre being logged in')
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
                <input type="email" className="email-input" placeholder="Email" />
                <input type="password" className="password-input" placeholder="Password" />
                <div className="reset-password">
                    <p >Forgot password?</p>

                </div>
                <button className="submit-button">Login</button>
            </div>
        </div>
    )
}

export default Login
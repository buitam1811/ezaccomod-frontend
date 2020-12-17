import { useState } from 'react'
import './LogIn.css'
import React from 'react'
import LogInFillIn from './LogInFillIn'
import LogInSuccess from './LogInSuccess'

const LogIn = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
      }

    return (
    <>
        <div className="login-container">
        {!isSubmitted ? <LogInFillIn submitForm={submitForm}/>
            : <LogInSuccess />
        }
        </div>
    </>
    )
}

export default LogIn
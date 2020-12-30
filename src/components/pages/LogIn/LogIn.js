import { useState } from 'react'
import './LogIn.css'
import React from 'react'
import LogInFillIn from './LogInFillIn'
import LogInSuccess from './LogInSuccess'
import { Redirect } from 'react-router-dom'

const LogIn = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
      }

    return (
    <>
        <div className="login-container">
        {!isSubmitted ? <LogInFillIn submitForm={submitForm}/>
            : <Redirect to='/log-in-noti' />
        }
        </div>
    </>
    )
}

export default LogIn
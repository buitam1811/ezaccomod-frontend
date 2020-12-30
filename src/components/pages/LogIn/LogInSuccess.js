import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LogIn.css'
import { Button } from '../../Button'

const LogInSuccess = () => {
    return (
        <div>
            <div className='login-content'>
                <h1 className='login-success'>You have been logged in!</h1>
                <Button buttonStyle='btn--top' path='/'>Return To Home Page</Button>
            </div>
        </div>
    )
}

export default LogInSuccess
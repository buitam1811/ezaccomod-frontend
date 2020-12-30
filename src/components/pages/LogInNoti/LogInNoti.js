import React, { useEffect } from 'react'
import './LogInNoti.css'
import { Button } from '../../Button'

const LogInNoTi = () => {
    useEffect(() => {
        if (localStorage.getItem('logged')) {
            window.location.reload();
            localStorage.removeItem('logged');
        }
    }, [])
    return (
        <div className="loginnoti-container">
            <div>
                <div className='loginnoti-content'>
                    <h1 className='loginnoti-success'>You have been logged in!</h1>
                    <div className="return-home">
                        <Button buttonStyle='btn--top' path='/'>Return To Home Page</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInNoTi
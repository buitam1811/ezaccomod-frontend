import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpRedirect.css'

function SignUpRedirect() {
    return (
        <div className='container'>
            <div className="content">
            <div className="description">
                Signing Up As:
            </div>
            <form className="option-btn">
                <span>
                    <Link to='sign-up/house-owner'>
                        <button className='btn-1' type='submit'>House Owner</button>
                    </Link>
                </span>
                <span>
                    <Link to='sign-up/renter'>
                        <button className='btn-2' type='submit'>Renter</button>
                    </Link>
                </span>
            </form>
            </div>
        </div>
    )
}

export default SignUpRedirect

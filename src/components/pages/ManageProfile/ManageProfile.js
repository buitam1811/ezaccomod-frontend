import React from 'react'
import './ManageProfile.css'
import RenterNavbar from './RenterNavbar'
import { Row,Col } from 'antd'

function ManageProfile() {
    return (
        <>
        {localStorage.getItem('user_role') === 'R' &&
            <RenterNavbar />
        }
        <form className="profile-form">
            <Row className="upload-heading">
                <h1>Your Profile</h1>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>Username</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                    />
                </div>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>First name:</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                        placeholder="Enter your first name"
                    />
                </div>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>Last name:</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                        placeholder="Enter your last name"
                    />
                </div>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>Identification Number:</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                        placeholder="Enter your identification number"
                    />
                </div>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>Phone Number:</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                        placeholder="Enter your phone number"
                    />
                </div>
            </Row>
            <Row className='profiles-inputs'>
                <div className="info-inputs">
                    <label className='info-label'>Email Address:</label>
                    <input type="text" 
                        className="info-input" 
                        name="address_number"
                        placeholder="Enter your email address" />
                </div>
            </Row>
            <Row className='profile-btn-holder'>
                <button className='profile-submit-btn' type='submit'>
                    Submit
                </button>
            </Row>
        </form>
        </>
    )
}

export default ManageProfile

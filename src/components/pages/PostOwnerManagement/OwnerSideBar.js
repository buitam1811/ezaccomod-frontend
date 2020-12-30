import React from 'react'
import { Link } from 'react-router-dom'
import './OwnerSideBar.css'

function OwnerSideBar() {
    return (
        <div className='owner-sidebar-container'>
            <div className="owner-sidebar-heading">
                My Properties
            </div>
            <div className="property-types">
                <ul className="owner-sid-items">
                    <li className="owner-sid-item">
                        <Link to='/owner-pending-posts' className="owner-sid-link">
                                My Pending Posts <i class="fas fa-truck-loading" style={{marginLeft:'10px'}}/>
                        </Link>
                    </li>
                    <li className="owner-sid-item">
                        <Link to='/owner-approved-posts' className="owner-sid-link">
                                My Approved Posts <i class="fas fa-check-square" style={{marginLeft:'10px'}}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OwnerSideBar

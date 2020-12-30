import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSideBar.css'

function AdminSideBar() {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-heading">
                Posts Status
            </div>
            <div className="post-types">
                <ul className="sid-items">
                    <li className="sid-item">
                        <Link to='/pending-posts' className="sid-link">
                                Pending Posts <i class="fas fa-truck-loading" style={{marginLeft:'10px'}}/>
                        </Link>
                    </li>
                    <li className="sid-item">
                        <Link to='/approved-posts' className="sid-link">
                                Approved Posts <i class="fas fa-check-square" style={{marginLeft:'10px'}}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminSideBar

import React from 'react'
import './RenterNavbar.css'
import { Row,Col } from 'antd'
import { Link } from 'react-router-dom'

function RenterNavbar() {
    return (
        <Row >
            <Col className='renter-nav' lg={12} xs={24}>
                <Row className='renter-nav-item'>
                    <Link to='/profile'>
                        My ProFile
                    </Link>
                </Row>
            </Col>
            <Col className='renter-nav' lg={12} xs={24}>
                <Row className='renter-nav-item'> 
                    <Link to='/my-bookmarks'>
                        My Bookmarks
                    </Link>
                </Row>
            </Col>
        </Row>
    )
}

export default RenterNavbar

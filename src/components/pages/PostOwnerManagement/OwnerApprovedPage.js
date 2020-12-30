import { Row, Col } from 'antd';
import Axios from 'axios';
import React, { useState , useEffect } from 'react'
import PostCard from '../Admin/PostCard';
import './Owner.css'
import OwnerSideBar from './OwnerSideBar';

function OwnerApprovedPage() {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        Axios.get('api/get_user_approved_posts_action-api/', {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
            .then(response => {
                if (response) {
                    console.log(response);
                    setProducts(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const content = Products.map((product, idx) => {
        return (
            <Col lg={6} md={8} xs={24}>
                <PostCard path={`/product/${product.room_detail.id}`} product={product} title='Approved'/>
            </Col>
        )
    })

    return (
        <div>
            <Row>
                <Col className='owner-sidebar-side' lg={4} xs={24}>
                    <OwnerSideBar />
                </Col>
                <Col lg={20} xs={24}>
                    <div className='owner-manage-container'>
                        <Row className="owner-heading">
                            <h1 >
                                Manage Approved Posts
                            </h1>
                        </Row>
                        <Row className="owner-remind">
                            <h3>
                                Click the card to preview post
                            </h3>
                        </Row>
                        {Products.length === 0 ?
                            <div style={{ display: 'flex', height: '600px', justifyContent: 'center', alignItems: 'center' }}>
                                <h2>No Post Is Displayed Now... <i class="far fa-times-circle" style={{marginLeft:'10px'}}></i></h2>
                            </div> :
                            <Row gutter={[16, 16]}>
                                {content}
                            </Row>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OwnerApprovedPage

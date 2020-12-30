import { Button, Row, Col } from 'antd';
import Axios from 'axios';
import React, { useState , useEffect } from 'react'
import OwnerSideBar from './OwnerSideBar';
import PostCard from '../Admin/PostCard';
import './Owner.css';

function OwnerPendingPage() {
    const [Products, setProducts] = useState([]);
    const [check, setcheck] = useState(true);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        Axios.get('api/get_user_pending_posts_action-api/', {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
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
                <PostCard path={`/product/${product.room_detail.id}`} product={product} title='Pending'/>
            </Col>
        )
    })

    return (
        <div>
            <Row>
                <Col className='sidebar-side' lg={4} xs={24}>
                    <OwnerSideBar />
                </Col>
                <Col lg={20} xs={24}>
                    <div className='manage-container'>
                        <Row className="heading">
                            <h1 >
                                Manage Pending Posts
                            </h1>
                        </Row>
                        <Row className="remind">
                            <h3>
                                Click the card to preview post
                            </h3>
                        </Row>
                        {Products.length === 0 ?
                            <div style={{ display: 'flex', height: '600px', justifyContent: 'center', alignItems: 'center' }}>
                                <h2>No Post Is Pending... <i class="fas fa-folder-open" style={{marginLeft:'10px'}}></i></h2>
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

export default OwnerPendingPage;

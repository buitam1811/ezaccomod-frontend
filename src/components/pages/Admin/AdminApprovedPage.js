import { Row, Col } from 'antd';
import Axios from 'axios';
import React, { useState , useEffect } from 'react'
import PostCard from './PostCard';
import './Admin.css'
import AdminSideBar from './AdminSideBar';

function AdminApprovedPage() {
    const [Products, setProducts] = useState([]);
    const [check, setcheck] = useState(true);
    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getProducts();
    }, [check])

    const getProducts = () => {
        Axios.get('api/get_approved_posts_in_effect_action-api/', {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
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
        const onClickD = (e) => {
            e.preventDefault();

            const data = {
                verify_status: 'P'
            };
    
            Axios.patch(`/api/generic-api/post-list/${product.id}/`, data, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(
                res => {
                    console.log(res);
                    setcheck(!check)
                }
                ).catch(
                err => {
                    console.log(err);
                })
        }
        return (
            <Col lg={6} md={8} xs={24}>
                <PostCard path={`/product/${product.room_detail.id}`} product={product} onClick={onClickD} title='Remove From Webpage'/>
            </Col>
        )
    })

    return (
        <div>
            <Row>
                <Col className='sidebar-side' lg={4} xs={24}>
                    <AdminSideBar />
                </Col>
                <Col lg={20} xs={24}>
                    <div className='manage-container'>
                        <Row className="heading">
                            <h1 >
                                Manage Approved Posts
                            </h1>
                        </Row>
                        <Row className="remind">
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

export default AdminApprovedPage

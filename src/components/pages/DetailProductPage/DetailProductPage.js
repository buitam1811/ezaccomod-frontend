import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col, Button } from 'antd';
import ProductImage from './component/ProductImage';
import ProductInfo from './component/ProductInfo';
import './DetailProductPage.css';
import Review from './component/Review';
import { Link } from 'react-router-dom';

const accomodation = [
    { key: 'H', value: "House" },
    { key: 'S', value: "Studio" },
    { key: 'A', value: "Apartment" },
    { key: 'M', value: "Miniroom" }
]

const yesno = [
    { key: true, value: "Yes" },
    { key: false, value: "No" }
]

const condition = [
    { key: 'S', value: "Shared" },
    { key: 'P', value: "Private" },
    { key: 'N', value: "None" }
]

function DetailProductPage(props) {
    const productId = props.match.params.productId
    const [Product, setProduct] = useState({})
    const [roomtype, setroomtype] = useState('')
    const [bathroomtype, setbathroomtype] = useState('S')
    const [kitchentype, setkitchentype] = useState('S')
    const [bathheater, setbathheater] = useState(null)
    const [aircondition, setaircondition] = useState(null)
    const [balcony, setbalcony] = useState(null)
    const [is_available, setis_available] = useState(null)
    const [like, setlike] = useState('')
    const [bookmark, setbookmark] = useState('')

    useEffect(() => {
        Axios.get(`api/generic-api/post-list/${productId}/`)
        .then(response => {
            console.log(response);
            setProduct(response.data.room_detail);
            handleroom(response.data.room_detail.room_type)
            handlebathheater(response.data.room_detail.bathroom_heater)
            handleaircondition(response.data.room_detail.air_conditional)
            handleis_available(response.data.room_detail.is_available)
            handlebalcony(response.data.room_detail.balcony)
            handlebathroomtype(response.data.room_detail.bathroom_type)
            handlekitchentype(response.data.room_detail.kitchen_type)
            setlike(response.data.total_likes_in_this_post)
            setbookmark(response.data.total_bookmarks_in_this_post)
        }
        )
    }, [])

    const handleLike = (e) => {
        e.preventDefault();
        Axios.post(`api/create_like_post_action-api/${productId}/`, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
        .then(response => {
            console.log(response);
        })
        Axios.get(`api/generic-api/post-list/${productId}/`)
        .then(response => {
            console.log(response);
            setlike(response.data.total_likes_in_this_post)
        }
        )
    }

    const handleBookmark = (e) => {
        e.preventDefault();
        Axios.post(`api/create_bookmark_post_action-api/${productId}/`, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
        .then(response => {
            console.log(response);
        })
        Axios.get(`api/generic-api/post-list/${productId}/`)
        .then(response => {
            console.log(response);
            setbookmark(response.data.total_bookmarks_in_this_post)
        }
        )
    }

    const handleroom = (room_type) => accomodation.map(item => (item.key===room_type) && setroomtype(item.value))

    const handlebathheater = (bathheater) => yesno.map(item => (item.key===bathheater) && setbathheater(item.value))

    const handleaircondition = (aircondition) => yesno.map(item => (item.key===aircondition) && setaircondition(item.value))

    const handlebalcony = (balcony) => yesno.map(item => (item.key===balcony) && setbalcony(item.value))

    const handleis_available = (is_available) => yesno.map(item => (item.key===is_available) && setis_available(item.value))

    const handlebathroomtype = (bathroomtype) => condition.map(item => (item.key===bathroomtype)&&setbathroomtype(item.value))

    const handlekitchentype = (kitchentype) => condition.map(item => (item.key===kitchentype)&&setkitchentype(item.value))

    return (
        <div className="postPage">
            <br />
            <Row gutter={[16, 16]} >
                <Col className='left' lg={14} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col className='right' lg={10} xs={24}>
                    <div className='product-description'>
                        <Row>
                            <span className='roomtype-heading'>
                                {roomtype}
                            </span>
                        </Row>
                        <br/>
                        <Row>
                            <h1 className='post-heading'>{Product.room_description}</h1>
                        </Row>
                    </div>
                    <Row>
                        <div class="product-price">
                            <span>Price per month: {Product.price_renter_to_pay}$</span>
                        </div>
                    </Row>
                    <br/>
                    <Row>
                        <div class="product-price">
                            <span>Available to rent: {is_available}</span>
                        </div>
                    </Row>
                    <br/>
                    <br/>
                    {(localStorage.getItem('user_role')!=='S' && localStorage.getItem('user_role')!=='O') ?
                    <>
                    <Row gutter={[16, 16]} align='middle'>
                        <button className="btn-like" onClick={handleLike}>Like <i class="far fa-heart" style={{marginLeft:'10px'}}/></button>
                        <div className='post-count'>{like} people liked this location.</div>
                    </Row>
                    <br/>
                    <Row gutter={[16, 16]} align='middle'>
                    	<button className='btn-bookmark' onClick={handleBookmark}>Bookmark <i class="far fa-bookmark" style={{marginLeft:'10px'}}/></button>
                        <div className='post-count'>{bookmark} people put this location to their favorite list.</div>
                    </Row>
                    <br/>
                    </> : 
                    <>
                    <Row gutter={[16, 16]} align='middle'>
                        <Link to='/log-in'>
                    	    <button className='btn-suggestlog-in'>Log in for more information <i class="fas fa-users" style={{marginLeft:'10px'}}/></button>
                        </Link>
                    </Row>
                    </>
                    }
                </Col>
            </Row>
            {localStorage.getItem('user_role')!=='S' &&
            <>
            <Row gutter={[16, 16]} >
                <Col lg={17} md={24} xs={24}>
                    <ProductInfo detail={Product} roomtype={roomtype} bathtype={bathroomtype} bathheater={bathheater} kitchen={kitchentype} air={aircondition} balcony={balcony}/>
                </Col>
                {localStorage.getItem('user_role')!=='O' && 
                <Col lg={7} md={24} xs={24}>
                <br/>
                    <Review detail={Product} />
                </Col>
                }
            </Row>
            </>
            }
        </div>
    )
}

export default DetailProductPage

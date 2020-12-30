import { Button } from 'antd'
import Axios from 'axios'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Review.css'

const starRating = [
    { key: 'VB', value: "Very Bad" },
    { key: 'B', value: "Bad" },
    { key: 'M', value: "Medium" },
    { key: 'G', value: "Good" },
    { key: 'VG', value: "Very Good" }
]

const Review = (props) => {
    const [rating, setrating] = useState(null)
    const [ratingg, setratingg] = useState(null)
    const [hover, sethover] = useState(null)
    const [review, setreview] = useState('')
    const [ratetext, setratetext] = useState('')

    const handleChange = (e) => {
        setreview(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            post_id: props.detail.id, 
            review_content: review,
            rating: ratingg,
        };
        Axios.post(`/api/create_review_post_action-api/${props.detail.id}/`, data, {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(
            res => {
                console.log(res);
            }
            ).catch(
            err => {
                console.log(err);
            })
    }

    return (
        <form className='review-section' onSubmit={handleSubmit} noValidate>
            <div className='rate-content-heading'>Rate this location: </div>
            <div className='fivestar'>
                {starRating.map((star,i) => {
                    const ratingValue = i+1;
                    return (
                        <label>
                            <input className='rate' type='radio' name='rating' value={star.key} onClick={() => {setrating(ratingValue);setratingg(star.key)}} />
                            <FaStar className='star' color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                                    onMouseEnter={()=> (sethover(ratingValue), setratetext(star.value))} onMouseLeave={() => (sethover(null), setratetext(null))} size={35}/>
                        </label>
                    );
                })}
            </div>
            <div className='rate-content'>{ratetext}</div>
            <br/>
            <div className='review-content'>
                <label className='review-label'>Feedback:</label>
                <input type="text" 
                    className="review-input" 
                    name="review"
                    placeholder="Your feedback"
                    value={review}
                    onChange={handleChange}
                />
                <Button className='review-btn' type='submit'>Send</Button>
            </div>
        </form>
    )
}

export default Review

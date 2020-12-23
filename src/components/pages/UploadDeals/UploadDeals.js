import React, { useState } from 'react';
import ImagesUpload from './ImagesUpload';
import './UploadDeals.css';
import UploadDealsFillIn from './UploadDealsFillIn';
import UploadDealsSuccess from './UploadDealsSuccess';
import validate from './validateInfoUp';
import useUp from './useUp';

const UploadDeals = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const [room, setroom] = useState(1)

  const handleRoom1 = (roomid) => {
    setroom(roomid)
  }

  return (
    <div className="uploadpage-container">
    <div className="upload-content">
        <div className="upload-heading">
            <h1>Upload A Product</h1>
        </div>
        {!isSubmitted ? (
          <UploadDealsFillIn submitForm={submitForm} handleRoom={handleRoom1}/>
        ) : (
          <UploadDealsSuccess/>
        )}
    </div>
    </div>
  );
};

export default UploadDeals;

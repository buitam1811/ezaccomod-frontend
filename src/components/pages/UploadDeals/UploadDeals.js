import React, { useState } from 'react';
import ImagesUpload from './ImagesUpload';
import './UploadDeals.css';
import UploadDealsSuccess from './UploadDealsSuccess';
import Upload from './Upload'

const UploadDeals = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isImagesSubmitted, setIsImagesSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  function submitImage() {
    setIsImagesSubmitted(true);
  }

  const [room, setroom] = useState('')

  function handleRoom(roomid) {
    setroom(roomid);
  }

  return (
    <div className="uploadpage-container">
      {!isSubmitted ? (
        <Upload submitForm={submitForm} handleRoom={handleRoom}/>
      ) : (!isImagesSubmitted ?
        <ImagesUpload roomID={room} submit={submitImage}/> : <UploadDealsSuccess/>
      )}
    </div>
  );
};

export default UploadDeals;

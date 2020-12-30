import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import './FileUpload.css'
import Axios from 'axios';
import { Row,Col } from 'antd'


function FileUpload(props) {

    const [Images, setImages] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("picture", files[0])
        Axios.post(`api/create_room_picture_action-api/${props.roomId}/`, formData, config)
            .then(response => {
                if (response.data) {
                    console.log(response);
                    setImages([...Images, response.data])
                    props.refreshFunction([...Images, response.data])

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div className='image-insertion'>
            <Row gutter={[16,16]}>
                <Col lg={12} xs={24}>
                    <Row className='drop-box'>
                        <Dropzone
                            onDrop={onDrop}
                            multiple={false}
                            maxSize={800000000}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div className='drop-image' {...getRootProps()}>
                                    {console.log('getRootProps', { ...getRootProps() })}
                                    {console.log('getInputProps', { ...getInputProps() })}
                                    <input {...getInputProps()} />
                                </div>
                            )}
                        </Dropzone>
                    </Row>
                    <Row className='instruction'>
                        <h2>Click the zone to insert images</h2>
                    </Row>
                </Col>
                <Col lg={12} xs={24}>
                    <Row className='sample-box' >
                        {Images.map((image, index) => (
                            <div onClick={() => onDelete(image)}>
                                <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`${image.picture}`} alt={`roomImg-${index}`} />
                            </div>
                        ))}
                    </Row>
                    <Row className='instruction'>
                        <h2>Images Chosen</h2>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FileUpload

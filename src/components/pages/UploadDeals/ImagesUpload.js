import React, { useState } from 'react'
import FileUpload from '../../Utils/FileUpload';

function ImagesUpload(props) {
    const [Images, setImages] = useState([]);

    const updateFiles = (newImages) => {
        setImages(newImages)
    }
    return (
        <div>
            
            <FileUpload roomId={props.roomID} refreshFunction={updateFiles} />
        </div>
    )
}

export default ImagesUpload

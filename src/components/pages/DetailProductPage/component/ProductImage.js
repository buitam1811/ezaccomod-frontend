import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.pictures_included && props.detail.pictures_included.length > 0) {
            let images = [];

            props.detail.pictures_included && props.detail.pictures_included.map(item => {
                images.push({
                    original: `${item.picture}`,
                    thumbnail: `${item.picture}`
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage

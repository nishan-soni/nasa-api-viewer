import { useState } from "react"
import './Feed.css'
import getImages from '../../utils/getImages'
import Images from "../ImageSection/ImageSection"
import LoadingIcon from '../../images/loadingicon.gif'

const Feed = () => {

    const [images, setImages] = useState([])
    const [end] = useState(new Date())
    const [start] = useState(new Date())
    const [loadingImages, setLoadingImages] = useState(false)

    return (
        <div className="feed-container">
            <div className="feed-title">
                <h1>Shopify Technical Project</h1>
                <h2>Featuring NASA's Astronomy Picture of the Day</h2>
            </div>
            <Images imageArray = {images} setImages = {setImages}/>
            <button className="load-images-btn" onClick={() => {
                start.setDate(end.getDate() - 5)
                console.log(start, end)
                getImages(images, setImages, start, end, setLoadingImages)
                end.setDate(end.getDate() - 6)
            }}>
                Load Images
            </button>
            {loadingImages === true ? <img className="loading-icon" src = {LoadingIcon} alt = 'loading'/> : null}
        </div>
    )
}

export default Feed

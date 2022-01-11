import './ImageSection.css'
import ImageCard from '../ImageCard/ImageCard'
const ImageSection = (props) => {
    const {imageArray, setImages} = props
    return (
        <div className="images-container">
            {imageArray.map(image => {
                return (
                    <ImageCard key = {Math.random()} id = {Math.random()} url = {image.url} title = {image.title} date = {image.date} description = {image.explanation} imageArray = {imageArray} liked = {image.liked} setImages = {setImages}/>
                )
            })}
        </div>
    )
}

export default ImageSection
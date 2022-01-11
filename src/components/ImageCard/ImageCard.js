import './ImageCard.css'

const ImageCard = (props) => {
    const {title, url, date, description, liked, imageArray, setImages, id} = props
    const updateLiked = () => { // Upadating the liked element for the picture
        let newImageArray = [...imageArray]
        const index = newImageArray.findIndex(element => element.url === url)
        console.log(index)
        newImageArray[index].liked = !liked
        setImages(newImageArray)
    }
    return (
        <div className='imagecard-container'>
            <img className='imagecard-img' src = {url} alt = {title}/>
            <div className='imagecard-info'>
                <div className='imagecard-title'>
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    <p>{description}</p>
                </div>
                <button style = {liked === true ? {backgroundColor : 'lightgreen', color: 'green', border: '1px solid green'} : null} className='like-button' onClick={() => {
                    updateLiked(id)
                }}>
                    {liked === false ? "Like" : "Liked"}
                </button>
            </div>
        </div>
    )
}

export default ImageCard
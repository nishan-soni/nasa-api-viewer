import axios from "axios"
const getImages = (images, setImages, start, end, setLoadingImages) => {
    setLoadingImages(true)
    axios.get('https://api.nasa.gov/planetary/apod?', {
        params : {
            api_key: '1yGgqxQpRdoqGnnsFtDd7byCPatb3pCWN2QD4l40',
            start_date: start.toISOString().split('T')[0],
            end_date : end.toISOString().split('T')[0],
        }
    }).then((response) => {
        let newImages = [...images]
        let response_data = response.data
        response_data.forEach(element => {
            element.liked = false //adds the "liked" element to each image object
        });
        newImages.push(...response_data.reverse()) //Reverse the array so the most recent images are displayed first
        setImages(newImages)
        setLoadingImages(false)
    }).catch((err)=>{
        console.log(err)
    })
}

export default getImages
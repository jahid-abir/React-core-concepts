import { useEffect, useState } from "react"
import Photo from "./Photo"

export default function Photos(){
    const [photos,setPhotos] =useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPhotos(data))
    },[])
    return (
        <div>
            <h3>photos :{photos.length} </h3>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
        </div>
    )
}
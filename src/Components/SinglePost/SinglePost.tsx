import React, { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { useParams } from "react-router"

import axios from "axios"

import './SinglePost.css'

const SinglePost = () => {

    const { id } = useParams()

    const [initialPost, setInitialPost] = useState<{id: number, title: string, url: string}>()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50', {
            params: {
                id
            }
        })

        .then(response => {
            setInitialPost(response.data[0])
        })

    }, [id])


    return (
        <div className="SinglePost">
            {initialPost && <h2>{initialPost.id}</h2>}
            <button onClick={() => navigate(-1)}>back</button>
        </div>
    )
}

export default SinglePost
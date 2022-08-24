import { memo } from "react"

import { Link } from 'react-router-dom'

import './Post.css'

const Post = ({ title, url, id }: {title: string, url: string, id: number}) => {

    return (
        <div className="Post">
            <img src={url} alt=""/>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>more</Link>
        </div>
    )
}

export default memo(Post)
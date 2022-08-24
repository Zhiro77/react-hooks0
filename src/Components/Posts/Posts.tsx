import { useContext } from "react"
import { AppContext } from '../App/App'

import Post from '../Post/Post'

const Posts = () => {

    const { posts } = useContext(AppContext)

    return (
        <div className="Posts">
            {
                posts.map((post: { id: number; title: string; url: string }) => <Post key={post.id} title={post.title} url={post.url} id={post.id}/>)
            }
        </div>
    )
}

export default Posts
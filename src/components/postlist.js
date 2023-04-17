import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import './css/Photolist.css'

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="photolist">
            <h1 className="title-photolist">Galerie Photos</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="photo-card">
                                {post.thumbnail && <img className="thumbnail" width={400} src={post.thumbnail} alt=""/> }
                             <div className="img-container">
                                <h2 className="photo-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList
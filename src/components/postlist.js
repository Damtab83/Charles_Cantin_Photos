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
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={120} src={post.thumbnail} alt=""/> }
                                <h2 className="photo-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList
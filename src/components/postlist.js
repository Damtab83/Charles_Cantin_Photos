import React from "react"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import './css/Photolist.css'
import Category from "./Category"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="photolist">
            <h1 className="title-photolist">Galerie Photos</h1>
            <Category />
            
            <div className="gallery">
                {postlist.length && 
                    postlist.map((post, i) => {
                        return (
                            <div key={i} className="photo-gallery">
                                    {post.thumbnail && <img style={{width: '100%'}} src={post.thumbnail} alt={post.categories}/> }
                            
                                <Markdown source={excerptList[i]} escapeHtml={false} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostList
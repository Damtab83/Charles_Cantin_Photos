import React from "react"
import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import servicelist from "../posts.json"
import './css/Photolist.css'

const ServiceList = () => {
    const excerptList = servicelist.map(service => {
        return service.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="photolist">
            <h1 className="title-photolist">Tarifs et Service</h1>
            {servicelist.length && 
                servicelist.map((service, i) => {
                    return (
                        <div key={i} className="photo-card">
                             <div className="img-container">
                                {service.thumbnail && <img className="thumbnail" width={80} src={service.thumbnail} alt=""/> }
                                <h2 className="photo-title">{service.categories}</h2>
                                <h4 className="photo-title">{service.price}</h4>
                            </div>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link className="links" to={`/post/${service.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceList
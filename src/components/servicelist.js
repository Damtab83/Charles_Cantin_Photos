import React from "react"
import Markdown from "react-markdown"
import servicelist from "../posts.json"
import './css/Photolist.css'

const ServiceList = () => {
    const excerptList = servicelist.map(service => {
        return service.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="photolist">
            <h1 className="title-servicelist">Tarifs et Service</h1>
            {servicelist.length && 
                servicelist.map((service, i) => {
                    return (
                        <div key={i} className="photo-card-service">
                             <div className="img-container-service">
                                {service.thumbnail && <img className="thumbnail" width={80} src={service.thumbnail} alt={service.categories}/> }
                                <h2>{service.categories}</h2>
                                <h4>{service.price} €</h4>
                                <p>{service.content}</p>
                            </div>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceList

import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCardComponent(props) {
    return (
        <div className="book-card col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 mt-2 px-2" key={props.slug}>
            <div className="card card-book shadow-sm overflow-hidden h-100 m-0">
                <Link className="h-100" to={`/book/${props.slug}`}>
                    <img height="100%" onLoad={(e)=> e.target.src = props.image} src="/book-placeholder.png" width="100%" alt={props.title} title={props.title} />
                </Link>
            </div>
        </div>
    )
}

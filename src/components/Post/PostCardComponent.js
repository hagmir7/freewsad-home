import React from 'react';
import { Link } from 'react-router-dom';


export default function PostCard(props) {

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3" ref={props.last} key={props.slug}>
            <Link to={`/p/${props.slug}`}>
                <div className="img-content">
                    <img className="card-img-top m-0 p-0 border rounded" width="100%" height="100%" onLoad={(e)=> e.target.src = props.image} src='/loading.png' alt={props.title} title={props.title} />
                </div>
            </Link>
            <div className="card-body m-0 p-0 mt-2">
                <Link to={`/p/${props.slug}`}>
                    <div className="card-title h5 my-0 py-0 text-black">{props.title}</div>
                </Link>
                <p className="card-text">
                    <small className="text-muted">
                        <span className="mr-2 h6">Nov 25, 2022 - 19:23</span>
                    </small>
                </p>
            </div>
        </div>
    )

}

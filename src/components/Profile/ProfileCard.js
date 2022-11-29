import React from 'react'

export default function ProfileCard(props) {
    return (
        <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                    <h4>{props.firstName} {props.lastName}</h4>
                    <p className="text-secondary mb-1">Follwers (145)</p>
                    <p className="text-muted font-size-sm">{props.bio}</p>
                    <button className="btn btn-primary rounded-pill">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react';

export default function ProfileCardAbout(props) {
  return (
    <div className="card-body p-0">

      <div className="row mt-2 ms-2">
        <div className="col-sm-3">
          <h6 className="mb-0">Username</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {props.username}
        </div>
      </div>
      <hr />
      <div className="row mt-3 ms-2">
        <div className="col-sm-3">
          <h6 className="mb-0">Full Name</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {props.firstName} {props.lastName}
        </div>
      </div>
      <hr />
      <div className="row mt-2 ms-2">
        <div className="col-sm-3">
          <h6 className="mb-0">Email</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {props.email}
        </div>
      </div>
      <hr />
      <div className="row mt-2 ms-2">
        <div className="col-sm-3">
          <h6 className="mb-0">Phone</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {props.phone}
        </div>
      </div>
      <hr />

      <div className="row mt-2 ms-2">
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {props.country}, {props.city}
        </div>
      </div>
    </div>
  )
}

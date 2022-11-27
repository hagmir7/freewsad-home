import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCardAbout() {
  return (
    <div className="card-body p-0">
        <div className="row mt-3 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Kenneth Valdez
          </div>
        </div>
        <hr />
        <div className="row mt-2 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            fip@jukmuh.al
          </div>
        </div>
        <hr />
        <div className="row mt-2 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            (239) 816-9029
          </div>
        </div>
        <hr />
        <div className="row mt-2 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Birth date</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            (320) 380-4539
          </div>
        </div>
        <hr />
        <div className="row mt-2 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Address</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Bay Area, San Francisco, CA
          </div>
        </div>
      </div>
  )
}

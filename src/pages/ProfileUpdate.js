import React from 'react';


export default function ProfileUpdate() {
  return (
    <div className="card-body p-0">
        <div className="row mt-3 m-0 px-3">
          <div className="col-sm-3 m-0 p-0">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className='input-group mt-2 p-0 w-100'>
          <input type="text" name="first_name" id="first_name" className='form-control-sm form-control' placeholder='First name..' />
          <input type="text" name="last_name" id="last_name" className='form-control-sm form-control' placeholder='Last name..' />
          </div>
        </div>
        <hr />
        <div className="row mt-2 ms-2">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
          <input type="text" name="email" id="email" className='form-control-sm form-control' placeholder='Email..' />

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

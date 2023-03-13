import React from 'react'

const Register = () => {
  return (
    <>
    <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#registerModel">
                <i className="fa fa-user-plus me-1 "></i>Register
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="registerModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className="btn btn-primary w-100 mb-2">
            <span className="fa fa-google me-2"></span> Signup With Google
        </button>
         <button className="btn btn-primary w-100 mb-2">
            <span className="fa fa-facebook me-2"></span> Signup With Facebook
        </button>
         <button className="btn btn-primary w-100 mb-2">
            <span className="fa fa-github me-2"></span> Signup With Github
        </button>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInput" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"  className="btn btn-primary w-100 mb-2">Submit</button>
</form>
      </div>
      
    </div>
  </div>
</div>

    </>
  )
}

export default Register
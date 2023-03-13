import React from 'react'
import contact from '../assets/contact.jpg'
const Contact = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <h1>Have Some Query?</h1>
                <hr />
            </div>
        </div>
        <div className="row ">
            <div className="col-md-5 d-flex justify-content-center ">
                <img src={contact} alt="" height="600px" width="600px" />
            </div>
            <div className="col-md-6">
                <form >
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
</div>
                    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="submit"className='btn btn-outline-primary'>
    Submit
</button>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Contact
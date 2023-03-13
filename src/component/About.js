import React from 'react'
import { NavLink } from 'react-router-dom';
import about from "../assets/about.jpg";
const About = () => {
  return (
    <>
    <div className="container py-5 my-5">
        <div className="row">
    <div className="col-md-6">
        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
        <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus excepturi ipsum iure repellendus? Quas atque iste officiis perspiciatis! Minima recusandae voluptas quas ut natus reprehenderit odio quae ab ad?
            Animi iure quos aliquid soluta dicta. Ratione deleniti ad beatae enim tenetur incidunt cupiditate quisquam totam quaerat commodi neque cum similique, animi necessitatibus expedita illo, qui nesciunt officia alias at!
            Labore saepe ullam expedita, tempora quibusdam aliquid, veritatis amet id quisquam architecto tempore porro, pariatur ea reprehenderit fugit rem tenetur ut minus qui perspiciatis modi dolores excepturi eius! Repellat, ab?
        </p>

        <NavLink to="/contact" className="btn btn-outline-primary">
            Contact Us
        </NavLink>
    </div>
    <div className="col-md-6 d-flex justify-content-center">
        <img src={about} alt="" height="500px" width="500px"/>
    </div>
    </div>
    </div>
    </>
  )
}

export default About
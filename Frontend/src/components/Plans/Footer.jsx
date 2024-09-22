import React from 'react'

const Footer = () => {
  return (
    <div>
        
<footer className="text-center text-white text-lg-start text-muted bg-black mb-0">
  <section className="d-flex justify-content-center justify-content-lg-between pt-4 border-bottom">
   

    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p className='text-white'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Foods Types
          </h6>
          <p className='text-white'>
            <a href="#!" className="text-reset ">Indian</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset ">Chinese</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset ">Maxician</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset ">French</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Useful links
          </h6>
          <p className=' text-white'>
            <a href="#!" className="text-reset text-white">Pricing</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p className='text-white'>
            <a href="#!" className="text-reset ">Orders</a>
          </p>
          <p className=' text-white'>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
          <p className='text-white'><i className="fas fa-home me-3 "></i> New York, NY 10012, US</p>
          <p className='text-white'>
            <i className="fas fa-envelope me-3 "></i>
            info@example.com
          </p>
          <p className='text-white'><i className="fas fa-phone me-3 "></i> + 01 234 567 88</p>
          <p className='text-white'><i className="fas fa-print me-3 "></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" styles={{"background-color": "black"}}>
    <a className="text-reset fw-bold text-white">foods.com</a>
  </div>
</footer>
    </div>
  )
}

export default Footer
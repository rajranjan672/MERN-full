import React from 'react'

const Footer = () => {
  return (
    <div>
        
<footer class="text-center text-white text-lg-start text-muted bg-black mb-0">
  <section class="d-flex justify-content-center justify-content-lg-between pt-4 border-bottom">
   

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto">
          <h6 class="text-uppercase fw-bold mb-4 text-white">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p className='text-white'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-white">
            Foods Types
          </h6>
          <p className='text-white'>
            <a href="#!" class="text-reset ">Indian</a>
          </p>
          <p className='text-white'>
            <a href="#!" class="text-reset ">Chinese</a>
          </p>
          <p className='text-white'>
            <a href="#!" class="text-reset ">Maxician</a>
          </p>
          <p className='text-white'>
            <a href="#!" class="text-reset ">French</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-white">
            Useful links
          </h6>
          <p className=' text-white'>
            <a href="#!" class="text-reset text-white">Pricing</a>
          </p>
          <p className='text-white'>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p className='text-white'>
            <a href="#!" class="text-reset ">Orders</a>
          </p>
          <p className=' text-white'>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4 text-white">Contact</h6>
          <p className='text-white'><i class="fas fa-home me-3 "></i> New York, NY 10012, US</p>
          <p className='text-white'>
            <i class="fas fa-envelope me-3 "></i>
            info@example.com
          </p>
          <p className='text-white'><i class="fas fa-phone me-3 "></i> + 01 234 567 88</p>
          <p className='text-white'><i class="fas fa-print me-3 "></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" styles={{"background-color": "black"}}>
    <a class="text-reset fw-bold text-white">foods.com</a>
  </div>
</footer>
    </div>
  )
}

export default Footer
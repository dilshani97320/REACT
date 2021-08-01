import React from 'react'

const footer = () => {
    return (
        <div>
      <footer class="text-center text-lg-start bg-light text-light bg-dark pt-5">
  
  

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
        
        <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4 text-warning">
            Beauty Flora
          </h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
       
        
        
        
        
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4 text-warning">
            Contact
          </h6>
          <p><i class="fas fa-home me-3 text-warning"></i> No123,Colombo 05</p>
          <p>
            <i class="fas fa-envelope me-3 text-warning"></i>
            beautyflora@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-warning"></i> + 011 23444345</p>
          <p><i class="fas fa-print me-3 text-warning"></i> + 011 23444345</p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <form>
                <h6 className="text-center bg-warning text-dark p-2">Send Your Message</h6>

        <div class="input-group has-validation my-4">
      <span class="input-group-text bg-warning" id="inputGroupPrepend"><i class="fas fa-user"></i></span>
      <input type="text" class="form-control bg-dark" placeholder="Name" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
        Please choose a username.
        
      </div>
    </div>

    
    <div class="input-group has-validation my-2">
      <span class="input-group-text bg-warning" id="inputGroupPrepend"><i class="fas fa-phone-alt"></i></span>
      <input type="text" class="form-control bg-dark" placeholder="Phone" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
       
        
      </div>
    </div>

    
    <div class="input-group has-validation my-4">
      <span class="input-group-text bg-warning" id="inputGroupPrepend"><i class="fas fa-envelope"></i></span>
      <textarea  class="form-control bg-dark" placeholder="Message" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
      <div class="invalid-feedback">
        
        
      </div>
    </div>

    <button>Send</button>
    </form>
         </div>
         
      </div>
     
    </div>
  </section>
 

  <section
    class="d-flex justify-content-lg-center p-4 border-bottom "
  >
   

    
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
      
      
    </div>
    
  </section>
  <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset ">HMDT.All rights received</a>
  </div>
 
</footer>
  
     </div>
    )
}

export default footer

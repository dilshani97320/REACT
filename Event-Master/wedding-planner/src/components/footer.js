import React from 'react'
import ReactPlayer from 'react-player'
const footer = () => {
    return (
        <div className="footer mt-5">


<footer class="text-center text-lg-start text-muted">
 
  <section
    class="d-flex justify-content-center pt-5 text-light">
 
    <div >
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f " style={{background:'red',padding:'.8rem 1.1rem',borderRadius:'50%'}}></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter" style={{background:'red',padding:'0.8rem .9rem',borderRadius:'50%'}}></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-youtube"style={{background:'red',padding:'0.8rem .8rem',borderRadius:'50%'}}></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"style={{background:'red',padding:'0.8rem 1rem',borderRadius:'50%'}}></i>
      </a>
     
    </div>
   
  </section>
  
  <section class="text-light mt-2">
    <div class="container-fluid px-5 text-center text-md-start mt-5">
      
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4" style={{fontFamily: 'Lobster',letterSpacing:'3px'}}>
           Event Master
          </h6>
        <div className="row py-3 d-flex justify-content-center">
<ReactPlayer width='350px' height='300px' url="https://www.youtube.com/watch?v=jYOJT5tebvo" controls={true} />
</div>
         
        </div>
        

        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <a href="#!" class="text-reset">Cards and Cake Boxes</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Floral Arengements</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Entertainments</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Wedding Decos</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Car service</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Dancing Groups</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> N0  22,Peter street,Colmobo</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
           eventmaster@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +49 22334444</p>
          <p><i class="fas fa-print me-3"></i> +49 42356622</p>
        </div>
        
        <div class="form col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
            Join with us
          </h6>
          
          <form>
  <div class="mb-3">
  
    <input type="text" class="form-control mb-3" placeholder="full name" style={{background:'#959595',border:'none'}}/>
    <input type="text" class="form-control mb-3" placeholder="email" style={{background:'#959595',border:'none'}}/>
    <input type="text" class="form-control mb-3" placeholder="contact" style={{background:'#959595',border:'none'}}/>
    <textarea type="text" class="form-control mb-3" placeholder="message" style={{background:'#959595',border:'none'}}/>

  </div>
 
  <button type="submit" class="btn d-flex" style={{margin:'0 auto'}}>send</button>
</form>

        </div>
        
      </div>
     
    </div>
  </section>
  
  <div class="text-center text-light p-3" style={{background:'#C41515'}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="#">HMDT</a>
  </div>
  
</footer>

            
        </div>
    )
}

export default footer

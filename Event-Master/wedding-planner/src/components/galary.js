import React from 'react'
import design from '../images/design.png'
import background from '../images/background.jpg'
import galary1 from '../images/galary1.webp'
import galary2 from '../images/galary2.jpg'
import galary3 from '../images/galary3.jpg'
import galary4 from '../images/galary4.jpg'
import galary5 from '../images/galary5.jpg'
import galary6 from '../images/galary6.jpg'
import galary7 from '../images/galary7.jpg'
import galary8 from '../images/galary8.jpg'


const galary = () => {
    return (
        <div classNam="galary" id="galary">
           <div class="container px-2">

           
                <img src={design} className="d-flex justify-content-center w-50 m-auto"/>
                 <h1 className="text-center">Some of Our Highlights</h1> 


                
<div class="row text-center text-lg-start " style={{ backgroundImage: `url(${background})` }}>
<div className="row text-center text-lg-start py-4" style={{background:'rgba(0,0,0,0.7)',margin:'0'}}>

  <div class="col-md-3">
   
      <img class="img-fluid " src={galary1} alt="" style={{width:'260px',height:'250px'}}  />
   
  </div>
  <div class=" col-md-4 ">
 
      <img class="img-fluid" src={galary2} alt="" style={{width:'400px',height:'380px'}}/>
   
  </div>
  <div class="col-md-3">
    
      <img class="img-fluid" src={galary3} alt=""style={{width:'300px',height:'200px'}}/>
    
  </div>
  <div class="col-md-2">
    
      <img class="img-fluid" src={galary4} alt="" style={{width:'220px',height:'360px'}}/>
   
  </div>
  <div class="col-md-3 ">
    
      <img class="img-fluid" src={galary5} alt=""style={{width:'260px',height:'350px',marginTop:'-6rem'}}/>
    
  </div>
  <div class="col-md-4 ">
  
      <img class="img-fluid" src={galary6} alt=""style={{width:'400px',height:'220px',marginTop:'2rem'}}/>
   
  </div>
  <div class="col-md-3">
   
      <img class="img-fluid" src={galary7} alt=""style={{width:'300px',height:'400px',marginTop:'-9.3rem'}}/>
    
  </div>
  <div class="col-md-2">
    
      <img class="img-fluid" src={galary8} alt=""style={{width:'220px',height:'240px',marginTop:'.8rem'}}/>
   
  </div>
 
</div>

</div>
        </div>
        </div>
    )
}

export default galary

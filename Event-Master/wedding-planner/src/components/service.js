import React from 'react'
import design from '../images/design.png'
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpeg';
import service4 from '../images/service4.jpg';
import service5 from '../images/service5.jpg';
import service6 from '../images/service6.jpg';
const service = () => {
    return (
        <div className="service" id="service">
            <div className="container">
            <img src={design} className="d-flex justify-content-center w-50 m-auto"/>
                 <h1 className="text-center">Our Services</h1> 

                 <div className="row py-4">

                 <div class="profile-card-6">
                <div className="container-card"></div>
                <img src={service1} class="img img-responsive"/>
                 <h3 >Card designing</h3>
                <button>view details</button>
                </div>
                
                <div class="profile-card-6">
                <div className="container-card"></div>
                <img src={service2} class="img img-responsive"/>
                 <h3 >Cake Boxes designing</h3>
                <button>view details</button>
                </div>
                
                <div class="profile-card-6">
                <div className="container-card"></div>
                <img src={service3} class="img img-responsive"/>
                 <h3 >Cake structures</h3>
                <button>view details</button>
                </div>
                
                <div class="profile-card-6 mt-5">
                <div className="container-card"></div>
                <img src={service4} class="img img-responsive"/>
                 <h3 >Dancing groups</h3>
                <button>view details</button>
                </div>
                
                <div class="profile-card-6 mt-5">
                <div className="container-card"></div>
                <img src={service5} class="img img-responsive" style={{marginRight:'-5px'}}/>
                 <h3 >Car service</h3>
                <button>view details</button>
                </div>
                
                <div class="profile-card-6 mt-5">
                <div className="container-card"></div>
                <img src={service6} class="img img-responsive"/>
                 <h3 >Entertainment</h3>
                <button>view details</button>
                </div>



                 </div>
            </div>
        </div>
    )
}

export default service

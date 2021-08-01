import React from 'react'
import design from '../images/design.png'
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.jpg';
import about3 from '../images/about3.jpg';
import ReactPlayer from 'react-player';

const about = () => {
    return (
        <div className="about">
            <div className="container-fluid"style={{padding:'0 5rem 0 5rem'}}>
                <img src={design} className="d-flex justify-content-center w-50 m-auto"/>
                 <h1 className="text-center">About Us</h1> 
               <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Amet consectetur adipiscing elit duis. Morbi tristique senectus et netus et malesuada fames. Turpis cursus in hac habitasse platea dictumst. Lacus sed turpis tincidunt id. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Cursus in hac habitasse platea dictumst. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Quam adipiscing vitae proin sagittis. Ultrices eros in cursus turpis massa.

sed ullamcorpern.</p>
            
            <button className="about-btn">learn more</button>
            
            <div className="row py-4">

            <div class="profile-card-6">
            <div className="container-card"></div>
                <img src={about1} class="img img-responsive"/>
                
             <h3 >Event Master</h3>
             <p>Dream Fulfillment</p>
            </div>

            <div class="profile-card-6">
            <div className="container-card"></div>
                <img src={about2} class="img img-responsive"/>
                
             <h3 >Event Master</h3>
             <p>Dream Fulfillment</p>
            </div>

            <div class="profile-card-6">
            <div className="container-card"></div>
                <img src={about3} class="img img-responsive"/>
                
             <h3 >Event Master</h3>
             <p>Dream Fulfillment</p>
            </div>
                
</div>

<div className="row py-3 d-flex justify-content-center">
<ReactPlayer width='1180px' height='300px' url="https://www.youtube.com/watch?v=F4BN0hWxIW4" controls={true} />
</div>
</div>

            </div>

            
   
    )
}

export default about

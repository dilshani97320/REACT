import React from 'react';
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.jpg';

const Home = () => {
    return (
        <div className="home" id="home">
            

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide3} class="d-block w-100" alt="wedding one"/>
    </div>
    <div class="carousel-item">
      <img src={slide4}class="d-block w-100" alt="wedding two"/>
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </div>
    )
}

export default Home
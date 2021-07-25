import React from 'react'

const header = () => {
    return (
        <div className="banner">
        <div className="header_navbar">
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid pt-2">
    <a class="navbar-brand text-warning px-5" href="#">Beauty Flora </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center mx-5 px-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-warning px-4" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-warning px-4" href="#About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-warning px-4" href="#Products">Floral Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-warning px-4" href="#Packages">Gift Packages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-warning px-4" href="#Contact">Contact</a>
        </li>
       
      </ul>
    </div>
    <div class="collapse navbar-collapse d-flex justify-content-end px-5" id="navbarNav">
    <i class="fas fa-shopping-bag text-warning"></i>
    </div>
  </div>
</nav>

<div className="container">
    <div className="col-md-6">
        <h1 className="text-warning">Life is the flower for which
love is the honey.</h1>
<p className="text-light py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   <button className="btn">Order Now</button>
   
    </div>
</div>
        </div>
        </div>
    )
}

export default header

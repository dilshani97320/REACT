import React from 'react'

const offer = () => {
    return (
        <div className="offer">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                <h1 className="text-center">In This Festival Season </h1>
                 <div className="logo"></div>
                   
                </div>
               

                <div className="row">
                <div className="col-md-6 image">
              <img src="../src/images/offer.png"/>
                </div>
                <div className="col-md-6">
                    <h2>30% <span>Discount</span></h2>
                    <p className="text-center pt-5">Share Your Happiness with your Lovely ones by<br></br> surprising them with flowers</p>
                <button className="btn">Order Now</button>
                </div>

                </div>
            </div>
            
        </div>
    )
}

export default offer

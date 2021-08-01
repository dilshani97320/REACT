import React from 'react'

const about = () => {
    return (
        <div className="about py-4">
        <div className="container-fluid">
            <h1 className="d-flex text-align-end">About Us</h1>
            <div className="row">
                <div className="col-md-7 image mt-5">
                   <div className="img1 mx-4" alt="person2"></div>  
                   <div className="img2" alt="person2"></div>  
                   <div className="img3 mx-4" alt="person2"></div>       
                    
                </div>
                <div className="col-md-5">
                    <p className="mt-5 d-flx text-end">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn ">Learn More</button>
                </div>
            </div>
        </div>            
        </div>
    )
}

export default about

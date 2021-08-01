import React from 'react'
import design from '../images/design.png'
import girl from '../images/girl.png'
import boy from '../images/boy.png'

const feedback = () => {
    return (
        <div className="feedback" id="feedback">
            <div className="container">
            <img src={design} className="d-flex justify-content-center w-50 m-auto"/>
                 <h1 className="text-center">Happy Customers</h1> 


                 <div className="row py-4 col-12">
                     <div className="content  d-flex justify-content-center">


<div className="col-md-5 text-light text-center pt-5"style={{display:'inline-block'}} >
    <img src={girl} style={{width:"100px",margin:'5px 0'}} />
<h3 >Nayani</h3>
<p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<div className="col-md-5 text-light text-center pt-5 "style={{display:'inline-block'}}>
<img src={boy}  style={{width:"100px",margin:'5px 0'}} />
<h3 >Nayani</h3>
<p className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</div>


<button>See more feedback</button>
</div>

                 </div>
            </div>
        </div>
    )
}

export default feedback

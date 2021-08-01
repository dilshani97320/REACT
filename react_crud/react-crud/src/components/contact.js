import React from 'react'
import Contactfrom from './contactfrom'

const contact = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Student Registration System</h1>
                
            </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <Contactfrom />
                </div>
                <div className="col-md-7">
                    <div>List of Students
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact

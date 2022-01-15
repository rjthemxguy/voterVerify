import React, {Fragment} from 'react';
import { useNavigate} from "react-router-dom";





const HandleSubmit = (event) => {
    

    event.preventDefault();

    
    
}

function search() {
    
    
    
    return (
    <Fragment>
        
        
     
     <div className="container text-left">
        <form onSubmit = {HandleSubmit}>

            <div className="form-group mb-4 mt-4">
                <label for="VoterLastName">Voter Last Name</label>
                <input type="text" className="form-control" id="VoterLastName" placeholder="Enter last name"></input>
            </div>

            <div className="form-group mb-4">
                <label for="VoterHouseNumber">Voter House Number</label>
                <input type="text" className="form-control" id="VoterHouseNumber" placeholder="Enter house number"></input>
            </div>

            <div className="form-group mb-4">
                <label for="voterFirstName">Voter First Name</label>
                <input type="text" className="form-control" id="voterFirstName"  placeholder="Enter first name"></input>
            </div>
          

            <div className="form-group mb-4">
                <label for="VoterStreetName">Voter Street Name</label>
                <input type="text" className="form-control" id="VoterStreetName" placeholder="Enter street name"></input>
            </div>
  
            <div className="text-center">
                <button type="submit" className="btn btn-primary text-center">Search for voter</button>
            </div>
        </form>

      </div>

     
    </Fragment>
    )
}

export default search;

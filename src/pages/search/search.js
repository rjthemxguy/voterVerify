import React, {Fragment, useContext, useState} from 'react';
import { useNavigate} from "react-router-dom";
import { SearchContext } from '../../context/search/searchContext';








function Search() {

    
    const searchContext = useContext(SearchContext);


    const {data, setSearchState} = searchContext;
     
    

    
    let navigate = useNavigate();
    
    function GoResults() {
    alert(lname);    
    setSearchState({fName:"Robert", lName:"Robinson"});
    navigate("/results");
    
    }


    const formData = {
        lastN:"Test"

    }
        
    const [lname] = useState();


    return (
    <Fragment>
        
        
     
     <div className="container text-left">
        <form>

            <div className="form-group mb-4 mt-4">
                <label for="VoterLastName">Voter Last Name</label>
                <input type="input" value={lname} className="form-control" id="VoterLastName" placeholder="Enter last name" name="nameOne"></input>
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
                <button onClick={GoResults} className="btn btn-primary text-center">Search for voter</button>
            </div>
        </form>

      </div>

     
    </Fragment>
    )
}

export default Search;

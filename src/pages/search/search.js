import React, {Fragment, useContext, useState} from 'react';
import { useNavigate} from "react-router-dom";
import { SearchContext } from '../../context/search/searchContext';




function Search() {

    
    const searchContext = useContext(SearchContext);

    const {data, setSearchState} = searchContext;
     
    const {fName, lName, houseNum, street} = data;

   
    let navigate = useNavigate();
    
    const onChange = e => setSearchState({...data, [e.target.name]: e.target.value});

    const onSubmit = (e) =>{
        e.preventDefault();
        navigate("/results");
    }
   
  return (
    <Fragment>
        
     <div className="form-group container pt-4" >
        <form onSubmit={onSubmit}>
            <input type="text"
            class="form-control mt-4"
            placeholder="Last Name"
            name="lName"
            value={lName}
            onChange = {onChange}/>

            <input type="text"
            class="form-control mt-4"
            placeholder="House Number"
            name="houseNum"
            value={houseNum}
            onChange = {onChange}/>

            <input type="text"
            class="form-control mt-4"
            placeholder="First Name"
            name="fName"
            value={fName}
            onChange = {onChange}/>

            <input type="text"
            class="form-control mt-4"
            placeholder="Street"
            name="street"
            value={street}
            onChange = {onChange}/>

            <div>
                <input type="submit" value="Search" className="btn btn-primary mt-4"/>
            </div>
        </form>  
      </div>

     
    </Fragment>
    )
}

export default Search;

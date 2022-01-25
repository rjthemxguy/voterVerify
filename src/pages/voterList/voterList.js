import React, {Fragment, useContext, useEffect } from 'react'
import VoterContext from '../../context/voter/voterContext'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useNavigate } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { SearchContext } from '../../context/search/searchContext';
import Fab from '@mui/material/Fab';



const VoterList = () => {

    
  
    const searchContext = useContext(SearchContext);

    const {data, setSearchState} = searchContext;

    const  voterContext = useContext(VoterContext);

    const { voters, getVoters } = voterContext;     

    useEffect(() => {
        getVoters(data);
        console.log(voters);
        //eslint-disable-next-line
    }, []);

    const navigate = useNavigate();
    
    function newSearch(){
      setSearchState({fName:"",
      lName:"",
      houseNum:"",
      street:"",
      city:""});
      
      navigate("/");
    }
const actionButton = (voter) => {
  setSearchState({fName:"",
  lName:"",
  city:"",
  houseNum:voter.sHouseNum,
  street:voter.szStreetName});
  
navigate("/");
  
}



const ListTag = () => voters.map(voter => (<div className="fullRow"><div className="leftRow text-left">
  <span className="navy">{voter.szNameLast} , {voter.szNameFirst}</span>
<br/><span className="row2 text-left">{voter.sHouseNum} {voter.szStreetName}, {voter.szSitusCity} 
</span></div><div className="rightRow"><i class="fas fa-house-user"  onClick={() => actionButton(voter)}></i></div>
</div>
))

    return (
        <Fragment >

<div className="text-center">
<div className="fixed-top mt-4 newSearch" onClick={newSearch}>Click Here for NEW SEARCH</div>
 </div>        
       <div className="topMargin"></div>  
      
      <ListTag />
      
     
     {/*  <div className="ag-theme-alpine container mt-4 text-left" style={{height: 600, width: 825}}>
          
           <AgGridReact
               rowData={voters}
               columnDefs={
                [  
                    {
                      headerName: "Last Name",
                      field: "szNameLast",
                      width:165
                      },
                    {
                      headerName: "First Name",
                      field: "szNameFirst",
                      width:140
                    },
                    {
                      headerName: "House #",
                      field: "sHouseNum",
                      width:140
                      
                      
                    },
                    {
                        headerName: "Street",
                        field: "szStreetName",
                        width:150
                        
                      },
                      {
                        headerName: "City",
                        field: "szSitusCity",
                        width: 150
                      },
                      {
                      headerName: "",
                      width:60,
                      cellRendererFramework:(params) => <div>
                       <i class="fas fa-house-user"  onClick={() => actionButton(params)}></i> </div>
                      }
                ]
               }>
                 <AgGridColumn field="szNameLast"></AgGridColumn>
                 <AgGridColumn field="model"></AgGridColumn>
                 <AgGridColumn field="price"></AgGridColumn>
                 <AgGridColumn field="price2"></AgGridColumn>
                 
                 
           </AgGridReact>
           <div className = "text-center mt-4">
           <button onClick={newSearch} className="btn btn-primary">New Search</button>
           </div>
       </div>

              */}    


        </Fragment>
    )
}

export default VoterList

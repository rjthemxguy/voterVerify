import React, {Fragment, useContext, useEffect } from 'react'
import VoterContext from '../../context/voter/voterContext'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useNavigate } from 'react-router-dom';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { SearchContext } from '../../context/search/searchContext';



const VoterList = () => {

    
  
    const searchContext = useContext(SearchContext);

    const {data, setSearchState} = searchContext;

    const  voterContext = useContext(VoterContext);

    const { voters, getVoters } = voterContext;     

    useEffect(() => {
        getVoters(data);
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
const actionButton = (params) => {
  setSearchState({fName:"",
  lName:"",
  city:"",
  houseNum:params.data.sHouseNum,
  street:params.data.szStreetName});
  
navigate("/");
  
}
  

    return (
        <Fragment >
        <div className="ag-theme-alpine container mt-4 text-left" style={{height: 600, width: 825}}>
          
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

            
        </Fragment>
    )
}

export default VoterList

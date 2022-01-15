import React, {Fragment, useContext, useEffect } from 'react'
import VoterContext from '../../context/voter/voterContext'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



const VoterList = () => {

    const  voterContext = useContext(VoterContext);

    const { voters, getVoters } = voterContext;     

    useEffect(() => {
        getVoters();
        //eslint-disable-next-line
    }, []);
    




    return (
        <Fragment >
        <div className="ag-theme-alpine container mt-4 text-left" style={{height: 600, width: 675}}>
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
                        width:200
                        
                      }
                ]
               }>
                 <AgGridColumn field="szNameLast"></AgGridColumn>
                 <AgGridColumn field="model"></AgGridColumn>
                 <AgGridColumn field="price"></AgGridColumn>
           </AgGridReact>
       </div>

            
        </Fragment>
    )
}

export default VoterList

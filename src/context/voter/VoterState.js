import React, {useReducer, useContext} from 'react';
import uuid from 'uuid';
import VoterContext from './voterContext';
import voterReducer from './voterReducer';

import { GET_VOTERS, VOTER_ERROR } from '../types';
import axios from 'axios';

const VoterState = props =>{


    

    

    const initialState = {

        voters : [{}]
    };

    const [state,dispatch] = useReducer(voterReducer, initialState);

    const getVoters = async (props) => {

        const data = props;

      

        const query = `http://139.59.170.27:5000/api/voters?last=${data.lName}&first=${data.fName}&house=${data.houseNum}&street=${data.street}&city=${data.city}`;
        
        
        
        
       
        try {
           const voters = await axios.get(query);
                dispatch({
                    type: GET_VOTERS,
                    payload: voters.data
                });

        } catch (err) {
            dispatch({
                type:VOTER_ERROR,
                payload: err.response.msg
            });
        }
    };

    return (
        <VoterContext.Provider value = {{
            voters:state.voters,
            getVoters
        }}>
            {props.children}

        </VoterContext.Provider>
    )
};

export default VoterState;

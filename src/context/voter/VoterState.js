import React, {useReducer} from 'react';
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

    const getVoters = async () => {

       
        try {
           const voters = await axios.get("http://139.59.170.27:5000/api/voters?last=Morgan&first=David");
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

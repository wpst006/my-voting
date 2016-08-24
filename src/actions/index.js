import axios from 'axios';
import {
    TOGGLE_VOTE_UP,TOGGLE_VOTE_DOWN,UPDATE_VOTING_STATUS,
    REQUEST_DATA,RECEIVE_DATA
} from '../constants/actionTypes'

const toggleVoteAjax = (id,type) => {
    return dispatch  => {
        return axios.post("http://wpst.voting.test/api/do-vote.php",{
            type,
            id,
        })
        .then(function (response) {
            dispatch(updateVotingStatus(id,response.data));
        })
        .catch(function (response) {
            console.log("Error");
            console.dir(response);
        });
    }
}

export const toggleVoteUp = (id) => {
    return toggleVoteAjax(id,TOGGLE_VOTE_UP);
}

export const toggleVoteDown = (id) => {
    return toggleVoteAjax(id,TOGGLE_VOTE_DOWN);
}

export const updateVotingStatus = (id,isVoted) => {
    return {
        type: UPDATE_VOTING_STATUS,
        isVoted,
        id,
    }
}

export function requestData (){
    return {
        type: REQUEST_DATA,
    }
}

export function receiveData (data){
    return {
        type: RECEIVE_DATA,
        data
    }
}

export function getData () {
    return dispatch  => {
        return axios({
            url: "http://wpst.voting.test/api/get-data.php",
            timeout: 20000,
            //method: method,
            responseType: 'json'
        })
        .then(function (response) {
            dispatch(receiveData(response.data));
        })
        .catch(function (response) {
            console.log("Error");
            console.dir(response);
        });
    }
}
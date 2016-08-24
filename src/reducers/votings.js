/**
 * Created by Wai Phyo on 05/07/2016.
 */
import {
    UPDATE_VOTING_STATUS,
    REQUEST_DATA,RECEIVE_DATA
} from '../constants/actionTypes'

const updateVotingState = (state,action) => {
    if (state.id!==action.id){
        return state;
    }

    return Object.assign({}, state, {
        isVoted: action.isVoted
    })
}

const voting = (state, action) => {
    switch (action.type) {
        case UPDATE_VOTING_STATUS:
            return updateVotingState(state,action);
        default:
            return state
    }
}

const votings = (state = [], action= {}) => {
    switch (action.type) {
        case UPDATE_VOTING_STATUS:
            return state.map(t =>voting(t, action))
        case REQUEST_DATA:
            //console.log("REQUEST_DATA");
        case RECEIVE_DATA:
            return Object.assign([], state, action.data);
        default:
            return state
    }
}

export default votings

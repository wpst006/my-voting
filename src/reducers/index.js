/**
 * Created by Wai Phyo on 05/07/2016.
 */
import { combineReducers } from 'redux'
import votings from './votings'

const votingApp = combineReducers({
    votings
})

export default votingApp

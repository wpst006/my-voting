import { connect } from 'react-redux'
import { toggleVoteUp, toggleVoteDown } from '../actions'
import VotingList from '../components/VotingList'

const mapStateToProps = (state) => {
    return {
        votingDataList: state.votings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        upClick: (id) =>dispatch(toggleVoteUp(id)),
        downClick: (id) => dispatch(toggleVoteDown(id))
    }
}

const VotingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VotingList)

export default VotingContainer
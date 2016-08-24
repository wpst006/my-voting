/**
 * Created by Wai Phyo on 05/07/2016.
 */
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import VotingItem from './VotingItem'
import {getData} from '../actions/index'

class  VotingList extends Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getData())
    }

    render() {
        return (
            <div id="voting-container">
                <div id="voting-container-inner">

                    {this.props.votingDataList.map(votingData =>
                        <VotingItem
                            key={votingData.id}
                            {...votingData}
                            upClick={()=>this.props.upClick(votingData.id)}
                            downClick={()=>this.props.downClick(votingData.id)}
                            />
                    )}
                </div>
            </div>
        );
    }
}

VotingList.propTypes={
    votingDataList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired
    }).isRequired).isRequired,
    upClick: PropTypes.func,
    downClick: PropTypes.func,
}

VotingList.defaultProps={
    votingDataList : []
}

export default VotingList
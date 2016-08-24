import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class VotingItem extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        var voteUpButtonStatus=(this.props.isVoted==1) ?  'btn btn-success btn-up-vote' : 'btn btn-default btn-up-vote';
        var voteDownButtonStatus=(this.props.isVoted==-1) ?  'btn btn-success btn-down-vote' : 'btn btn-default btn-down-vote';

        return (
            <div className="voting-item">
                <div className="voting-item-inner">
                    <div className="name-container">
                        {this.props.name}
                    </div>
                    <div className="image-container">
                        <img src={this.props.imageUrl} width="250" height="300" />
                    </div>
                    <div className="button-container">
                        <button type="button" className={voteUpButtonStatus}
                                onClick={this.props.upClick}>
                            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                        </button>
                        <button type="button" className={voteDownButtonStatus}
                                onClick={this.props.downClick}>
                            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

VotingItem.propTypes={
    upClick: PropTypes.func,
    downClick: PropTypes.func,
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isVoted:PropTypes.number.isRequired
};

VotingItem.defaultProps={
    id : 0,
    imageUrl : "",
    isVoted : false
};


export default VotingItem

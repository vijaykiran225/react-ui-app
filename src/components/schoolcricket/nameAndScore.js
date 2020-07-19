import React, { Component } from 'react';

class ScoreBar extends Component {
    render() {

        return (
            <div>
                <br></br>
                {this.props.name}

                <br></br>
                {this.props.playerScore.runs} / {this.props.playerScore.wicket}
            </div>
        );
    }
}

export default ScoreBar;
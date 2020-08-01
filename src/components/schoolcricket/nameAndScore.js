import React, { Component } from 'react';

class ScoreBar extends Component {
    render() {

        return (
            <div>
                <br></br>
                {this.props.name}  chooses {this.props.playerSelection === -1 ? "" : this.props.playerSelection}
                <br></br>

                <br></br>
                Computer chooses {this.props.compSelection === -1 ? "" : this.props.compSelection}
                <br></br>
                <br></br>

                Score
                <br></br>
                {this.props.playerScore.runs} / {this.props.playerScore.wicket}



            </div>
        );
    }
}

export default ScoreBar;
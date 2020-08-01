import React, { Component } from 'react';
import ScoreBar from './nameAndScore';
import ScoreHistory from './scoreHistory';
import cricketData from '../../config/cricketData';
import cricketCSS from '../../styles/cricket.css';

class SchoolCricket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "vj",
            playerSel: -1,
            compSel: -1,
            playerScore: {
                runs: 0,
                wicket: 0
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let c = Math.floor(Math.random() * 8);
        let currentScore = this.state.playerScore.runs;
        let currWickets = this.state.playerScore.wicket;
        if (c === parseInt(e.target.id)) {
            currWickets += 1;
        } else {
            currentScore += parseInt(e.target.id);
        }
        this.setState({
            playerSel: e.target.id,
            compSel: c,
            playerScore: {
                runs: currentScore,
                wicket: currWickets
            }
        });
    }

    getHands(data) {
        let collection = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const option = data[key];
                collection.push(
                    <button
                        id={option.score}
                        className="ems"
                        onClick={this.handleChange}
                    >
                        {option.display}
                    </button>

                );
            }
        }
        return <div className="ems">{collection}</div>;
    }

    render() {
        let hands = this.getHands(cricketData);



        return (
            <div>

                {this.state.playerScore.wicket < 10 ? hands : "Game over"}


                <ScoreBar
                    name={this.state.name}
                    playerSelection={this.state.playerSel}
                    compSelection={this.state.compSel}
                    playerScore={this.state.playerScore}
                />
                <ScoreHistory
                    playerSelection={this.state.playerSel}
                    compSelection={this.state.compSel} />
            </div>
        );
    }
}

export default SchoolCricket;
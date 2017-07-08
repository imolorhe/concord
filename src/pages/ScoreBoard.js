import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionHistoryItem from '../components/QuestionHistoryItem';

class ScoreBoard extends Component {
    render() {
        const { history } = this.props;
        const winCount = history.reduce((cum, item) => item.isCorrectAnswer ? ++cum: cum, 0);
        const lossCount = history.reduce((cum, item) => !item.isCorrectAnswer ? ++cum: cum, 0);

        return (
            <div className="scoreboard-wrapper">
                <div className="scoreboard-board">
                    <div className="scoreboard-board-item">
                        Wins
                        <div className="scoreboard-board-item-inner">
                            {winCount}
                        </div>
                    </div>
                    <div className="scoreboard-board-item">
                        Losses
                        <div className="scoreboard-board-item-inner">
                            {lossCount}
                        </div>
                    </div>
                </div>
                { history.map(item => (<QuestionHistoryItem key={item.question.toString()} item={item}/>))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    history: state.scoreHistory
});

export default connect(mapStateToProps)(ScoreBoard);
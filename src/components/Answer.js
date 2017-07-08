import React, { Component } from 'react';
import classNames from 'classnames';

class Answer extends Component {
    render() {
        const { text, isCorrect, isWrong } = this.props;
        return (
            <div className={classNames({
                'question-answer-item': true,
                'right-answer': isCorrect,
                'wrong-answer': isWrong,
            })}>
                <button className="question-answer-item-inner" onClick={this.props.onSelect}>
                    {text}
                </button>
            </div>
        );
    }
}

export default Answer;
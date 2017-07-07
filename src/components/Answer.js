import React, { Component } from 'react';

class Answer extends Component {
    render() {
        const { text } = this.props;
        return (
            <div className="question-answer-item">
                <a href="#" className="question-answer-item-inner">
                    {text}
                </a>
            </div>
        );
    }
}

export default Answer;
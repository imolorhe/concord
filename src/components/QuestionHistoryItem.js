import React, { Component } from 'react';

class QuestionHistoryItem extends Component {
    render() {
        const { question } = this.props.item;
        return (
            <div className="question-history-item">
                {question}
            </div>
        );
    }
}

export default QuestionHistoryItem;
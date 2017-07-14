import React, { Component } from 'react';

class QuestionHistoryItem extends Component {
    render() {
        const { question, answers } = this.props.item;
        return (
            <div className="question-history-item">
                <div dangerouslySetInnerHTML={{ __html: question }} />
                { answers.map(answer => (<div key={answer.id} className="question-history-item-answer" dangerouslySetInnerHTML={{ __html: answer.text}}/>)) }
            </div>
        );
    }
}

export default QuestionHistoryItem;
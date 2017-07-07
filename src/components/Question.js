import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
    render() {
        const { question, option1, option2, option3, option4 } = this.props.data;
        const _answers = [ option1, option2, option3, option4 ];
        const answers = _answers.map((text, index) => ({ id: index, text }));

        return (
            <div className="question-wrapper">
                <div className="question-inner-wrapper">
                    {question}
                </div>
                <div className="question-answers-wrapper">
                    {answers.map(answer => (
                        <Answer key={answer.id} text={answer.text} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Question;
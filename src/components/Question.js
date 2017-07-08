import React, { Component } from 'react';
import classNames from 'classnames';

import { shuffle } from '../utils';
import Answer from './Answer';

class Question extends Component {
    constructor(props) {
        super(props);


        this.initialState = {
            wrongAnswerId: null,
            correctAnswerId: null,
            hasAnswered: false,
            isCorrectAnswer: true,
            answers: []
        };

        this.state = this.initialState;
    }

    setAnswersFromData(data) {
        const { incorrect_answers, correct_answer } = data;
        let _answers = [];
        if (incorrect_answers) {
            _answers = shuffle([ ...incorrect_answers, correct_answer ]);
        }
        this.setState({
            answers: _answers.map((text, index) => ({ id: index, text }))
        });
    }

    answerSelected(id) {
        const { correct_answer, question } = this.props.data;
        const { answers } = this.state;
        const selectedAnswer = answers.filter(answer => answer.id === id)[0];
        const correctAnswer = answers.filter(answer => answer.text === correct_answer)[0];
        const isCorrectAnswer = selectedAnswer.text === correct_answer;

        if (!isCorrectAnswer) {
            this.setState({
                wrongAnswerId: selectedAnswer.id
            });
        }
        this.setState({
            correctAnswerId: correctAnswer.id,
            hasAnswered: true,
            isCorrectAnswer
        });

        this.props.onSelectAnswer(question, this.state.answers, isCorrectAnswer, correctAnswer.id, selectedAnswer.id);
    }

    newQuestion() {
        this.setState(this.initialState);
        this.props.onNewQuestion();
    }

    componentWillMount() {
        this.setAnswersFromData(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        // Prevent shuffle when the props haven't changed. Happens when the route link is clicked
        if (JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data)) {
            this.setAnswersFromData(nextProps.data);
        }
    }

    render() {
        const { question } = this.props.data;

        return (
            <div className="question-wrapper">
                <div className={classNames('question-overlay', {'show': this.state.hasAnswered})}>
                    <div className="question-overlay-inner">
                        {
                            (this.state.isCorrectAnswer) ? (
                                <div className="question-overlay-text">Correct!</div>
                            ): (
                                <div className="question-overlay-text">Wrong!</div>
                            )
                        }
                        <button className="button" onClick={() => this.newQuestion()}>Next Question</button>
                    </div>
                </div>
                <div className="question-inner-wrapper" dangerouslySetInnerHTML={{ __html: question }} />
                <div className="question-answers-wrapper">
                    {this.state.answers.map(answer => (
                        <Answer
                            key={answer.id}
                            text={answer.text}
                            isCorrect={this.state.correctAnswerId === answer.id}
                            isWrong={this.state.wrongAnswerId === answer.id}
                            onSelect={() => this.answerSelected(answer.id)} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Question;
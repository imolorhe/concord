import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getQuestion, addToScoreHistory, newQuestion } from '../actions/questions';
import Question from '../components/Question';

class Home extends Component{

    constructor(props) {
        super(props);

        this.answerSelected = this.answerSelected.bind(this);
    }

    componentWillMount() {
        // Previously had this in componentDidMount(), but that doesn't get called during server render
        if (!Object.keys(this.props.question).length) {
            this.props.getQuestion();
        }
    }

    answerSelected(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId) {
        console.log('Is selected answer correct?', isCorrectAnswer);
        console.log('Correct answer is:', correctAnswerId);

        this.props.dispatch(addToScoreHistory(question, answers, isCorrectAnswer, correctAnswerId, selectedAnswerId));
    }

    newQuestion() {
        this.props.newQuestion();
    }

    render() {
        return (
            <Question data={this.props.question} onSelectAnswer={this.answerSelected} onNewQuestion={() => this.newQuestion()} />
        );
    }
}

const mapStateToProps = state => ({
    question: state.curQuestion
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    getQuestion: () => dispatch(getQuestion()),
    newQuestion: () => dispatch(newQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getQuestion } from '../actions/questions';
import Question from '../components/Question';

class Home extends Component{

    componentDidMount() {
        this.props.getQuestion();
    }

    answerSelected(isCorrect, correctAnswer) {
        console.log('Is selected answer correct?', isCorrect);
        console.log('Correct answer is:', correctAnswer);
    }

    render() {
        return (
            <Question data={this.props.question} onSelectAnswer={this.answerSelected} />
        );
    }
}

const mapStateToProps = state => ({
    question: state.curQuestion
});

const mapDispatchToProps = dispatch => ({
    getQuestion: () => dispatch(getQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native-web';

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
        if (this.props.data) {
            this.setAnswersFromData(this.props.data);
        }
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
            <View style={styles.wrapper}>
                <View style={[styles.overlay, this.state.hasAnswered ? styles.showOverlay : {}]}>
                    <View>
                        {
                            (this.state.isCorrectAnswer) ? (
                                <Text style={styles.overlayText}>Correct!</Text>
                            ): (
                                <Text style={styles.overlayText}>Wrong!</Text>
                            )
                        }
                        <Button title='Next Question' color='#511E78' onPress={() => this.newQuestion()}>Next Question</Button>
                    </View>
                </View>
                <View style={styles.innerWrapper} dangerouslySetInnerHTML={{ __html: question }} />
                <View style={styles.answersWrapper}>
                    {this.state.answers.map(answer => (
                        <Answer
                            key={answer.id}
                            text={answer.text}
                            isCorrect={this.state.correctAnswerId === answer.id}
                            isWrong={this.state.wrongAnswerId === answer.id}
                            onSelect={() => this.answerSelected(answer.id)} />
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        // fontSize: '18px',
        // textAlign: 'center'
    },
    innerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, .4)',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: 'hidden',
        opacity: 0,
    },
    showOverlay: {
        opacity: 1,
        visibility: 'visible'
    },
    overlayText: {
        fontSize: '36px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    answersWrapper: {
        flex: 1,
        flexWrap: 'wrap'
    }
});

export default Question;
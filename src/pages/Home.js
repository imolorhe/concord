import React, { Component } from 'react';

import Question from '../components/Question';

class Home extends Component{
    question = {
        category: {
            name: "Football",
            question_count: 0,
            id: 9,
            createdAt: "2017-05-24T17:25:21.000Z",
            updatedAt: "2017-05-24T17:25:21.000Z",
            parent_category: null
        },
        question: "What is the NFL's all-star game called?",
        option1: "The Pro Bowl",
        option2: "Best of the Best",
        option3: "The Chowder Game",
        option4: "The MVP Game",
        answers: 1,
        id: 256,
        createdAt: "2017-05-24T17:25:21.000Z",
        updatedAt: "2017-05-24T17:25:21.000Z"
    };
    render() {
        return (
            <Question data={this.question} />
        );
    }
}

export default Home;
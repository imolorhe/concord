import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native-web';

class QuestionHistoryItem extends Component {
    render() {
        const { question, answers } = this.props.item;
        return (
            <View style={styles.item}>
                <View dangerouslySetInnerHTML={{ __html: question }} />
                { answers.map(answer => (<View key={answer.id} style={styles.itemAnswer} dangerouslySetInnerHTML={{ __html: answer.text}}/>)) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: '10px'
    },
    itemAnswer: {
        paddingLeft: '20px',
        marginBottom: '5px'
    }
});

export default QuestionHistoryItem;
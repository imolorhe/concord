import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native-web';
import classNames from 'classnames';

class Answer extends Component {
    render() {
        const { text, isCorrect, isWrong } = this.props;
        return (
            <View style={styles.item} className={classNames({
                'right-answer': isCorrect,
                'wrong-answer': isWrong,
            })}>
                <TouchableOpacity title={text} onPress={this.props.onSelect} style={[
                    styles.itemButton,
                    isCorrect ? styles.isCorrect : {},
                    isWrong ? styles.isWrong : {}
                ]}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexBasis: '50%',
        padding: '20px',
        // fontSize: 20px,
    },
    itemButton: {
        flex: 1,
        // fontSize: 20px,
        // color: var(--primary-color),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
            width: 0,
            height: '5px'
        },
        shadowRadius: '30px',
        shadowSpread: '-10px',
        shadowOpacity: 0.3
    },
    isCorrect: {
        backgroundColor: '#96D38C',
        // color: 'white'
    },
    isWrong: {
        backgroundColor: '#CF4647',
        // color: 'white'
    }
});

export default Answer;
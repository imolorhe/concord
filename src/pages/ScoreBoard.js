import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native-web';
import { connect } from 'react-redux';

import QuestionHistoryItem from '../components/QuestionHistoryItem';

class ScoreBoard extends Component {
    render() {
        const { history } = this.props;
        const winCount = history.reduce((cum, item) => item.isCorrectAnswer ? ++cum: cum, 0);
        const lossCount = history.reduce((cum, item) => !item.isCorrectAnswer ? ++cum: cum, 0);

        return (
            <View>
                <View style={styles.board}>
                    <View style={styles.boardItem}>
                        <Text>WINS</Text>
                        <View style={styles.boardItemInner}>
                            <Text style={styles.boardItemInnerText}>{winCount}</Text>
                        </View>
                    </View>
                    <View style={styles.boardItem}>
                        <Text>LOSSES</Text>
                        <View style={styles.boardItemInner}>
                            <Text style={styles.boardItemInnerText}>{lossCount}</Text>
                        </View>
                    </View>
                </View>
                { history.map(item => (<QuestionHistoryItem key={item.question.toString()} item={item}/>))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row'
    },
    boardItem: {
        flex: 1,
        alignItems: 'center',
        padding: '10px',
    },
    boardItemInner: {
        flex: 1,
        backgroundColor: '#8B2F97',
        width: '100%',
        borderRadius: '5px',
    },
    boardItemInnerText: {
        fontSize: '100px',
        color: '#ffffff',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    history: state.scoreHistory
});

export default connect(mapStateToProps)(ScoreBoard);
import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native-web';
import { Switch , Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';

import Home from './pages/Home';
import ScoreBoard from './pages/ScoreBoard';

class App extends Component {

    render() {
        const { isLoading } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={[styles.loader, isLoading ? styles.loaderShow : {}]}>
                    <ActivityIndicator size='large' color='var(--primary-color)'/>
                </View>
                <View style={styles.header}>
                    <View className="app-header-menu" style={styles.headerMenu}>
                        <Text style={styles.headerMenuText}>
                            <Link to='/'>Question</Link>
                        </Text>
                        <Text style={styles.headerMenuText}>
                            <Link to='/scores'>Scores</Link>
                        </Text>
                    </View>
                </View>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/scores" component={ScoreBoard}/>
                </Switch>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        height: '100%'
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, .8)',
        justifyContent: 'center',
        visibility: 'hidden',
        opacity: 0,
    },
    loaderShow: {
        opacity: 1,
        visibility: 'visible'
    },
    header: {
        backgroundColor: '#8B2F97',

    },
    headerMenu: {
        flexDirection: 'row'
    },
    headerMenuText: {
        color: '#ffffff'
    }
});


const mapStateToProps = state => ({
    isLoading: state.isLoading
});
export default withRouter(connect(mapStateToProps)(App));

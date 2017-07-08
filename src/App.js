import React, { Component } from 'react';
import { Switch , Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import classNames from 'classnames';

import './App.css';
import logo from './concord.svg';

import Home from './pages/Home';
import ScoreBoard from './pages/ScoreBoard';

class App extends Component {

    render() {
        const { isLoading } = this.props;
        return (
            <div className="app-wrapper">
                <div className={classNames({
                    'app-loader': true,
                    'show': isLoading
                })}>
                    <img src={logo} alt=""/>
                </div>
                <div className="app-header">
                    <ul className="app-header-menu">
                        <li>
                            <Link to='/'>Question</Link>
                        </li>
                        <li>
                            <Link to='/scores'>Scores</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/scores" component={ScoreBoard}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
});
export default withRouter(connect(mapStateToProps)(App));

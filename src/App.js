import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import { connect } from 'react-redux'
import classNames from 'classnames';

import './App.css';
import logo from './concord.svg';

import Home from './pages/Home';

class App extends Component {

    render() {
        const { isLoading } = this.props;
        return (
            <div className="app-wrapper">{isLoading}
                <div className={classNames({
                    'app-loader': true,
                    'show': isLoading
                })}>
                    <img src={logo} alt=""/>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
});
export default connect(mapStateToProps)(App);

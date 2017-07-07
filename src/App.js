import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

class App extends Component {

    componentDidMount() {
        console.log('ss');
        // let questions = await fetch('https://qriusity.com/v1/questions');
    }
    render() {
        return (
            <div className="app-wrapper">
                From App.
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;

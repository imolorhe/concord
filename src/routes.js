import React from 'react';
import { Router, Route} from 'react-router-dom';

import Question from './components/Question';

const Routes = (props) => (
    <Router {...props}>

        <Route path="/question" component={Question}/>
    </Router>
);

export default Routes;
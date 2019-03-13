import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import easy from './assets/data/questions/easy';
import normal from './assets/data/questions/normal';
import hard from './assets/data/questions/hard';

import Home from './scenes/Home';
import QuestionLayout from './scenes/Question';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/easy/:id" render={props => <QuestionLayout {...props} questions={easy} />} />
        <Route path="/easy/" render={() => <Redirect to="/easy/1" />} />
        <Route path="/normal/:id" render={props => <QuestionLayout {...props} questions={normal} />} />
        <Route path="/normal/" render={() => <Redirect to="/normal/1" />} />
        <Route path="/hard/:id" render={props => <QuestionLayout {...props} questions={hard} />} />
        <Route path="/hard/" render={() => <Redirect to="/hard/1" />} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Submissions from './components/Submissions'
import OpenForum from './components/OpenForum'


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/submissons">
          <Submissions/>
        </Route>

        <Route exact path="/open-forum">
          <OpenForum/>
        </Route>

      
      </Switch>
    </div>
  );
}

export default App;

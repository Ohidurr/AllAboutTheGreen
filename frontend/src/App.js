import React from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import Submissions from './components/Submissions'
import OpenForum from './components/OpenForum'
import PlantSearch from './components/PlantSearch';



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
        
        <Route path ="/profile">
        <PlantSearch />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

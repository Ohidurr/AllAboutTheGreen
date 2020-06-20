import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Submissions from './components/Submissions'
import OpenForum from './components/OpenForum'
import LandingPage from './components/LandingPage'
import PlantProfile from './components/PlantProfile';



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
        
        <Route  exact path ="/profile">
        <PlantProfile />
        </Route>

        
        <Route exact path ={"/"}>
        <LandingPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

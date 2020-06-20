import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Submissions from './components/Submissions'
import OpenForum from './components/OpenForum'
<<<<<<< HEAD
import PlantSearch from './components/PlantSearch';
=======
import LandingPage from './components/LandingPage'
import PlantProfile from './components/PlantProfile';
>>>>>>> fa2fc2e7cf3515360b704dc64ebeb3ef4ed20d83



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
        
<<<<<<< HEAD
        <Route path ="/profile">
        <PlantSearch />
=======
        <Route  exact path ="/profile">
        <PlantProfile />
>>>>>>> fa2fc2e7cf3515360b704dc64ebeb3ef4ed20d83
        </Route>

        
        <Route exact path ={"/"}>
        <LandingPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

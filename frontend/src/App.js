import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import Submissions from "./components/Submissions";
import OpenForum from "./components/OpenForum";
import LandingPage from "./components/landingPage";
import PlantSearch from "./components/PlantSearch";
import PlantContainer from "./components/PlantContainer";
import PlantScan from './components/PlantScan/PlantScan'
import ScanResults from './components/PlantScan/ScanResults'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/submissions" component={Submissions}/>
          
        <Route exact path="/open-forum" component={OpenForum} />

        <Route exact path="/plants" component={PlantSearch} />
          {/* <PlantSearch />
        </Route> */}

        <Route path="/plants/:id" component={PlantContainer} />
          {/* <PlantContainer />
        </Route> */}

        <Route exact path="/plant-scan" component={PlantScan} />
        
        {/* <Route exact path ="/">
        <LandingPage/>
        </Route> */}

        <Route exact path="/plant-scan/results" component={ScanResults} />


      </Switch>
    </div>
  );
};

export default App;

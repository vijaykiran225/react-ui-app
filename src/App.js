import React from 'react';
import Graph from './components/graph/graph.js';
import SchoolCricket from './components/schoolcricket/cric.js';

import CORSComponent from './components/cors/cors.js';
import { Route } from 'react-router-dom';
import hellow from './components/hellow.js'
import Tables from './components/tables/table.js';

function App() {
  return (

    <div className="App" basename='/'>
      <Route path="/" component={hellow} exact />
      <Route path="/graph" component={Graph} />
      <Route path="/cricket" component={SchoolCricket} />
      <Route path="/cors" component={CORSComponent} />
      <Route path="/tables" component={Tables} />
    </div>



  );
}

export default App;

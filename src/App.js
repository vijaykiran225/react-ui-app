import React from 'react';
import Graph from './components/graph/graph.js';
import SchoolCricket from './components/schoolcricket/cric.js';

import CORSComponent from './components/cors/cors.js';
import { BrowserRouter, Route } from 'react-router-dom';
import hellow from './components/hellow.js'
import Tables from './components/tables/table.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={hellow} exact />
        <Route path="/graph" component={Graph} />
        <Route path="/cricket" component={SchoolCricket} />
        <Route path="/cors" component={CORSComponent} />
        <Route path="/tables" component={Tables} />
      </div>
    </BrowserRouter>


  );
}

export default App;

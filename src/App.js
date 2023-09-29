import React from 'react';
import Login from './components/Login';
import CafeList from './components/CafeList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cafes" component={CafeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

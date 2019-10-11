import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contacts from  './components/Contacts';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const Home = () => <div>Home Page</div>
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts/:idContact" component={Contact} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </div>
    </Router>

  );

}

export default App;

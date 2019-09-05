import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-default">
            <ul class="nav navbar-nav">
              <li>
                <NavLink exact to='/' activeClassName="active">Trang chu</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{
                  backgroundColor: 'white',
                  color: 'red'
                }}>Lien he</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={{
                  backgroundColor: 'white',
                  color: 'red'
                }}>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
        </div>
      </Router>
    );
  }

}

export default App;

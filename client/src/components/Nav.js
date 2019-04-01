import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import Signup from './Signup'
import Login from './Login'

class Nav extends Component{


render(){
  // console.log(this)
  const props = this.props
  return(
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/register/">Register</Link>
            </li>
          </ul>
        </nav>

        <Route path="/login" exact component={Login} />
        <Route path="/register/" component={Signup} />
      </div>
    </Router>
    </div>
  )
}

}



// <Route path="/dashboard" component={Dashboard} />
// <Route
//   path='/dashboard'
//   render={(props) => <Dashboard {...props} isAuthed={true} />}
// />      <Route path="/login" onLogin={this.onLogin} component={Login} />



export default Nav

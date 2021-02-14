import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar from './components/navbar'
import Index from './pages/index'
import Login from './pages/login'
import Profile from './pages/profile'


function App() {
  return (
     <Router>
      <Navbar/>
       <div>
         <Switch>
           <Route exact path="/">
            <Index/>
           </Route>
           <Route path="/login">
             <Login/>
           </Route>
           <Route path="/profile/:username"  component={Profile} />

         </Switch>
       </div>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
     </Router>
  );
}

export default App;

import React from 'react'
import SignUp from './component/SignUp'
import { Container } from 'react-bootstrap'
import {AuthProvider}  from '../src/context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import PrivateRoute from './component/PrivateRoute'
import ForgotPassword from './component/ForgotPassword'
import UpdateProfile from './component/UpdateProfile'

function App() {
  return (
    <div className="App">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={SignUp} />
                <Route path="/update-profile" component={UpdateProfile} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;

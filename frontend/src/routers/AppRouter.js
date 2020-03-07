import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Login from "../components/Login";
import SignupInvestor from "../components/SignupInvestor";
import SignupBusiness from "../components/SignupBusinessowner";
import CreateStock from "../components/CreateStock";
import Homepage from '../components/Homepage'
import PublicHomepage from '../components/PublicHomepage'
import Profile from '../components/Profile'
import { AUTH_TOKEN } from "../constants";

const NotFoundPage = () => (
  <div>
    <div>404! PAGE NOT FOUND</div>
  </div>
);

const authToken = localStorage.getItem(AUTH_TOKEN);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authToken ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const AppRouter = () => (
  <div>
    {/* <Header/> */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PublicHomepage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/createstock" component={CreateStock} />
        <PrivateRoute path="/homepage" component={Homepage} />
        
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path='/signupinvestor' component={SignupInvestor}/>
        <Route exact path='/signupbusiness' component={SignupBusiness}/>
        
        
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default AppRouter;

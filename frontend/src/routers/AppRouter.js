import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../components/Account/Login";
// import SignupUsers  from '../components/SignupUsers'
// import Homepage from '../components/Homepage'
import PublicHomepage from '../components/Account/PublicHomepage' 
import RegisterUser from '../components/Account/RegisterUser'
import Profile from '../components/Account/Profile'
import ViewStock from '../components/Stock/ViewStock';
import RegistrationSuccess from '../components/Account/RegistrationSuccess'
import VerifyAccount from '../components/Account/VerifyAccount'
import ForgetPassword from '../components/Account/ForgetPassword'
import ResetPassword from "../components/Account/ResetPassword";
import ChangePassword from '../components/Account/ChangePassword'
const NotFoundPage = () => (
  <div>
    <div>404! PAGE NOT FOUND</div>
  </div>
);
const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={PublicHomepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={RegisterUser} />
          <Route exact path="/createaccountsuccess" component={RegistrationSuccess}/>
          <Route exact path="/activate/:token" component = {VerifyAccount}/>
          
          <Route path='/forgetpassword' component={ForgetPassword}/> 
          <Route path="/resetpassword/:token" component={ResetPassword} />
          <Route path="/changepassword" component={ChangePassword}/>
          <Route path="/profile" component={Profile} />
          <Route path="/viewstock" component={ViewStock} />

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default AppRouter;

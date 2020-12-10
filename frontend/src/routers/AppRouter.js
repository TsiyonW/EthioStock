import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "../components/Account/Login";
import AddInvestorInfo from "../components/Investor/AddInvestor";
import AddBusinessInfo from "../components/Businessowner/AddBusiness";
// import SignupUsers  from '../components/SignupUsers'
import CreateStock from "../components/Stock/CreateStock";
// import Homepage from '../components/Homepage'
import PublicHomepage from '../components/Account/PublicHomepage' 
import RegisterUser from '../components/Account/RegisterUser'
import Profile from '../components/Account/Profile'
import CreatePost from '../components/Post/CreatePost'
// import InitiatedStock from '../components/InitiatedStock';
// import ForgetPassword from '../components/ForgetPassword';
// // import { AUTH_TOKEN } from "../constants";
// import NewsFeed from "../components/NewsFeed";
// import MyStockPage from "../components/MyStockPage";
import ViewBusiness from '../components/Businessowner/ViewBusiness'
import ViewInvestor from '../components/Investor/ViewInvestor'
import ViewAdmin from '../components/Admin/ViewAdmin'

import ViewStock from '../components/Stock/ViewStock';
import Watchlist from "../components/Watchlist/Watchlist";
import AdminHomepage from "../components/Admin/AdminHomepage";
import RegistrationSuccess from '../components/Account/RegistrationSuccess'
import VerifyAccount from '../components/Account/VerifyAccount'
import ForgetPassword from '../components/Account/ForgetPassword'
import ResetPassword from "../components/Account/ResetPassword";
import ChangePassword from '../components/Account/ChangePassword'
import BusinessHomepage from '../components/Businessowner/BusinessHomepage'
import InvestorHomepage from '../components/Investor/InvestorHomepage'
import VerifyAdmin from '../components/Admin/VerifyAdmin'
import VerifyMyAdminAccount from '../components/Admin/VerifyMyAdminAccount'
import ReportsToBeResolved from '../components/Report/ReportsToBeResolved'

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
          <Route path="/createstock" component={CreateStock} />
          <Route path="/createpost" component={CreatePost}/>
          <Route path="/businesshomepage" component={BusinessHomepage}/>
          <Route path="/investorhomepage" component={InvestorHomepage}/>
          <Route path="/adminhomepage" component={AdminHomepage} /> 
          <Route path="/watchlist" component={Watchlist}/>
          <Route path="/verifyadmin" component={VerifyAdmin}/>
          <Route path="/verifymyadminaccount" component={VerifyMyAdminAccount}/>
          
          <Route path='/addinvestorinfo' component={AddInvestorInfo}/>
          <Route path='/addbusinessinfo' component={AddBusinessInfo}/>
          <Route path='/forgetpassword' component={ForgetPassword}/> 
          <Route path="/resetpassword/:token" component={ResetPassword} />
          <Route path="/changepassword" component={ChangePassword}/>
          <Route path="/reportstoberesolved" component={ReportsToBeResolved}/>
          <Route path="/profile" component={Profile} />
          <Route path="/viewstock" component={ViewStock} />
          <Route path="/viewBusiness/:id" component={ViewBusiness}/>
          <Route path="/viewInvestor/:id" component={ViewInvestor}/>
          <Route path="/viewAdmin/:id" component={ViewAdmin}/>
       {/*  
        <Route path="/newsfeed" component={NewsFeed} />
        <Route path="/mystock" component={MyStockPage} />
        <Route path="/initiatedstock" component={InitiatedStock} /> */}
        {/* <Route path='/signupinvestor' component={SignupInvestor}/>
        }
        {/* <Route path='/signupusers' component={SignupUsers}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
        <Route path="/watchlist" component={Watchlist} />*/}
        
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);
export default AppRouter;

import auth from '../Auth';
import React from 'react';
import store from '../store';
export default function withAuth(AuthComponent){
    // const Auth = new AuthService();
    return class AuthWrapped extends React.Component{
      constructor(){
        super();
        this.state = {
          user:null
        }
      }
      componentDidMount = async ()=>{
        if(!auth.isAuthenticated()){
          console.log("user is not authenticated")
          this.props.history.replace('/login');
        }
        else{
          try{
            // const profile = auth.getProfile();
            const profile = store.getState().users.user
            this.setState({
              user:profile
            })
          }
          catch(err){
            console.log(err)
            // auth.logout();
            this.props.history.replace('/login')
          }
        }
      }
      render(){
        if(this.state.user){
          return(
            <AuthComponent {...this.props} {...this.state}/>
          )
        }
        else{
          return null;
        }
      }
    }
  }
  
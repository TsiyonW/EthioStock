import {AUTH_TOKEN, STATE} from './constants'
import decode from 'jwt-decode';

class AuthService{
    // initializes the authentication process and saves the token to the local storage
    login(token){
        localStorage.setItem(AUTH_TOKEN,token)
    }

    // returns the token stored in local storage.
    getToken(){
        return localStorage.getItem(AUTH_TOKEN)

    }

    // returns whether there is an authenticated user or not
    isAuthenticated(){
        const token = this.getToken();
        
        // return !!token && !this.isTokenExpired(token)
        return !!token
    }
    //check if the token is expired
    // isTokenExpired(token){
    //     try{
    //         const decoded = decode(token);
    //         if(decoded.exp < Date.now()/1000){
    //             return true
    //         }
    //         else{
    //             return false
    //         }
    //     }
    //     catch(e){
    //         return false;
    //     }
    // }

    //get profile
    getProfile(){            
        return decode(this.getToken())
        

    }
    // signs a user out(removes the token from the local storage).
    logOut(){
        localStorage.removeItem(AUTH_TOKEN)
        localStorage.removeItem(STATE)

    }

}

const auth = new AuthService()
export default auth;
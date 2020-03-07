import {AUTH_TOKEN} from './constants'

class Auth{
    // initializes the authentication process and saves the token to the local storage
    login(token){

        localStorage.setItem(AUTH_TOKEN,token)
    }
    // signs a user out(removes the token from the local storage).
    logOut(){
        localStorage.removeItem(AUTH_TOKEN)

    }
    // returns whether there is an authenticated user or not
    isAuthenticated(){
        return localStorage.getItem(AUTH_TOKEN) ? true:false
    }
    // returns the token stored in local storage.
    getToken(){
        return localStorage.getItem(AUTH_TOKEN)

    }


}

const auth = new Auth()
export default auth;
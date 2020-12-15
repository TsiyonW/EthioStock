import {combineReducers} from 'redux'
const userInitialState = {

}
const stockInitialState = {
    stock:[]
}
const adminNotVerifiedInitialState={

}
function stockReducer(state = stockInitialState, action){

    switch(action.type){
        case "stock/VALID":
            return {
                ...state,
                stock: action.payload
            }
            
        default:
            return state
    }
}
function userReducer(state = userInitialState, action){

    switch(action.type){
        case "user/LOGGEDIN":
        case "user/SIGNEDIN":
            return{
                ...state,
               user: action.payload
            }

        default:
            return state
    }
}
function adminsNotVerifiedReducer(state = adminNotVerifiedInitialState, action){
    switch(action.type){
        case "adminsNotVerified/ADDED":
            return{
                ...state,
                adminsNotVerified:action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    stock:stockReducer,
    users:userReducer,
    adminsNotVerified:adminsNotVerifiedReducer
});

export default rootReducer;
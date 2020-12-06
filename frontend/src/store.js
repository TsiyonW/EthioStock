
import { createStore} from 'redux'
import rootReducer from './reducers'

function saveStateToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState)
    }
    catch(e){
        console.log(e)
    }
}
function loadStateFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e)
        return undefined
    }
}
const persistedState = loadStateFromLocalStorage();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
    )
store.subscribe(()=>saveStateToLocalStorage(store.getState()))
  export default store;
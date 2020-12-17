
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const initCount = {
    count: 1
}

function countReducer(state = initCount, action){
    console.log('action------->', action)
    switch (action.type) {
        case 'ADD':
            return {...state, count: state.count + (action.count || 1)}
            // break
        default:
            return state;
    }

}

const initUser = {
    name: '---'
}

function nameReducer(state = initUser, action){
    // console.log('nameReducer------->', action)
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return {...state, name: action.name}
            // break
        default:
            return state;
    }

}
function addAsync(num) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:'ADD',
                count: num
            })
        }, 5000)
    }
  }
const allReducer = combineReducers({
    count: countReducer,
    user: nameReducer
})

// console.log(store.getState())
// store.dispatch({type: 'UPDATE_USERNAME', name: 'chgengxuzhao'})
// store.dispatch(addAsync(10000))
// // store.dispatch('ADD', addAsync)
// // console.log(store.getState())
// store.subscribe(() => {
//     console.log('change---->', store.getState())
// })

export default function initStore(){
    const store = createStore(
        allReducer, 
        {
            count: initCount,
            user: initUser
        },
        composeWithDevTools(applyMiddleware(reduxThunk))
    )
    return store;
};

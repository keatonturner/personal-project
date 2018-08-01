const initialState = {
    user: {},
    resorts: []
}


const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const UPDATE_RESORTS = 'UPDATE_RESORTS'


export function updateUserData(user){
    return{
        type: UPDATE_USER_DATA,
        payload: user
    }
}
export function updateResorts(resorts){
    return{
        type: UPDATE_RESORTS,
        payload: resorts
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER_DATA:
        return Object.assign({}, state, {user: action.payload})

        case UPDATE_RESORTS:
        return Object.assign({}, state, {resorts: action.payload})

        default: 
        return state;
    }
}
const initialState = {
    user: {},
    resorts: [],
    cart: []
}


const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const UPDATE_RESORTS = 'UPDATE_RESORTS';
const ACTIVATE_CART = 'ACTIVATE_CART';
const UPDATE_CART = 'UPDATE_CART';



export function activateCart(cart){
    return{
        type: ACTIVATE_CART,
        payload: cart
    }
}

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
    export function cartData(data){
        return{
            type: UPDATE_CART,
            payload: data
        }
    
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USER_DATA:
        return Object.assign({}, state, {user: action.payload})

        case UPDATE_RESORTS:
        return Object.assign({}, state, {resorts: action.payload})

        case ACTIVATE_CART:
        return Object.assign({}, state, {cart: action.payload})

        case UPDATE_CART:
        return Object.assign({}, state, {cart: action.payload})

        default: 
        return state;
    }
}
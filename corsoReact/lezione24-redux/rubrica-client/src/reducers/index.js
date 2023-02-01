// es.stato nello store
//const state = [];
/* const state = {
    user: {},
    contacts: [],
    error: {},
} */

const initialState = {contacts: [], userLogin: null}

function storeRoducer(state=initialState, action) {
    switch (action.type) {
        case "LOADED_ALL_CONTACTS":
            return {
                ...state,
                contacts: [...action.payload]
            }
        case "REMOVE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(ele => ele.id !== action.id)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case "UPDATE_CONTACT":
            let prevState = Object.assign([], state.contacts);
            let index = prevState.findIndex(ele => ele.id === action.contact.id);
            prevState[index] = action.contact;
            return {
                ...state,
                contacts: [...prevState]
            }
        case "LOGIN_USER":
            return {
                ...state,
                userLogin: action.user
            }
        case "LOGOUT_USER":
            localStorage.removeItem("userLogin");
            return {
                ...state,
                userLogin: null
            }
        default:
            const jsonUserLogin = localStorage.getItem("userLogin");
            if(jsonUserLogin !== null) {
                const userLogin = JSON.parse(jsonUserLogin);
                return {
                    ...state,
                    userLogin: userLogin
                }
            }
            return state
    }
}

export default storeRoducer
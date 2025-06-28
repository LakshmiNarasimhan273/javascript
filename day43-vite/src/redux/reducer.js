// First we need to create a global data with the name of initialState, then assign the
// data key called count with initial value
const inititalState = {
    count: 0
};

// main reducer function that holds 2 parameters, one our global state, another one our
// action type, based on the action type the switch case will seperately holds the
// function logic
export const counterReducer = (state = inititalState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + 1
            }

        case 'DECREMENT':
            return{
                count: state.count - 1
            }

        case 'RESET':
            return{
                count: 0
            }
        
        default:
            return state;
            // optimization method
    }

}
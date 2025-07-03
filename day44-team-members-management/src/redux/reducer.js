const initialState = {
    members: []
};

export const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEMBER':
            return {
                // Add logic first taken a shallow copy of our state using rest operator
                ...state,
                // create a members key and within a array brackets select our state with
                // members array then passing a payload data that actually comes from
                // react components
                members: [...state.members, { id: Date.now(), ...action.payload }]
            }

        case 'UPDATE_MEMBER':
            return {
                // Add logic first taken a shallow copy of our state using rest operator
                ...state,
                // members key with map function within the function using a map logic
                // to manipulate our array of objects
                members: state.members.map
                    // a map function will manipulate our array of objects and check
                    // the payload id is present in our existing data, if yes it will
                    // update the payload values, else returns our data
                    (data => data.id === action.payload.id ? action.payload : data)
            }

        case 'DELETE_MEMBER':
            return {
                // Add logic first taken a shallow copy of our state using rest operator
                ...state,
                // creating a filter funtion to check the payload id and then select the unmatched existing id
                // from our array and return it
                members: state.members.filter(data => data.id !== action.payload)
            }

        default:
            return state;
    }
}
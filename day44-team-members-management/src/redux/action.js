// add member
// member parameter carries a component form data
export const addMember = (member) => ({
    type: 'ADD_MEMBER',
    // payload method is a technical name for carry a data and store it
    // on a respective place
    payload: member
});

// update member
export const updateMember = (member) => ({
    type: 'UPDATE_MEMBER',
    payload: member
});

// delete member
export const deleteMember = (id) => ({
    type: 'DELETE_MEMBER',
    payload: id
});
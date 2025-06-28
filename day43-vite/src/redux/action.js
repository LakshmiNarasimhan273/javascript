// named export

// Action file completely holds the function without logic, it takes only the function 
// type that matches the reducer logic
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const reset = () => ({ type: 'RESET' });
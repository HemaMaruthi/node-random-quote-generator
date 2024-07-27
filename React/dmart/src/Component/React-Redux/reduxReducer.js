import React from 'react';
const initialState = "Mahesh"
function reduxReducer(state = initialState, action) {
    if(action.type === "addName"){
        console.log(action.payload, "redux Reducer")
        state = action.payload
    }
  return state;
}
export default reduxReducer
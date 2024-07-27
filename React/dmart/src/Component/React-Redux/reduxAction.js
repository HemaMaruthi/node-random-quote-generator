import React from 'react';
import reduxStore from './reduxStore.js'
function reduxAction(name) {
 console.log(name, "redux action")
 reduxStore.dispatch({
    type:"addName",
    payload:name
 })
}
export default reduxAction
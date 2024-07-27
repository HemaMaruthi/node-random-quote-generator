import {legacy_createStore, applyMiddleware} from "redux";
import reduxReducer from './reduxReducer.js';
import logger from 'redux-logger';

const reduxStore = legacy_createStore(reduxReducer, applyMiddleware(logger))
console.log(reduxStore)

export default reduxStore;

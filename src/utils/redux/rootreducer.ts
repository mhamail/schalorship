import { combineReducers } from "@reduxjs/toolkit";

import addSchalorshipReducer from './slices/schalorshipSlices/addSchalorshipSlice'

const rootReducer = combineReducers({
addSchalorship:addSchalorshipReducer
})

export default rootReducer
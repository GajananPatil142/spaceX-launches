import { FETCH_LAUNCHES } from "../actions/actions";

export const initialState = {
    allLaunches: []
}

export const launchesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LAUNCHES :
        return {...state, allLaunches: action.data}
      default:
        return state;
    }
};
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  candies: []
};

const SET_CANDIES = 'SET_CANDIES';

const setCandiesActionCreator = candies => {
  return {
    type: SET_CANDIES,
    candies
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return {
        ...state,
        candies: action.candies
      };
    default:
      return state
  }
};

//Thunk

export const thunkGetCandies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies')
      console.log('DATA', data)
      dispatch(setCandiesActionCreator(data))
    } catch (err) {
      console.log('Oh no! Something went wrong')
    }
  }
}


export default rootReducer;

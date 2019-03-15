import { handleActions, combineActions } from 'redux-actions';

const initialState = {
  counter: 7
};

const counter = handleActions(
  {
    [combineActions('INCREMENT', 'DECREMENT')]: (
      state,
      { payload: amount }
    ) => ({
      ...state,
      counter: state.counter + amount
    })
  },
  initialState
);

export default counter;

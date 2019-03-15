import { createAction } from 'redux-actions';

export const increment = createAction('INCREMENT', amount => amount);
export const decrement = createAction('DECREMENT', amount => -amount);

import { createStore } from 'redux';
import { reducers } from './reducers';
import { actions } from './actions';

export { actions };

export default createStore(reducers);

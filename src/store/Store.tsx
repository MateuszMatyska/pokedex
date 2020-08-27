import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import {IUserInitialState, UserReducer} from './user/user.reducer';

export interface IAppState {
  userState: IUserInitialState;
}

const rootReducer = combineReducers<IAppState>({
  userState: UserReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}

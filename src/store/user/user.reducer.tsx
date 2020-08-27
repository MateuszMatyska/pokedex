import {Reducer} from 'redux';
import userActionTypes from './user.enums';
import {IUser} from './user.types';

export interface ILoginReducer {
  type: userActionTypes.LOGIN;
}

type UserReducers = ILoginReducer;

export interface IUserInitialState {
  user: IUser | null;
  error: boolean;
}

const initialState: IUserInitialState = {
  user: null,
  error: false,
};

export const UserReducer: Reducer<IUserInitialState, UserReducers> = (
  state: IUserInitialState = initialState,
  action: UserReducers,
) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        user: {
          id: 1,
          name: 'Ash',
          code: 1234,
        },
      };
    default:
      return state;
  }
};

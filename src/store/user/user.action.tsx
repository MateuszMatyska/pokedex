import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {IUser} from './user.types';
import userActionTypes from './user.enums';
import {ILoginReducer} from './user.reducer';

export const LoginUser: ActionCreator<ThunkAction<
  Promise<any>,
  IUser,
  null,
  ILoginReducer
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: userActionTypes.LOGIN,
    });
  };
};

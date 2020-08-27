import {IAppState} from 'store/Store';

export const getUser = (store: IAppState) => store.userState.user;

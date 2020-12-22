import {Subject, Observable} from 'rxjs';
import {IUser} from '../user/user.types';

const storeUser: Subject<IUser> = new Subject<IUser>();

const storeUser$: Observable<IUser> = storeUser.asObservable();

const loginUser = (login: string, password: string): void => {
  if (password) {
    const user: IUser = {id: 1, name: login, code: 1234};
    storeUser.next(user);
  }
};

export default {
  storeUser$,
  loginUser,
};

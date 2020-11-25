import {NameSpace} from '../reducers/root-reducer';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getUser = (state) => state[NameSpace.USER].user;

export const getIsAuth = (state) => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;

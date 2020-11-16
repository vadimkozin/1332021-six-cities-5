import {NameSpace} from '../reducers/root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;


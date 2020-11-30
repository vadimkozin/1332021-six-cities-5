import {extend} from '../../../utils';
import {AuthorizationStatus} from '../../../const';
import {ActionType} from "../../action";

const initialState = {
  user: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      // console.log(`action.payload:`, action.payload);
      return extend(state, {authorizationStatus: action.payload});

    case ActionType.SET_USER:
      return extend(state, {user: action.payload});

    default:
      return state;
  }
};


export {user};

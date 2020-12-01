import {user} from './user';
import {ActionType} from '../../action';
import {AuthorizationStatus} from '../../../const';

describe(`user`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: null,
    });
  });

  it(`Reducer should update authorizationStatus to "auth"`, () => {
    const state = user(
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH
        },
        {type: ActionType.REQUIRED_AUTHORIZATION, payload: AuthorizationStatus.AUTH});

    expect(state).toEqual(
        {
          authorizationStatus: AuthorizationStatus.AUTH
        });
  });

});


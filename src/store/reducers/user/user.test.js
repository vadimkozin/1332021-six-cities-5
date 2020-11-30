import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {user} from './user';
import {ActionType} from '../../action';
import {checkAuth, login} from '../../api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';

import reducers from '../root-reducer';

const api = createAPI(() => {});

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


// it(`reducers2`, () => {
//   const state = reducers(
//       {
//         DATA: {},
//         PROCESS: {},
//         USER: {user: null, authorizationStatus: `NO_AUTH`},
//       },
//       {type: `REQUIRED_AUTHORIZATION`, payload: `AUTH`});

//   expect(state).toEqual(
//       {
//         DATA: {},
//         PROCESS: {},
//         USER: {user: null, authorizationStatus: `AUTH`}
//       });

// });

// it(`reducers`, () => {
//   let state;
//   state = reducers(
//       {DATA:{cities:['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'],offers:[]},
//         PROCESS:{city:'Paris',sort:'popular',offersGist:{data:null,status:'loading',error:''},hotelGist:{data:null,status:'idle',error:'',id:0},hotelsNearbyGist:{data:null,status:'idle',error:''},commentsGist:{data:null,status:'idle',error:''}},
//         USER:{user:{id:1,name:'qwerty',email:'qwerty@mail.ru',isPro:false,avatarUrl:'https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg'},authorizationStatus:'NO_AUTH'}},
//       {type:'REQUIRED_AUTHORIZATION',payload:'AUTH'});
//   expect(state).toEqual(
//       {DATA:{cities:['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'],offers:[]},
//         PROCESS:{city:'Paris',sort:'popular',offersGist:{data:null,status:'loading',error:''},hotelGist:{data:null,status:'idle',error:'',id:0},hotelsNearbyGist:{data:null,status:'idle',error:''},commentsGist:{data:null,status:'idle',error:''}},
//         USER:{user:{id:1,name:'qwerty',email:'qwerty@mail.ru',isPro:false,avatarUrl:'https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg'},authorizationStatus:'AUTH'}});
// });

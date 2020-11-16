import {combineReducers} from "redux";
import {process} from "./process/process";
import {data} from "./data/data";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
});

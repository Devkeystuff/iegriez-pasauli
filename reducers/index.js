import { combineReducers } from "redux";
import questions from "./questions";
import gameObj from "./gameObj";
import game from "./game";
import points from "./points";
import wheelSectors from "./wheelSectors";
import map from "./map";
import transition from "./transition";

export default combineReducers({
  questions,
  gameObj,
  game,
  points,
  wheelSectors,
  map,
  transition,
});

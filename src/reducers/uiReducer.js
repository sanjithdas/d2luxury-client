import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "./type";
import { SET_AUTHENTICATED } from "../actions/type";

const initialState = {
  authenticated: false,
  credentials: {},

}
export default function (state= initialState, action) {
  switch(action.type){
    case SET_AUTHENTICATED:
      return{
        ...state,
        authenticated: true
      };
      case SET_UNAUTHENTICATED:
        return  initialState;
      case SET_USER:
        return {
          authenticated: true,
          ...action.payload
        }
        default:
          return state;
     
  }
  
}
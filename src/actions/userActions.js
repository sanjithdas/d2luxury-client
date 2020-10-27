import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "./type";
import axios from 'axios';
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  console.log(userData);
  axios
    .post("http://localhost:5000/d2luxuryredux/us-central1/api/login", userData)
    .then((res) => {
      console.log(res.data);

      this.setState({
        loading: false,
      });
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem("FBIdToken", FBIdToken);
      axios.defaults.headers.common["Authorization"] = FBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
  // console.log("Submitted Auth");
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => consolor.log(err));
};

import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
} from "../actions/types";
import axios from "axios";

// user login
export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });

  axios
    .post("http://localhost:5000/d2luxuryredux/us-central1/api/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_AUTHENTICATED,
        payload: res.data,
      });
      history.push("/admin/room/create/");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
  // console.log("Submitted Auth");
};

// user signup
export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      "http://localhost:5000/d2luxuryredux/us-central1/api/signup",
      newUserData
    )
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());
      // dispatch({ type: CLEAR_ERRORS });

      history.push("/admin/room/create");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        // errors:err.response.data,
        payload: err.response.data,
      });
    });
  // console.log("Submitted Auth");
};

// logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });

  // console.log(userData);
  //   axios
  //     .post(
  //       "http://localhost:5000/d2luxuryredux/us-central1/api/signup",
  //       userData
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
  //       this.setState({
  //         loading: false,
  //       });
  //       this.props.history.push("/");
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         errors: err.response.data,
  //         loading: false,
  //       });
  //     });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("http://localhost:5000/d2luxuryredux/us-central1/api/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 19:42:47
 * @modify date 2020-11-01 21:56:04
 * @desc [Actions - dipatch actions here , calls the appropriate actions, contact the server]
 */
import {
  GET_ROOMS,
  GET_ROOM,
  DELETE_ROOM,
  DEL_ERROR,
  ADD_ROOM,
  UPDATE_ROOM,
  GET_MY_ROOM,
} from "../actions/types";
import axios from "axios";

/**
 * fetch all the room details from the database through this API call
 */
export const getRooms = () => async (dispatch) => {
  const res = await axios.get(
    "http://localhost:5000/d2luxuryredux/us-central1/api/rooms"
  );
  dispatch({
    type: GET_ROOMS,
    payload: res.data,
  });
};
/**
 * get a room details with given id
 * @param {*} id
 */

export const getRoom = (roomno) => async (dispatch) => {
  console.log(roomno);
  const res = await axios.get(
    `http://localhost:5000/d2luxuryredux/us-central1/api/room/${roomno}`
  );
  console.log("get room.....");
  console.log(res.data);
  dispatch({
    type: GET_ROOM,
    payload: res.data,
  });
  //console.log(res.data);
};

/**
 * get all the rooms of a user
 * @param {} id
 */

export const getAllMyRooms = (userId) => async (dispatch) => {
  console.log(userId);
  const res = await axios.get(
    `http://localhost:5000/d2luxuryredux/us-central1/api/myrooms/${userId}`
  );
  console.log("get my rooms.....");
  console.log(res.data);
  dispatch({
    type: GET_MY_ROOM,
    payload: res.data,
  });
};

/**
 * delete the room according to the id provided.
 * @param {} id
 */
export const deleteRoom = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_ROOM,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DEL_ERROR,
      payload: error,
    });
  }
};

/**
 * create a new room
 * @param {} contact
 */
export const addRoom = (room) => async (dispatch) => {
  //console.log(room);
  const res = await axios.post(
    `http://localhost:5000/d2luxuryredux/us-central1/api/room`,
    room
  );
  dispatch({
    type: ADD_ROOM,
    payload: res.data,
  });
  // history.push("/admin/room/show");
};

/**
 * update the existing room
 * @param {
 * } contact
 */
export const updateRoom = (contact) => async (dispatch) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_ROOM,
    payload: res.data,
  });
};

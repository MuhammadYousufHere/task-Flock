import axios from "axios";
const API_URL = "https://flock-test.herokuapp.com/api/users/";

const getCurrentProfile = async () => {
  try {
    const res = await axios.get(API_URL, { headers: {} });
    return res.data;
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};
const postUser = async (user) => {
  try {
    const res = await axios.post(API_URL, user, { headers: {} });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};
const editUser = async (userId) => {
  try {
    await axios.put(API_URL + `:${userId}`, { headers: {} });
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};

const deleteUser = async (userId) => {
  try {
    const res = await axios.delete(API_URL + `:${userId}`, { headers: {} });
    return res.data;
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};
export const userService = {
  getCurrentProfile,
  editUser,
  deleteUser,
  postUser,
};

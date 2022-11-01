import axios from "axios";
const API_URL = "https://flock-test.herokuapp.com/api/user";

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
const registerProfile = async (user) => {
  try {
    await axios.post(API_URL, {});
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};
const editUser = async (userId) => {
  try {
    await axios.put(API_URL, { headers: {} });
    return res.data;
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};

const deleteUser = async (userId) => {
  try {
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
  registerProfile,
};

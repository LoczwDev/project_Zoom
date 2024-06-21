import axios from "axios";

export const registerUser = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const verificationUser = async ({
  activation_token,
  activation_code,
}) => {
  try {
    const { data } = await axios.post("/api/users/activate-User", {
      activation_token,
      activation_code,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post("/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.get("/api/users/logout");
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getProfileUser = async () => {
  try {
    const { data } = await axios.get("/api/users/profileUser");
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const editProfileUser = async ({ name }) => {
  try {
    const { data } = await axios.put("/api/users/updateUserInfo", { name });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const udpateAvatarProfile = async ({ avatar }) => {
  try {
    const { data } = await axios.put("/api/users/updateProfileAvatar", {
      avatar,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const changePasswordUser = async ({ oldPassword, newPassword }) => {
  try {
    const { data } = await axios.put("/api/users/updatePasswordUser", {
      oldPassword,
      newPassword,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

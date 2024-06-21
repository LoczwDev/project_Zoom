import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";
import { getProfileUser } from "../service/usersApi";
import GetCookie from "../hooks/getCookie";

const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;

const tokenAccess = GetCookie("access_token");
const initialStateAsync = async () => {
  if (tokenAccess) {
    const profileData = await getProfileUser();
    return {
      user: { userInfo: profileData },
    };
  }
};

const initialState = await initialStateAsync();
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;

import { useSelector } from "react-redux";

const useUser = () => {
  const userState = useSelector((state) => state.user);
  return userState?.userInfo?.user;
};

export default useUser;

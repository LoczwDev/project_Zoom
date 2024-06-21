import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { getProfileUser } from "../../service/usersApi";
import { Loader } from "../loader/Loader";
import GetCookie from "../../hooks/getCookie";

export const MainLayout = ({ children }) => {
  const checkToken = GetCookie("access_token");
  console.log(checkToken);
  const { data, isLoading } = useQuery({
    queryFn: () => getProfileUser(),
    queryKey: ["profile"],
    onSuccess: (data) => {},
    enabled: !!checkToken,
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : children}
      <Footer />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userActions } from "../../store/reducers/userReducers";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { login, registerUser } from "../../service/usersApi";
import { SocialButton } from "../login/container/SocialButton";
import ActivateUserContainer from "../../components/activateUser/ActivateUserContainer";

const RegisterPage = () => {
  const [dataRegister, setdataRegister] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return registerUser({ name: name, email: email, password: password });
    },
    onSuccess: (data) => {
      toast.success(data.message || "Hãy chú ý email của bạn");
      setdataRegister(data);
      //   navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        {dataRegister ? (
          <ActivateUserContainer
            activationToken={dataRegister?.activationToken}
          />
        ) : (
          <div className="w-full max-w-sm mx-auto border border-hard rounded-lg p-5">
            <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
              Sigup
            </h1>
            <SocialButton />
            <br />
            <h5 className="text-center text-[20px] font-bold">Or</h5>
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="name"
                  className="text-gray-500 font-semibold block"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 2,
                      message: "name length must be at least 2 characters",
                    },
                  })}
                  placeholder="Enter name"
                  className={`placeholder:text-[#959ead] dark:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                    errors.name ? "border-red-500" : "border-[#c3cad9]"
                  }`}
                />
                {errors.name?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="email"
                  className="text-gray-500 font-semibold block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter valid email",
                    },
                    required: {
                      value: true,
                      message: "required",
                    },
                  })}
                  placeholder="Enter email"
                  className={`placeholder:text-[#959ead] dark:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                    errors.email ? "border-red-500" : "border-[#c3cad9]"
                  }`}
                />
                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-6 w-full">
                <label
                  htmlFor="password"
                  className="text-gray-500 font-semibold block"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "required",
                      },
                      minLength: {
                        value: 6,
                        message:
                          "Password length must be at least 6 characters",
                      },
                    })}
                    placeholder="Enter password"
                    className={`placeholder:text-[#959ead] dark:text-[#959ead] w-full text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                      errors.password ? "border-red-500" : "border-[#c3cad9]"
                    }`}
                  />
                  <span className="absolute top-1/2 right-4 cursor-pointer">
                    {showPassword ? (
                      <FiEye onClick={() => setshowPassword(!showPassword)} />
                    ) : (
                      <FiEyeOff
                        onClick={() => setshowPassword(!showPassword)}
                      />
                    )}
                  </span>
                </div>

                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isValid || isLoading}
                className="bg-accent text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Login
              </button>
              <p className="text-sm font-semibold text-gray-500">
                Do have an account?{" "}
                <Link to="/login" className="text-accent">
                  login
                </Link>
              </p>
            </form>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default RegisterPage;

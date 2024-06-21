import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { changePasswordUser } from "../../../../../service/usersApi";
import { userActions } from "../../../../../store/reducers/userReducers";

const ChangePasswordProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ oldPassword, newPassword }) => {
      return changePasswordUser({ oldPassword, newPassword });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Đổi mật khẩu thành công");
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
    getValues,
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    const { oldPassword, newPassword } = data;
    mutate({ oldPassword, newPassword });
  };

  return (
    <section className="container mx-auto px-5">
      <div className="w-full ">
        <h4 className="font-semibold text-lg uppercase">Change Password</h4>
        <form onSubmit={handleSubmit(submitHandler)}>
          <PasswordField
            id="oldPassword"
            label="Old Password"
            register={register}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            errors={errors}
          />
          <PasswordField
            id="newPassword"
            label="New Password"
            register={register}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            errors={errors}
          />
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="confirmPassword"
              className="text-gray-500 font-semibold block"
            >
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) =>
                    value === getValues("newPassword") ||
                    "Passwords do not match",
                })}
                placeholder="Confirm password"
                className={`placeholder:text-[#959ead] dark:text-[#959ead] w-full text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              <span className="absolute top-1/2 right-4 cursor-pointer">
                {showPassword ? (
                  <FiEye onClick={() => setShowPassword(false)} />
                ) : (
                  <FiEyeOff onClick={() => setShowPassword(true)} />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="bg-accent text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
};

const PasswordField = ({
  id,
  label,
  register,
  showPassword,
  setShowPassword,
  errors,
}) => {
  return (
    <div className="flex flex-col mb-6 w-full">
      <label htmlFor={id} className="text-gray-500 font-semibold block">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          {...register(id, {
            required: {
              value: true,
              message: `${label.toLowerCase()} is required`,
            },
            minLength: {
              value: 6,
              message: "Password length must be at least 6 characters",
            },
          })}
          placeholder={`Enter ${label.toLowerCase()}`}
          className={`placeholder:text-[#959ead] dark:text-[#959ead] w-full text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
            errors[id] ? "border-red-500" : "border-[#c3cad9]"
          }`}
        />
        <span className="absolute top-1/2 right-4 cursor-pointer">
          {showPassword ? (
            <FiEye onClick={() => setShowPassword(false)} />
          ) : (
            <FiEyeOff onClick={() => setShowPassword(true)} />
          )}
        </span>
      </div>
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default ChangePasswordProfile;

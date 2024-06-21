import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUser, verificationUser } from "../../service/usersApi";

const ActivateUserContainer = ({ activationToken }) => {
  const navigate = useNavigate();
  const [invalidError, setInvalidError] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [verifyNumber, setVerifyNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ activation_token, activation_code }) => {
      return verificationUser({
        activation_token: activation_token,
        activation_code: activation_code,
      });
    },
    onSuccess: (data) => {
      toast.success(
        data.message || "Xac minh thanh cong dang quay ve trang dang nhap"
      );
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    
    await mutate({
      activation_token: activationToken,
      activation_code: verificationNumber,
    }).unwrap();
  };

  const handlerInputChange = (index, value) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      <h1 className={``}>Verify Your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div className="m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="text"
            key={key}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
              invalidError
                ? "shake border-red-500"
                : "dark:border-white border-[#0000004a]"
            }`}
            ref={inputRefs[index]}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key]}
            onChange={(e) => handlerInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button className={``} onClick={verificationHandler}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
        Go back to sign in?{" "}
        <span className="text-[#2190ff] pl-1 cursor-pointer">Sign in</span>
      </h5>
    </div>
  );
};

export default ActivateUserContainer;

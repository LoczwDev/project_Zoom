import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { editProfileUser } from "../../../../../service/usersApi";
import toast from "react-hot-toast";
import { userActions } from "../../../../../store/reducers/userReducers";
import images from "../../../../../constants/images/images";
import AvatarProfile from "./AvatarProfile";
const InfoProfile = () => {
  // setUp
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState(null);
  const [checkEdit, setCheckEdit] = useState(false);
  const [formData, setFormData] = useState({});

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name }) => {
      return editProfileUser({
        name: name,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      toast.success("Chỉnh sữa thành công");
      setCheckEdit(false);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    setDataUser(userState?.userInfo.user);
  }, [userState.userInfo]);

  //   data
  const dataInfo = [
    {
      type: "input",
      input: "text",
      name: "Name",
      id: "name",
      value: dataUser?.name,
    },
    {
      type: "input",
      input: "text",
      name: "Country",
      id: "country",
      value: "Viet Nam",
    },
    {
      type: "input",
      input: "text",
      name: "Tinh",
      id: "tinh",
      value: "Dong thap",
    },
    {
      type: "input",
      input: "text",
      name: "Email",
      id: "email",
      value: dataUser?.email,
    },
    {
      type: "input",
      input: "text",
      name: "Address",
      id: "address",
      value: "Tân Phú Châu Thành Đồng Tháp",
    },
    {
      type: "textarea",
      name: "Mota",
      id: "mota",
      value: "Tân Phú Châu Thành Đồng Tháp",
    },
  ];
  //   Function
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlerEditProfile = () => {
    mutate({ name: formData.name });
  };
  console.log(formData, "formData");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg uppercase">Info Profile</h4>
        <CiEdit
          size={30}
          onClick={() => setCheckEdit(!checkEdit)}
          className="cursor-pointer"
        />
      </div>
      <div className="mt-4 grid gap-5 lg:grid-cols-[140px_auto] overflow-hidden">
        <AvatarProfile dataUser={dataUser} checkEdit={checkEdit} />
        <div className="flex flex-col gap-4">
          {dataInfo?.map((item, index) =>
            item.type === "input" ? (
              <div key={index} className="flex items-center gap-10">
                <label htmlFor={item.id} className="text-[#898989] w-1/6">
                  {item.name}
                </label>

                {!checkEdit ? (
                  <span>{item.value}</span>
                ) : (
                  <input
                    type={item.input}
                    defaultValue={item.value}
                    id={item.id}
                    onChange={handleInputChange}
                    disabled={item.id === "email"}
                    className="w-full border px-3 py-1.5 outline-none rounded-lg"
                  />
                )}
              </div>
            ) : (
              <div key={index} className="flex items-center gap-10">
                <label htmlFor={item.id} className="text-[#898989] w-1/6">
                  {item.name}
                </label>

                {!checkEdit ? (
                  <span>{item.value}</span>
                ) : (
                  <textarea
                    name=""
                    id={item.id}
                    onChange={handleInputChange}
                    className="w-full border px-3 py-1.5 outline-none rounded-lg"
                    value={item.value}
                    rows={4}
                  ></textarea>
                )}
              </div>
            )
          )}

          {checkEdit && (
            <div className="flex justify-end items-center gap-5">
              <button
                onClick={() => setCheckEdit(false)}
                type="button"
                class="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
              >
                Cancel
              </button>
              <button
                onClick={handlerEditProfile}
                type="button"
                class="inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
                data-twe-ripple-init
              >
                Success
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default InfoProfile;

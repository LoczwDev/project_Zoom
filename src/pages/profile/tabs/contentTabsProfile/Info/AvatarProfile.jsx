import React, { useEffect } from "react";
import images from "../../../../../constants/images/images";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { udpateAvatarProfile } from "../../../../../service/usersApi";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../../store/reducers/userReducers";
import { Loader } from "../../../../../components/loader/Loader";

const AvatarProfile = ({ dataUser, checkEdit }) => {
  // Setup
  const dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ avatar }) => {
      return udpateAvatarProfile({
        avatar: avatar,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Update Avatar thành công");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(isPending);

  //   Function
  const avatarHandler = async (e) => {
    const fileRender = new FileReader();

    fileRender.onload = async () => {
      if (fileRender.readyState === 2) {
        const avatar = fileRender.result;
        await mutate({ avatar: avatar }); // Ensure mutate is an async function
      }
    };

    fileRender.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      {isPending && <Loader />}
      <div class="px-3.5 flex flex-col gap-1">
        <input
          accept="image/png, image/gif, image/jpeg"
          type="file"
          id="fileInput"
          onChange={avatarHandler}
          class="hidden"
        />
        <a href="/profile/0" class="pointer-events-none w-full">
          <div
            class="h-min w-fit cursor-pointer inline-block flex-none mb-6 mt-4 relative "
            style={{ marginTop: "19.6px" }}
          >
            <img
              class="absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-auto"
              alt="frame-avatar"
              src="https://s3-sgn09.fptcloud.com/codelearnstorage/files/attachfiles/Fr_go1_319445bca2aa4c558e8dff6febe11306.png"
            />
            <img
              class="bg-white rounded-full overflow-hidden aspect-square object-cover"
              src={dataUser?.avatar ? dataUser?.avatar.url : images.Avatar}
              alt="avatar"
              width="98"
              height="98"
            />
          </div>
        </a>
        {checkEdit && (
          <>
            <div class="mt-8 text-sm text-center">Ảnh đại diện của bạn</div>
            <label
              htmlFor="fileInput"
              class="inline-block cursor-pointer rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              type="button"
              data-button="true"
            >
              <span class="">Chọn ảnh</span>
            </label>
          </>
        )}
      </div>
    </>
  );
};

export default AvatarProfile;

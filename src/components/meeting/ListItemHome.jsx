import React, { useState } from "react";
import icons from "../../constants/icons/icons";
import { ItemHome } from "./ItemHome";
import { useNavigate } from "react-router-dom";
import ModalMetting from "./ModalMetting";
import { useSelector } from "react-redux";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};
export const ListItemHome = () => {
  const navigate = useNavigate();
  const [stateMetting, setStateMetting] = useState("");
  const [callDetail, setCallDetail] = useState(null);
  const [values, setValues] = useState(initialValues);

  const userState = useSelector((state) => state.user);
  const user = userState?.userInfo?.user;
  const client = useStreamVideoClient();

  const createMettingHandler = async () => {
    if (!client || !user) return;

    try {
      // Kiểm tra điều kiện trước khi tạo cuộc họp
      if (!values.dateTime) {
        toast.error("Please select a date and time");
        return;
      }

      // Tạo id ngẫu nhiên cho cuộc họp
      const id = crypto.randomUUID();

      // Gọi client để tạo cuộc họp
      const call = client.call("default", id);
      console.log(call);
      if (!call) throw new Error("Failed to create meeting");

      // Lấy thời gian bắt đầu từ giá trị dateTime
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      // Gọi API để tạo hoặc lấy cuộc họp
      call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      // Lưu thông tin cuộc họp
      setCallDetail(call);
      console.log(callDetail, "callDetail");

      // Log giá trị description sau khi đã xử lý
      console.log(values.description);

      // Điều hướng đến trang hành động cuộc họp nếu không có mô tả
      if (!values.description) {
        navigate(`/meetingAction/${call.id}`);
      }

      // Thông báo thành công
      toast.success("Meeting Created");
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error);
      toast.error("Failed to create Meeting");
    }
  };

  const dataListHome = [
    {
      title: "New Meeting",
      content: "Setup a new recording",
      bg: "bg-orange",
      icon: icons.Plus,
      handlerClick: () => setStateMetting("isNewMeeing"),
    },
    {
      title: "Join Meeting",
      content: "via invitation link",
      bg: "bg-blue",
      icon: icons.User,
      handlerClick: () => setStateMetting("isJoinMeeting"),
    },
    {
      title: "Schedule Meeting",
      content: "Plan your meeting",
      bg: "bg-violet",
      icon: icons.Calendar,
      handlerClick: () => setStateMetting("isScheduleMetting"),
    },
    {
      title: "View Recordings",
      content: "Meeting recordings",
      bg: "bg-yellow",
      icon: icons.Video,
      handlerClick: () => navigate("/meeting/recordings"),
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {dataListHome.map((item, index) => (
        <ItemHome item={item} key={index} />
      ))}
      <ModalMetting
        isOpen={stateMetting === "isNewMeeing"}
        onClose={() => setStateMetting("")}
        title={"Start an Instant Metting"}
        className={"text-center"}
        buttonText={"Start metting"}
        handlerClick={createMettingHandler}
      />
    </section>
  );
};

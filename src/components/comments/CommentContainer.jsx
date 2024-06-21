import React from "react";
import images from "../../constants/images/images";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";

export const CommentContainer = () => {
  return (
    <div className="border-b py-5 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 border">
          <img src={images.Avatar} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[16px] font-[600]">Tran Huu Loc</h3>
          <span className="text-[14px] font-[400]">June 5, 2024</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
      </div>
      <div>
        <p>
          Catherine is an incredible teacher))) I work with her in the field of
          marketing and I am super satisfied. You can feel her professionalism,
          experience, support, understanding and vision of what the student
          needs. In addition, she is a very wonderful person, kind, responsive
          and always treats you with understanding. Highly recommended !
        </p>
      </div>
      <div></div>
    </div>
  );
};

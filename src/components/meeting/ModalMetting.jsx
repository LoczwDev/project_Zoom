import React, { useEffect } from "react";
const ModalMetting = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handlerClick,
}) => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-3xl text-center">{title}</h3>
          <div className="flex items-center justify-center w-full my-10">
            <button
              onClick={handlerClick}
              className="w-full text-xl font-extrabold bg-indigo-500 py-3 rounded-lg hover:bg-opacity-45 duration-300"
            >
              {buttonText}
            </button>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalMetting;

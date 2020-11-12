import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleModal, handleConfirm } from "./../actions/index";

// modalOpen
// {handleModal, handleConfirm}
const ConfirmModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.handleLikes.modalOpen);

  if (!modalOpen) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="confirm__modal">
        <div className="confirmation-text">
          <p>Are you sure?</p>
        </div>
        <div className="btn-group-modal">
          <button
            className="btn-cancel"
            onClick={() => dispatch(handleModal(false))}
          >
            Cancel
          </button>
          <button className="btn-ok" onClick={() => dispatch(handleConfirm())}>
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;

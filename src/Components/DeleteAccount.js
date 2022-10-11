import React, { useRef } from "react";
import ReactDom from "react-dom";
export const DeleteAccount = ({ setShowDeleteModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowDeleteModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Are you sure you want to delete your account?</h2>
        <button>YES</button>
        <button onClick={() => setShowDeleteModal(false)}>No</button>

        <button
          className="closeModal"
          onClick={() => setShowDeleteModal(false)}
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("passwordPortal")
  );
};

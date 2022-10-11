import React, { useRef } from "react";
import ReactDom from "react-dom";
export const ResetUserName = ({ setShowUsernameModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowUsernameModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Reset Username</h2>

        <button className="closeModal" onClick={() => setShowUsernameModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("usernamePortal")
  );
};

import React, { useRef } from "react";
import ReactDom from "react-dom";
export const ResetPassword = ({ setShowPasswordModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowPasswordModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Reset Password</h2>
      
        <button className="closeModal" onClick={() => setShowPasswordModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("passwordPortal")
  );
};

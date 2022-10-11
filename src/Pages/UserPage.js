import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ResetPassword } from "../Components/ResetPassword";
import { ResetUserName } from "../Components/ResetUsername";
import { DeleteAccount } from "../Components/DeleteAccount";

const UserPage = () => {
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const openUsernameModal = () => {
    setShowUsernameModal(true);
  };
  const openPasswordModal = () => {
    setShowPasswordModal(true);
  };
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };
  return (
    <div className="userPage">
      <div className="userPageHeader">My Account</div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="userPageBody">
        <div className="userPageGrouping">
          <div className="userInfoGrouping">
            {" "}
            <div>My Username:</div>
            <div>Username</div>
          </div>

          <button onClick={openUsernameModal}>Reset Username</button>
          {showUsernameModal ? (
            <ResetUserName setShowUsernameModal={setShowUsernameModal} />
          ) : null}
        </div>
        <div className="userPageGrouping">
          <div className="userInfoGrouping">
            <div>My Password:</div>
            <div>Password</div>
          </div>

          <button onClick={openPasswordModal}>Reset Password</button>
          {showPasswordModal ? (
            <ResetPassword setShowPasswordModal={setShowPasswordModal} />
          ) : null}
        </div>
        <button onClick={openDeleteModal}>Delete My Account</button>
        {showDeleteModal ? (
          <DeleteAccount setShowDeleteModal={setShowDeleteModal} />
        ) : null}
      </div>
    </div>
  );
};

export default UserPage;

import React from "react";
import "./style.css";

const NotAuthorized = () => {
  return (
    <div className="not-auth">
      <h1>Access Denied</h1>
      <p>You must be signed in to view this page.</p>
    </div>
  );
};

export default NotAuthorized;

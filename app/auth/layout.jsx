import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full bg-sky-500">
      {children}
    </div>
  );
};

export default AuthLayout;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/authSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleLogin = () => {
    dispatch(login());
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login to visit private page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

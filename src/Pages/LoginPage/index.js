import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../Helpers/AuthContext";
import api from "../../Helpers/api-endpoint";

import { Toast, ToastContainer } from "react-bootstrap";

import Logo from "../../Assets/img/klabber.jpg";
import "./style.css";

function LoginPage() {
  const history = useHistory();
  const { login } = useAuth();
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const userData = {
        email,
        password,
      };
      let theData = await api.post(`/api/auth/login`, userData);
      login(theData.data.access_token);
      history.push("/dashboard");
    } catch (err) {
      setShowToast(true);
    }
  };

  return (
    <div className="__loginPage">
      <div className="__loginLeft text-center">
        <img src={Logo} alt="" />
        <h1>Klabber.ID</h1>
      </div>
      <div className="__loginRight">
        <div className="__loginFormWrapper">
          <h2>Login</h2>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100 mt-5">Login</button>
          </form>
        </div>
      </div>
      <MyNotifyToast showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
}

function MyNotifyToast({ setShowToast, showToast }) {
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        bg="danger"
      >
        <Toast.Header>
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Email atau Password salah!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default LoginPage;

import React from "react";

import Logo from "../../Assets/img/klabber.jpg";
import "./style.css";

function LoginPage() {
  return (
    <div className="__loginPage">
      <div className="__loginLeft text-center">
        <img src={Logo} alt="" />
        <h1>Klabber.ID</h1>
      </div>
      <div className="__loginRight">
        <div className="__loginFormWrapper">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className="btn btn-primary w-100 mt-5">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

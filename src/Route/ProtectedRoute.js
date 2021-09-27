import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    let theToken = localStorage.getItem("token");
    if (theToken !== null) {
      setToken(theToken);
    } else {
      setToken(null);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token !== null) {
          console.log(true);
          return <Component />;
        } else {
          console.log(false);
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;

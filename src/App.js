import React, { useEffect } from "react";
import { AuthProvider } from "./Helpers/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

import Router from "./Route";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;

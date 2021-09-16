import React, { useEffect } from "react";
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
      <Router />
    </div>
  );
}

export default App;

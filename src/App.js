import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
//import About from "./Component/About";
import Alert from "./Component/Alert";

import TextForm from "./Component/TextForms";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success ");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About_TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyse" mode={mode} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

export default function TextForms(props) {
  const handleOnChange = (event) => {
    //  console.log("On changed");
    setText(event.target.value);
  };
  const handleUpChange = () => {
    //  console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied the Text", "success");
  };
  const handleLoChange = () => {
    //  console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearChange = () => {
    //  console.log(text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the Text", "success");
  };
  const handleExtraSpace = () => {
    //  console.log(text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter the text"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#8f8c8c" : "white",
              color: props.mode === "light" ? "black " : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpChange}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoChange}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearChange}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text have</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length - text.split(" ").length + 1} Characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read the text
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

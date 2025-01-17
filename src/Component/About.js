//import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(143, 140, 140)" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "rgb(45, 43, 43)" : "white",
  };
  //   });

  return (
    <>
      <div>
        <div className="container">
          <h1 className="my-3">About Us</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  style={myStyle}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong> Analyze your text </strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                style={myStyle}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  Textutils gives you a way to analyze your text quickly and
                  efficiently. Like:
                  <li>Convert to Upper Case</li>
                  <li>Convert ot Lower Case</li>
                  <li>Remove Extra space</li>
                  <li>Copy text</li>
                  <li>Preview</li>
                  <li>Expected Time to read</li>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  style={myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong> Free to use </strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                style={myStyle}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  TextUtils is a free character counter tool that provides
                  instant character count & word count statistics for a given
                  text. TextUtils reports the number of words and character.
                  Thus it is suitable for writing text with word/ character
                  limit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  style={myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong> Browser Compatible </strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body" style={myStyle}>
                  This word counter software works in any web browsers such as
                  Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                  count characters in facebook, blog, books, excel document, pdf
                  document, essays, etc.
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container my-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={toggleStyle}
            >
              {btntext}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

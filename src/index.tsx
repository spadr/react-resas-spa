import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";

const StyledBody = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(100, 100, 130, 0.999);
  background-color: rgba(120, 120, 160, 0.01);
`;

const StyledCode = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledBody>
      <App />
    </StyledBody>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

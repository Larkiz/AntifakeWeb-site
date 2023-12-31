import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/button-styles.css";
import "./styles/card-style.css";
import "./styles/pop-up.css";
import "./styles/pre-loader.css";
import "./styles/style-article-screen.css";
import "./styles/style.css";
import "./styles/media-queries-adaptive.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

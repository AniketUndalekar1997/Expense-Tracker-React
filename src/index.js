import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./Context/Context";
import { SpeechProvider } from "@speechly/react-client";

reactDom.render(
  <SpeechProvider appId="99cbf12b-9eac-4f0d-8408-b2e0247d8d66" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

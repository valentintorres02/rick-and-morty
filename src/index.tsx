import "./styles/tailwind.css";

import { render } from "react-dom";

import App from "./App";
import { Providers } from "./Providers";

const root = document.getElementById("root");

render(
  <Providers>
    <App />
  </Providers>,
  root
);

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MagazineController } from "./MagazineController";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <MagazineController />
  </StrictMode>,
  rootElement
);

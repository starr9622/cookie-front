import * as React from "react";
import { render } from "react-dom";
import "./styles/style.scss";
import Router from "../src/routes";

const root = document.querySelector("#root");

render(<Router />, root);

import {render} from "react-dom";
import App from "../components/App";
import contents from "../../assets/contents.yaml";
import React from "react";


render(<App contents={contents} />, document.getElementById("root"));

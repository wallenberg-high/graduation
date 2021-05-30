import {render} from "react-dom";
import App from "../components/App";
import data from "../../data/grad.yaml";
import React from "react";


console.log(data);

render(<App sections={data} />, document.getElementById("root"));


//import yaml from "js-yaml";
//import fs from "fs";
//
//
//const data = fs.readFileSync("data/grad.yaml");
//const json = yaml.load(data);
//
//console.log(JSON.stringify(json, null, 2));

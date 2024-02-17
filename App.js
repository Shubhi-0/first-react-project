import { React } from "react";
import { ReactDOM } from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hey hey"),
    React.createElement("h2", {}, "h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hey hey"),
    React.createElement("h2", {}, "h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

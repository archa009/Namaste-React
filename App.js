import React from "react";
import ReactDOM from "react-dom/client";

//heading
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react!!"
);

//nested structure
const nestedElements = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "C1h1" }, "H1 tag!!"),
    React.createElement("h2", { key: "C1h2" }, "H2 tag!!"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "C2h1" }, "H1 tag!!"),
    React.createElement("h2", { key: "C2h2" }, "H2 tag!!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);

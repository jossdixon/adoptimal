import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mollie",
      animal: "Dog",
      breed: "Lurcher",
    }),
    React.createElement(Pet, {
      name: "Meg",
      animal: "Dog",
      breed: "Collie",
    }),
    React.createElement(Pet, {
      name: "Miepje",
      animal: "Dog",
      breed: "Saluki",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Mollie" animal="dog" breed="Lurcher" />
      <Pet name="Meg" animal="dog" breed="Collie" />
      <Pet name="Miepje" animal="dog" breed="Saluki" /> */}
    </div>
  )
}

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Mollie",
//       animal: "Dog",
//       breed: "Lurcher",
//     }),
//     React.createElement(Pet, {
//       name: "Meg",
//       animal: "Dog",
//       breed: "Collie",
//     }),
//     React.createElement(Pet, {
//       name: "Miepje",
//       animal: "Dog",
//       breed: "Saluki",
//     }),
//   ]);
// };

render(<App />, document.getElementById("root"));

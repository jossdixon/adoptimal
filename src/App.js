import React from "react";
import { render } from "react-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById("root"));

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

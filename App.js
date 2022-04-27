const Pet = () => {
  return (
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Mollie"),
      React.createElement("h2", {}, "Dog"),
      React.createElement("h2", {}, "Lurcher"),
    ])
  )
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

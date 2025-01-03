const divP = React.createElement("div", { id: "parent" }, [
  React.createElement("div1", { id: "div1" }, [
    React.createElement("h2", { id: "div1h1" }, "i am 1 in div 1"),
    React.createElement("h2", { id: "div1h1" }, "i am 2 in div 1"),
  ]),
  React.createElement("div2", { id: "div2" }, [
    React.createElement("h2", { id: "div1h1" }, "i am 1 in div 2"),
    React.createElement("h2", { id: "div1h1" }, "i am 2 in div 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divP);
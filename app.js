const headings = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "parents" }, [
    React.createElement("div", { id: "childs" }, [
      React.createElement("h1", {}, "This is h1 tag"),
      React.createElement("h2", {}, "This is h2 tag"),
    ]),
  ]),
]);

const roots = ReactDOM.createRoot(document.getElementById("containers"));
roots.render(headings);

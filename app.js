// --------****** REACT ----------------------------------------------------------------**************

import React from "react";
import ReactDOM from "react-dom/client";

// -------** BASIC ****----------------

let heading = React.createElement("h1", {
    "id" : "header",
    "className" : "head" // giving class as attribute
}, "Hello from React");

// header is just react element which is a javascript object. Its not the html tag yet.
console.log(heading);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render function takes the heading object and converts it into html heading tag and put it in the DOM tree.

// **---------- Nested HTML tags ****-------

let parent = React.createElement("div",{"id": "parent"},
    React.createElement("div", {"id" : "child"}, [
        React.createElement("h1", {}, "I am nested h1 heading"),
        React.createElement("h2", {className: "head"}, "I am nested h2 heading") // array of children
    ]));

console.log(parent);

root.render(parent);
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//boots up the react app by
//calling <App /> function and get all jsx in it to html
//doc. etc is telling react where to show the results
//iin the div with the id of root in index.html
ReactDOM.render(<App />, document.getElementById("root"));

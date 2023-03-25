import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );
// }

function Greeting() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "My First Component")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

export default Greeting;

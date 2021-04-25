import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

// function Hi({firstName,lastName}) {
//   return (
//     <div>
//       Hello <strong>{firstName} {lastName}!</strong>
//     </div>
//   );
// }

const Hi = ({ firstName, lastName }) => {
  return (
    <div>
      Hello{" "}
      <strong>
        {firstName} {lastName}!
      </strong>
    </div>
  );
};

ReactDOM.render(
  <Hi firstName="Michael" lastName="Qiao" />,
  document.querySelector("#root")
);

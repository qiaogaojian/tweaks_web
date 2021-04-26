import React from "react";
const OneTimeButton = (props) => {
  const [clickState, setClickState] = React.useState(false);
  return (
    <button
      onClick={() => {
        setClickState(true);
        props.onClick();
      }}
      disabled={clickState}
    >
      You Can Only Click Me Once.
    </button>
  );
};

export default OneTimeButton;

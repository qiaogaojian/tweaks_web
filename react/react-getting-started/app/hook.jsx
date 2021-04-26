import React from "react";
const OneTimeButton = (props) => {
  const [clickState, setClickState] = React.useState(false);

  const doClick = () => {
    setClickState(true);
    props.onClick();
  };

  return (
    <button onClick={clickState ? undefined : doClick} disabled={clickState}>
      You Can Only Click Me Once.
    </button>
  );
};

export default OneTimeButton;

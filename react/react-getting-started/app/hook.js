import React from "react";

function useToggle(initValue) {
  const [value, setValue] = React.useState(initValue);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

// function useBool(initValue) {
//   const [value, setValue] = React.useState(initValue);
//   const setTrue = () => {
//     setValue(true);
//   };
//   const setFalse = () => {
//     setValue(false);
//   };
//   return [value, setTrue, setFalse];
// }
// export { useBool, useToggle };

export default useToggle;

import React from "react";

export function useLight(initValue) {
  const [value, setValue] = React.useState(isLight ? "light" : "dark");

  const [isLight, toggleLight, setLight] = useToggle(initValue, setValue);
  const [on, off] = useBool(setLight, setValue);

  return [isLight, value, toggleLight, on, off];
}

function useToggle(initValue, setLabel) {
  const [value, setValue] = React.useState(initValue);
  const toggleValue = () => {
    setValue(!value);
    setLabel(!value ? "light" : "dark");
  };
  return [value, toggleValue, setValue];
}

function useBool(setLight, setLabel) {
  const setTrue = () => {
    setLight(true);
    setLabel("light");
  };
  const setFalse = () => {
    setLight(false);
    setLabel("dark");
  };
  return [setTrue, setFalse];
}

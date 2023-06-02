import { useState } from "react";

export function useThrottle(func, delay){
  const [flag, setFlag] = useState(true);

  return function () {
    let args = arguments,
      context = this;
    if (flag) {
      func.apply(context, args);
      setTimeout(() => setFlag(true), delay);
      setFlag(false);
    }
  };
};
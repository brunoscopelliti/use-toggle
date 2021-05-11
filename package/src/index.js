import { useCallback, useState } from "react";

/**
 * A React hook that offers a shortcut to toggle a boolean state.
 * @name useToggle
 * @param {boolean} [initialValue]
 * @returns {[boolean, import("./index").SetState]}
 */
const useToggle =
  (initialValue) => {
    const [value, setValue] = useState(!!initialValue);

    const toggle = useCallback(
      () => {
        setValue(!value);
      },
      [value]
    );

    return [value, toggle];
  };

export default useToggle;

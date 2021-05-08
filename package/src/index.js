import { useCallback, useState } from "react";

/**
 * @callback setState
 * @returns {void}
 */

/**
 * A React hook that offers a shortcut to toggle a boolean state.
 * @name useToggle
 * @param {Boolean} initialValue
 * @returns {[boolean, setState]}
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

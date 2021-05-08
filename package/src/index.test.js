import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "./";

describe("useToggle", () => {
  it("returns `false` as default state", () => {
    const { result } = renderHook(() => useToggle());

    const [state] = result.current;

    expect(state).toBe(false);
  });

  it("returns the state, and the handler to change it", () => {
    let state, toggle;

    renderHook(
      () => {
        [state, toggle] = useToggle(true);
      }
    );

    expect(state).toBe(true);

    act(toggle);

    expect(state).toBe(false);

    act(toggle);

    expect(state).toBe(true);
  });
});

type SetState = () => void;

declare const useToggle : (initialValue ?: boolean) => [boolean, SetState];

export default useToggle;

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice"; // path to your slice

// Styled button reads colors from your theme objects (lightTheme / darkTheme)
const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius || "8px"};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;

  background: ${({ theme, mode }) =>
    mode === "light" ? theme.cardBg : theme.cardBg};
  color: ${({ theme }) => theme.text};
  
  transition: transform 150ms ease, opacity 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
    box-shadow: ${({ theme }) => theme.shadow || "none"};
  }

  /* small icon circle inside button */
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme, mode }) =>
      mode === "light" ? theme.primary : theme.primary};
    color: #fff;
    font-size: 12px;
  }
  
`;

const ThemeToggler = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <ToggleButton
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      role="button"
      mode={mode}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      <span className="icon">{mode === "light" ? "🌙" : "☀️"}</span>
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </ToggleButton>
  );
};

export default ThemeToggler;

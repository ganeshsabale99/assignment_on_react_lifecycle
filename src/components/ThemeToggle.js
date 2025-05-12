import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"} theme</button>;
};

export default ThemeToggle;
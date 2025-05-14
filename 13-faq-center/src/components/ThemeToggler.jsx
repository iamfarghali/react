import { useTheme } from '../contexts/ThemeContext';

function ThemeToggler() {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Dark | Light</button>;
}

export default ThemeToggler;

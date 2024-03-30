import { createContext } from "react";

const defaultValues = {
  theme: "light",
};

const ThemeContext = createContext(defaultValues);
export default ThemeContext;

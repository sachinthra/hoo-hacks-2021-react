import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const LightTheme = {
    MainBgTheme: "#f0f2f5",
    headBgTheme: "#ffffff",
    UiButtonTheme: "#e4e6eb",
    UiTextTheme: "#050505",
    transparentBG: "rgba(214, 213, 213, 0.7)",
  };
  const DarkTheme = {
    MainBgTheme: "#18191a",
    headBgTheme: "#242526",
    UiButtonTheme: "#3a3b3c",
    UiTextTheme: "#e4e6eb",
    transparentBG: "rgba(40, 40, 40, 0.7)",
  };

  function handleToggleTheme() {
    setIsLightTheme((previsLightTheme) => !previsLightTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        Themes: isLightTheme ? LightTheme : DarkTheme,
        ToggleTheme: handleToggleTheme,
        isLightTheme: isLightTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";
import TuDobg from '../assets/bg-TuDo-min.jpg';
import NguoiTimVangbg from '../assets/bg-NguoiTimVang-min.jpg';

// Theme context
const ThemeContext = createContext();

// Default themes
const TuDoTheme = {
    color: "#1A56DB",
    background: `url(${TuDobg})`,
};

const NguoiTimVangTheme = {
    color: "#B9400C",
    background: `url(${NguoiTimVangbg})`,
};

// Theme provider
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(TuDoTheme);

    const setColor = (color) => setTheme((t) => ({ ...t, color }));
    const setBackground = (background) => setTheme((t) => ({ ...t, background }));

    const setThemeTuDo = () => setTheme(TuDoTheme);
    const setThemeNguoiTimVang = () => setTheme(NguoiTimVangTheme);

    return (
        <ThemeContext.Provider value={{ theme, setColor, setBackground, setThemeTuDo, setThemeNguoiTimVang }}>
            <div
                style={{
                    color: theme.color,
                    backgroundImage: theme.background,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

// Custom hook to use theme
export function useTheme() {
    return useContext(ThemeContext);
}

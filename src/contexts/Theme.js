import React, { createContext, useContext, useState } from "react";
import TuDobg from '../assets/compressed_gif_example_1.gif';
import TuDoIcon from '../assets/icons8-twitter-bird-50.png';
import NguoiTimVangbg from '../assets/bg_NgTimVang_new_min.jpg';
import NguoiTimVangIcon from '../assets/Shovel.png';
// Theme context
const ThemeContext = createContext();

// Default themes
const TuDoTheme = {
    name:"TuDo",
    color: "#125172",
    background: `url(${TuDobg})`,
    icon: TuDoIcon,
};

const NguoiTimVangTheme = {
    name:"NgTimVang",
    color: "#B9400C",
    background: `url(${NguoiTimVangbg})`,
    icon: NguoiTimVangIcon,
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

"use client"
import { Moon } from "lucide-react"
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme") === "dark";
        setIsDark(saved);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <div className="flex flex-row">
            <Moon onClick={() => setIsDark((prev) => !prev)} className={`cursor-pointer m-2 ${!isDark ? 'fill-amber-50' : 'fill-black'}`}></Moon>
        </div>
    );
}
"use client";
import React, {useState, useEffect} from 'react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {!isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle
import React, { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if(window.matchMedia('(prefers-color-scheme: dark)').matches){
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<nav 
			className=" text-lg  "
		>
		<div 
			className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700"
		>
			<Link to="/">Lottógenerátor</Link>

			<button onClick={handleThemeSwitch}>
				<CgDarkMode fontSize={24} />
			</button>
		</div>

		<div className="flex flex-wrap justify-center gap-4 p-2">
				<NavLink className="lotE menuLink" to="/lottoE">EuroJackpot</NavLink>
				<NavLink className="lot5 menuLink" to="/lotto5">Ötöslottó</NavLink>
				<NavLink className="lot6 menuLink" to="/lotto6">Hatoslottó</NavLink>
				<NavLink className="lot7 menuLink" to="/lotto7">Skandináv lottó</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;

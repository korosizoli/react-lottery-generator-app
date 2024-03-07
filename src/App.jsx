import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LottoE from "./pages/LottoE";
import Lotto5 from "./pages/Lotto5";
import Lotto6 from "./pages/Lotto6";
import Lotto7 from "./pages/Lotto7";

function App() {
	return (
		<div className="h-screen bg-slate-100 dark:bg-slate-900">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/lottoE" element={<LottoE />}/>
				<Route path="/lotto5" element={<Lotto5 />}/>
				<Route path="/lotto6" element={<Lotto6 />}/>
				<Route path="/lotto7" element={<Lotto7 />}/>
			</Routes>
		</div>
	);
}

export default App;

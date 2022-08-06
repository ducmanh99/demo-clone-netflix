import "./App.css";
// import Content from "./components/Content/Content";
// import Intro from "./components/Intro/Intro";
// import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
// import SearchMovies from "./components/SearchMovies/SearchMovies";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";

function App() {
	const { MovieDetail } = useSelector((state) => state.infoMovies);
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/demo-clone-netflix/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</BrowserRouter>
			{/* <SearchMovies /> */}
			{/* <Intro />
			<Content />
			<MoviesDetail
				movie={MovieDetail}
				showModal={MovieDetail ? true : false}
			/> */}
			{/* <Home /> */}
		</>
	);
}

export default App;

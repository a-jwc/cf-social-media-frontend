import { Router } from "@reach/router";
import "./styles/globals.css";
import { Helmet } from "react-helmet";
import Posts from "./components/posts";
import { Sidebar } from "./components/sidebar";
import { TopBar } from "./components/topbar";

function App() {
	return (
		<>
			<Helmet>
				<title>AJWC</title>
				<meta name="description" content="Simple Social Media" />
				<meta name="theme-color" content="#45507B" />
			</Helmet>
			<Sidebar />
      <TopBar />

			<Router>
				<Posts path="/" />
			</Router>
		</>
	);
}

export default App;

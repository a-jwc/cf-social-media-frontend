import { Router } from "@reach/router";
import "./styles/globals.css";
import { Helmet } from "react-helmet";
import Posts from "./components/posts";
import Post from "./components/post";
import { Sidebar } from "./components/sidebar";

function App() {
	return (
		<>
			<Helmet>
				<title>AJWC</title>
				<meta name="description" content="Simple Social Media" />
				<meta name="theme-color" content="#45507B" />
			</Helmet>
			<Sidebar />
			<Router>
				<Posts path="/" />
				<Post path="/posts/:id" title={""} content={""} />
			</Router>
		</>
	);
}

export default App;

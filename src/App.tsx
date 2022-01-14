import { Router, RouteComponentProps } from "@reach/router";
import "./styles/globals.css";

import Posts from "../../social-media-frontend/src/components/posts";
import Post from "../../social-media-frontend/src/components/post";
import { Sidebar } from "./components/sidebar";

function App() {
	return (
		<>
			<Sidebar />
			<Router>
				<Posts path="/" />
				<Post path="/posts/:id" title={""} content={""} />
			</Router>
		</>
	);
}

export default App;

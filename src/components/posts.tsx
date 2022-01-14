import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
// import styles from "../styles/Home.module.css";
import { RouteComponentProps } from "@reach/router";

// import globals from "./styles/globals";

interface PostProps {
	title: string;
	username: string;
	content: string;
}

const Posts = (props: RouteComponentProps) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const resp = await fetch("https://workers-rust.chauajw.workers.dev/posts", { mode: "cors" });
			const postsResp = await resp.json();
			setPosts(postsResp);
		};
		getPosts();
	}, []);

	console.log(posts);
	let postsJson = posts.map((post) => {
		console.log(JSON.parse(post));
		return JSON.parse(post);
	});

	console.log(postsJson);
	return (
		<div className="h-full w-auto mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col grow mb-32">
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Posts</h1>
				</header>
				{postsJson.map((post: PostProps) => (
					<section
						key={post.title}
						className="flex flex-col items-start bg-blend-soft-light bg-slate-100 border-2 border-grey-600 hover:border-indigo-400 hover:bg-indigo-200 hover:scale-105 p-4 m-4 w-1/3 mx-auto col-start-1 col-end-2 rounded-md"
					>
						<h1 className="basis-1/3 w-auto flex-shrink pr-4 flex-grow-0 m-1 leading-tight">
							<Link to={`/posts/${post.title}`}>
								<p className="font-medium">{post.title}</p>
							</Link>
							<Link to={`/user/${post.username}`}>
								<small className=" text-gray-500">{post.username}</small>
							</Link>
						</h1>
						<div className="basis-2/3 flex-grow m-1">
							<p>{post.content}</p>
						</div>
					</section>
				))}
			</div>
		</div>
	);
};

export default Posts;

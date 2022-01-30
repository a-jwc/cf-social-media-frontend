import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import { CreatePost } from "./createPost";
import { VoteButton } from "./voteButton";

interface PostProps {
	title: string;
	username: string;
	content: string;
	time: string;
	imageUrl: string;
	votes: number;
}

const Post = (post: PostProps) => {
	return (
		<section
			key={post.title}
			className="flex flex-col items-start bg-slate-100 border-2 border-grey-600 p-4 m-4 w-1/2 mx-auto col-start-1 col-end-2 rounded-md"
		>
			<h1 className="basis-1/3 w-auto pr-4 flex-grow-0 m-1 leading-tight">
				<p className="font-medium">{post.title}</p>
				<Link to={`/user/${post.username}`}>
					<small className=" text-gray-500">{post.username}</small>
				</Link>
			</h1>
			<div className="basis-2/3 flex-grow m-1">
				<p>{post.content}</p>
			</div>
			{post.imageUrl.length > 0 ? (
				<img src={post.imageUrl} alt="replacement" />
			) : null}
			<VoteButton {...post} />
		</section>
	);
};

const Posts = (props: RouteComponentProps) => {
	const [posts, setPosts] = useState([]);
	const [isPending, setIsPending] = useState(true);

	const getPosts = async () => {
		try {
			const resp = await fetch(
				"https://workers-rust.chauajw.workers.dev/posts",
				{
					mode: "cors",
				}
			);
			if (!resp.ok) {
				throw Error("Could not fetch data");
			}
			const postsResp = await resp.json();

			setPosts(postsResp);
		} catch (err) {
			console.error(err);
			setIsPending(false);
			alert("Could not get posts");
		}
		setIsPending(false);
	};

	useEffect(() => {
		getPosts();
	}, [setPosts, props]);

	let postsJson = posts.map((post) => {
		return JSON.parse(post);
	});

	return (
		<div className="h-full w-full mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col mb-32">
				<div className="mt-10 mb-8 mx-auto">
					<CreatePost getPosts={getPosts} setIsPending={setIsPending} setPosts={setPosts} posts={posts} />
				</div>
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Posts</h1>
				</header>
				{isPending && (
					<div className="text-center text-2xl text-white p-4 tracking-wide">
						Loading...
					</div>
				)}
				{postsJson.reverse().map((post: PostProps) => (
					<Post {...post} key={post.time} />
				))}
			</div>
		</div>
	);
};

export default Posts;

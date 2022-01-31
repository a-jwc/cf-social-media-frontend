import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { CreatePost } from "./createPost";
import { PostProps } from "../ts/interfaces";
import { Post } from "./post";

const Posts = (props: RouteComponentProps) => {
	const [posts, setPosts] = useState<PostProps[]>([]);
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
			let postsJson = postsResp.map((post: unknown) => {
				return JSON.parse(post as string);
			});
			setPosts(postsJson);
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

	return (
		<div className="h-full w-full mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col mb-32">
				<div className="mt-10 mb-8 mx-auto">
					<CreatePost
						getPosts={getPosts}
						setIsPending={setIsPending}
						setPosts={setPosts}
						posts={posts}
					/>
				</div>
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Posts</h1>
				</header>
				{isPending && (
					<div className="text-center text-2xl text-white p-4 tracking-wide">
						Loading...
					</div>
				)}
				{posts.map((post: PostProps) => (
					<Post {...post} key={post.time} />
				))}
			</div>
		</div>
	);
};

export default Posts;

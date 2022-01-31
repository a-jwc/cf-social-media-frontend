import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { CreatePost } from "./createPost";
import { PostProps } from "../ts/interfaces";
import { Post } from "./post";
import { useMapPosts, useFetchPosts } from "../hooks/useGetPosts";

const Posts = (props: RouteComponentProps) => {
	const { posts, isPending, setPosts, getPosts } = useFetchPosts("https://workers-rust.chauajw.workers.dev/posts");
	const postsMap = useMapPosts(posts);

	return (
		<div className="h-full w-full mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col mb-32">
				<div className="mt-10 mb-8 mx-auto">
					<CreatePost getPosts={getPosts} setPosts={setPosts} posts={posts} />
				</div>
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Posts</h1>
				</header>
				{isPending && (
					<div className="text-center text-2xl text-white p-4 tracking-wide">
						Loading...
					</div>
				)}
				{postsMap}
			</div>
		</div>
	);
};

export default Posts;

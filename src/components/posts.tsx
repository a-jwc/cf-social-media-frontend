import { RouteComponentProps } from "@reach/router";
import { CreatePost } from "./createPost";
import { useMapPosts, useFetchPosts } from "../hooks/useGetPosts";
import { useState } from "react";

const Posts = (props: RouteComponentProps) => {
	const [isPending, setIsPending] = useState(true);
	const { posts, setPosts } = useFetchPosts("https://workers-rust.chauajw.workers.dev/posts", setIsPending);
	const postsMap = useMapPosts(posts);

	return (
		<div className="h-full w-full mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col mb-32">
				<div className="mt-10 mb-8 mx-auto">
					<CreatePost setPosts={setPosts} posts={posts} />
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

import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import { CreatePost } from "./createPost";
import { TopBar } from "./topbar";
import {AiOutlineLike, AiFillLike} from "react-icons/ai";
import { LikeButton } from "./likeButton";

interface PostProps {
	title: string;
	username: string;
	content: string;
	time: string;
	imageUrl: string;
  votes: number;
}
// class Post extends React.Component {

// }
const Post = (post: PostProps) => {
	return (
		<section
			key={post.title}
			className="flex flex-col items-start bg-slate-100 border-2 border-grey-600 p-4 m-4 w-1/2 mx-auto col-start-1 col-end-2 rounded-md"
		>
			<h1 className="basis-1/3 w-auto pr-4 flex-grow-0 m-1 leading-tight">
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
			{post.imageUrl.length > 0 ? (
				<img src={post.imageUrl} alt="replacement" />
			) : null}
      <LikeButton votes={post.votes} />
		</section>
	);
};

const Posts = (props: RouteComponentProps) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const resp = await fetch(
				"https://workers-rust.chauajw.workers.dev/posts",
				{ mode: "cors" }
			);
			const postsResp = await resp.json();
			setPosts(postsResp);
		};
		getPosts();
	}, [setPosts, props]);

	console.log(posts);
	let postsJson = posts.map((post) => {
		console.log(JSON.parse(post));
		return JSON.parse(post);
	});

	console.log(postsJson);
	return (
		<div className="h-full w-3/4 mx-auto grid grid-cols-1 grid-rows-1 grid-flow-col font-sans bg-primary-500 font-all">
			<div className="flex flex-col mb-32">
				<div className="mt-10 mb-8 mx-auto">
					<CreatePost />
				</div>
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Posts</h1>
				</header>
				{postsJson.reverse().map((post: PostProps) => (
					<Post {...post} key={post.title} />
				))}
			</div>
		</div>
	);
};

export default Posts;

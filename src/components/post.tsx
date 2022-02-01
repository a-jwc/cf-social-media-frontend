import { Link } from "@reach/router";
import { VoteButton } from "./voteButton";
import { PostProps } from "../ts/interfaces";

export const Post = (post: PostProps) => {
	return (
		<section
			key={post.title}
			className="post flex flex-col items-start bg-slate-100 border-2 border-grey-600 p-4 m-4 w-1/2 mx-auto col-start-1 col-end-2 rounded-md"
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
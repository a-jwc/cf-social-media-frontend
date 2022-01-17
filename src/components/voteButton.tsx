import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import React, { useState } from "react";

interface PostProps {
	title: string;
	username: string;
	content: string;
	time: string;
	imageUrl: string;
	votes: number;
}

export const LikeButton = (props: PostProps) => {
	const [votes, setVotes] = useState(props.votes);

	let body = {
		title: props.title,
		username: props.username,
		content: props.content,
		time: props.time,
		imageUrl: props.imageUrl,
		votes: props.votes + 1,
	};
	console.log("body", body);
	const handleClick = async () => {
		setVotes(votes + 1);
		const resp = await fetch(
			"https://workers-rust.chauajw.workers.dev/updatevotes",
			{
				mode: "cors",
				method: "POST",
				body: JSON.stringify(body),
			}
		);

		const postsResp = await resp.json();
		console.log("resp", postsResp);
	};

	return (
		<div className="flex flex-row mt-2">
			<AiOutlineLike
				size="20"
				className="mr-1 hover:text-primary-700 hover:scale-105"
				onClick={handleClick}
			/>
			{votes}
		</div>
	);
};

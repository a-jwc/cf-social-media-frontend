import { AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";
import { PostProps } from "../ts/interfaces";

export const VoteButton = (props: PostProps) => {
	const [votes, setVotes] = useState(props.votes);

	let body = {
		title: props.title,
		username: props.username,
		content: props.content,
		time: props.time,
		imageUrl: props.imageUrl,
		votes: props.votes + 1,
	};
	const handleClick = async () => {
		setVotes(votes + 1);
		const resp = await fetch(
			"https://workers-rust.chauajw.workers.dev/updatelikes",
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
			<AiOutlineHeart
				size="20"
				className="mr-1 mt-0.5 hover:text-primary-700 hover:scale-110 cursor-pointer"
				onClick={handleClick}
			/>
			{votes}
		</div>
	);
};

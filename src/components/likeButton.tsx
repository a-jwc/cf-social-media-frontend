import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import React, { useState } from "react";

interface Likes {
	votes: number;
}

export const LikeButton = (props: Likes) => {
	const [votes, setVotes] = useState(props.votes);

	const handleClick = () => {
		setVotes(votes + 1);
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

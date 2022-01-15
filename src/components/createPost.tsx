import React, { useState } from "react";

export const CreatePost: React.FunctionComponent = () => {
	const [post, setPost] = useState("");
	const [title, setTitle] = useState("");

	const createPost = async () => {};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let now = new Date().toISOString();
		let body = { content: post, time: now, username: "guest", title: title };
		console.log(body);
		setPost("");
		setTitle("");
		const resp = await fetch("https://workers-rust.chauajw.workers.dev/posts", {
			mode: "cors",
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const postsResp = await resp.json();
		console.log(postsResp);
	};

	return (
		<div className="flex flex-row w-auto mx-auto text-white content-center">
			<form onSubmit={handleSubmit}>
				<header className="text-center text-3xl text-white p-4 tracking-wide">
					<h1>Make a Post</h1>
				</header>
				<fieldset>
					<label className="mb-1 mt-2">Title</label>
					<br />
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
						className="text-black mb-2 w-full rounded"
					/>
					<br />
					<label className="mb-1 mt-2">Post</label>
					<br />
					<textarea
						// type="textarea"
						value={post}
						rows={4}
						onChange={(e) => setPost(e.target.value)}
						placeholder="Post.."
						className="text-black mb-2 w-full rounded"
					/>
				</fieldset>
				<button
					type="submit"
					className="bg-primary-200 mt-2 p-2 rounded-md m-auto w-full"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

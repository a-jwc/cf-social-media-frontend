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
        "Accept": "application/json",
			},
		});
		const postsResp = await resp.json();
		console.log(postsResp);
	};

	return (
		<div className="flex flex-row w-auto mx-auto text-white content-center border-2 p-4 border-primary-600 rounded-md">
			<form onSubmit={handleSubmit}>
				<header className="text-center text-3xl text-white tracking-wide">
					<h1>Make a Post</h1>
				</header>
				<fieldset>
					<label className="mb-1 mt-2">Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Title"
						className="text-black mb-2 w-full rounded p-1"
					/>
					<label className="mb-1 mt-2">Post</label>
					<textarea
						// type="textarea"
						value={post}
						rows={4}
						onChange={(e) => setPost(e.target.value)}
						placeholder="Post.."
						className="text-black mb-2 w-full rounded p-1"
					/>
				</fieldset>
				<button
					type="submit"
					className="bg-indigo-300 mt-2 p-2 rounded-md m-auto w-full hover:bg-gradient-to-b from-primary-700 via-primary-800 to-primary-600"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

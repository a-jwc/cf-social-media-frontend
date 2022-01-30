import React, { useState } from "react";

export const CreatePost: React.FunctionComponent<{
	getPosts: () => void;
	setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ getPosts, setIsPending }) => {
	const [post, setPost] = useState("");
	const [title, setTitle] = useState("");
	const [username, setUsername] = useState("");
	const [imageUrl, setImageUrl] = useState<string | undefined>("");
	const [votes] = useState(1);

	const submitPost = async (body: any) => {
		const resp = await fetch("https://workers-rust.chauajw.workers.dev/posts", {
			mode: "cors",
			method: "POST",
			body: JSON.stringify(body),
			credentials: "include",
		});
		const postsResp = await resp.json();
		console.log(postsResp);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (username.length === 0) {
			alert("Please add username.");
		} else if (post.length === 0 && imageUrl?.length === 0) {
			alert("Please add a post or upload.");
		} else {
			const now = new Date().toISOString();
			const body = {
				content: post,
				time: now,
				username: username,
				title: title,
				imageUrl: imageUrl,
				votes: votes,
			};
			setPost("");
			setTitle("");
			setUsername("");
			setImageUrl("");

			submitPost(body);
      // setIsPending(true);
			setTimeout(() => {
				getPosts();
        // setIsPending(false);
			}, 5000);
		}
	};

	const handleFileUpload = async (e: any) => {
		const file = e.target.files[0];
		// setImageName(file.name)
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImageUrl(reader.result?.toString());
		};
	};

	return (
		<div className="flex flex-row w-2/3 mx-auto text-white content-center border-2 p-4 border-primary-600 rounded-md">
			<form onSubmit={handleSubmit}>
				<header className="text-center text-3xl text-white tracking-wide">
					<h1>Make a Post</h1>
				</header>
				<fieldset>
					<label className="mb-1 mt-2">Username</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
						className="text-black mb-2 w-full rounded p-1"
					/>
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
						placeholder="Post"
						className="text-black mb-2 w-full rounded p-1"
					/>
					<label className="mb-1 mt-2">Upload image</label>
					<input
						type="file"
						name="image"
						onChange={handleFileUpload}
						className="text-white mb-2 w-full rounded p-1"
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

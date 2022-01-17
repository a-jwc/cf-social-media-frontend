import React, { useState } from "react";

interface ImageData {
	str: string;
}

export const CreatePost: React.FunctionComponent = () => {
	const [post, setPost] = useState("");
	const [title, setTitle] = useState("");
	const [username, setUsername] = useState("");
	const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [votes, setVotes] = useState(1);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let now = new Date().toISOString();
		let body = {
			content: post,
			time: now,
			username: username,
			title: title,
			imageUrl: imageUrl,
      votes: votes
		};
		console.log(body);
		setPost("");
		setTitle("");
		setUsername("");

		console.log(body);
		const resp = await fetch("https://workers-rust.chauajw.workers.dev/posts", {
			mode: "cors",
			method: "POST",
			body: JSON.stringify(body),
		});
		const postsResp = await resp.json();
		console.log(postsResp);
	};

	const handleFileUpload = async (e: any) => {
		const file = e.target.files[0];
    // setImageName(file.name)
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result?.toString());
    }
	};

	return (
		<div className="flex flex-row w-3/4 mx-auto text-white content-center border-2 p-4 border-primary-600 rounded-md">
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

// * ES6 CreatePost
// interface MyProps {}

// interface FormState {
// 	username: string;
// 	title: string;
// 	content: string;
// }

// class CreatePost extends React.Component<MyProps, FormState> {
// 	constructor(props: MyProps | Readonly<MyProps>) {
// 		super(props);
// 		this.state = {
// 			username: "",
// 			title: "",
// 			content: "",
// 		};
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
// 		event.preventDefault();
// 		let now = new Date().toISOString();
// 		let body = {
// 			content: this.state.content,
// 			time: now,
// 			username: this.state.username,
// 			title: this.state.title,
// 		};
// 		console.log(body);
// 		this.setState({
// 			username: "",
// 			title: "",
// 			content: "",
// 		});
// 		const resp = await fetch("https://workers-rust.chauajw.workers.dev/posts", {
// 			mode: "cors",
// 			method: "POST",
// 			body: JSON.stringify(body),
// 		});
// 		const postsResp = await resp.json();
// 		console.log(postsResp);
// 	}

// 	render() {
// 		return (
// 			<div className="flex flex-row w-3/4 mx-auto text-white content-center border-2 p-4 border-primary-600 rounded-md">
// 				<form onSubmit={this.handleSubmit}>
// 					<header className="text-center text-3xl text-white tracking-wide">
// 						<h1>Make a Post</h1>
// 					</header>
// 					<fieldset>
// 						<label className="mb-1 mt-2">Username</label>
// 						<input
// 							type="text"
// 							value={this.state.username}
// 							onChange={(e) => this.setState({ username: e.target.value })}
// 							placeholder="Username"
// 							className="text-black mb-2 w-full rounded p-1"
// 						/>
// 						<label className="mb-1 mt-2">Title</label>
// 						<input
// 							type="text"
// 							value={this.state.title}
// 							onChange={(e) => this.setState({ title: e.target.value })}
// 							placeholder="Title"
// 							className="text-black mb-2 w-full rounded p-1"
// 						/>
// 						<label className="mb-1 mt-2">Post</label>
// 						<textarea
// 							// type="textarea"
// 							value={this.state.content}
// 							rows={4}
// 							onChange={(e) => this.setState({ content: e.target.value })}
// 							placeholder="Post"
// 							className="text-black mb-2 w-full rounded p-1"
// 						/>
// 					</fieldset>
// 					<button
// 						type="submit"
// 						className="bg-indigo-300 mt-2 p-2 rounded-md m-auto w-full hover:bg-gradient-to-b from-primary-700 via-primary-800 to-primary-600"
// 					>
// 						Submit
// 					</button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// export { CreatePost };

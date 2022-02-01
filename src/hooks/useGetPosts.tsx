import { PostProps } from "../ts/interfaces";
import { Post } from "../components/post";
import { useEffect, useState } from "react";

export const useFetchPosts = (url: string) => {
	const [posts, setPosts] = useState<PostProps[]>([]);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		fetch(url, {
			mode: "cors",
		})
			.then((resp) => {
				if (!resp.ok) {
					throw Error("Could not fetch data");
				}
				return resp.json();
			})
			.then((postsJson: PostProps[]) => {
        const postsMap = postsJson.reverse().map((post: PostProps) => {
          return JSON.parse(post as unknown as string);
				});
        setPosts(postsMap);
				return postsMap;
			})
			.catch((err) => {
				console.error(err);
				setPending(false);
				alert("Could not get posts");
			});
    setPending(false);
	}, [setPending, url]);

	return {
		posts,
		setPosts,
    pending
	};
};

export const useMapPosts = (posts: PostProps[]): JSX.Element[] => {
	return posts.map((post: PostProps) => <Post {...post} key={post.time} />);
};

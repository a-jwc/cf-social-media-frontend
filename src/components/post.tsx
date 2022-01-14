import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { RouteComponentProps } from "@reach/router";

interface PostProps extends RouteComponentProps {
  title: string,
  content: string
}

const Post = ({ title }: PostProps) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://workers-rust.chauajw.workers.dev/posts/${title}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [post, title]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.content}</p> */}

      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
import { useContext } from "react";
import Post from "./Post";
import { contextCreator } from "../store/Post-list-data";

const PostList = () => {
  const { postList } = useContext(contextCreator);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;

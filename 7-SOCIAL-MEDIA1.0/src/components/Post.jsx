import { MdDelete } from "react-icons/md";
import { contextCreator } from "../store/Post-list-data";
import { useContext } from "react";

const Post = ({ post }) => {

  const {deletePost} = useContext(contextCreator);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deleteBtn">
          <MdDelete onClick={()=>{deletePost(post.id)}} />
        </span>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This Post is reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};

export default Post;

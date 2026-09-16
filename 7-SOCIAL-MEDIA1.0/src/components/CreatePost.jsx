import { useContext, useRef } from "react";
import { contextCreator } from "../store/Post-list-data";

const CreatePost = () => {
  const User_IdElement = useRef();
  const Post_TitleElement = useRef();
  const Post_ContentElement = useRef();
  const ReactionsElement = useRef();
  const TagsElement = useRef();

  const { addPost } = useContext(contextCreator);

  const handleSubmit = (event) => {
    event.preventDefault();

    const User_Id = User_IdElement.current.value;
    const Post_Title = Post_TitleElement.current.value;
    const Post_Content = Post_ContentElement.current.value;
    const Reactions = ReactionsElement.current.value;
    const Tags = TagsElement.current.value.split(" ");

    User_IdElement.current.value = "";
    Post_TitleElement.current.value = "";
    Post_ContentElement.current.value = "";
    ReactionsElement.current.value = "";
    TagsElement.current.value = "";

    addPost(User_Id, Post_Title, Post_Content, Reactions, Tags);
  };

  return (
    <form className="CreatePost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="UserId"
          ref={User_IdElement}
          placeholder="Enter your User id here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="PostTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="PostTitle"
          ref={Post_TitleElement}
          placeholder="How are you feeling today!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="PostContent" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          id="PostContent"
          ref={Post_ContentElement}
          placeholder="Tell me more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="Reactions"
          ref={ReactionsElement}
          placeholder="How many people reacted to it."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="Tags"
          ref={TagsElement}
          placeholder="give space after each tag"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;

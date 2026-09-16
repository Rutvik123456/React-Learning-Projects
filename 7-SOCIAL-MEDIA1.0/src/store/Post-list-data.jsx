import { createContext, useReducer } from "react";

const Default_Context = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
export const contextCreator = createContext(Default_Context);

const PostlistData = ({ children }) => {
 
  const PostListReducer = (currentPostlist, action) => {
    let newPostlist = currentPostlist;

    if (action.type === "DELETE_POST") {
      newPostlist = currentPostlist.filter(
        (post) => post.id !== action.payload.postid,
      );
    } else if (action.type === "ADD_POST") {
      newPostlist = [action.payload, ...currentPostlist];
    }

    return newPostlist;
  };


  const Default_Post_List_data = [
    {
      id: "1",
      title: "Go to trip",
      body: "i am very excir=ted to go to goa trip  as it is my long term dream",
      userId: "user-9",
      reaction: "3",
      tags: ["trip", "excited", "dream"],
    },
    {
      id: "2",
      title: "Pass my exams",
      body: "UNbelievable , i passed the exam ,for which I'm not prepared and also i inspire bymt rezults",
      userId: "user-34",
      reaction: "69",
      tags: ["exam", "inspire", "unbelievable"],
    },
  ];

  const [postList, dispatchPostlist] = useReducer(
    PostListReducer,
    Default_Post_List_data,
  );

  const addPost = (User_Id, Post_Title, Post_Content, Reactions, Tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: Post_Title,
        body: Post_Content,
        userId: User_Id,
        reaction: Reactions,
        tags: Tags,
      },
    });
  };
  const deletePost = (postid) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: { postid },
    });
  };

  return (
    <contextCreator.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </contextCreator.Provider>
  );
};

export default PostlistData;

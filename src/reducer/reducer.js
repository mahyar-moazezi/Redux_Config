const initState = {
  posts: [
    { id: 1, title: "Hi", body: "how are you?" },
    { id: 2, title: "Hello", body: "I'm good" }
  ]
};
const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POSTS") {
    let newPosts = state.posts.filter((i) => {
      return i.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};
export default rootReducer;

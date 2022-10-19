import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";
const PostsComponent = (props) => {
  const { posts, deletePosts } = props;
  const clickedOnPost = (id) => {
    deletePosts(id);
  };
  return (
    <>
      <div>
        {posts?.map((i) => (
          <div
            key={i.id}
            onClick={() => clickedOnPost(i.id)}
            style={{
              border: "1px solid red",
              margin: "10px",
              cursor: "pointer"
            }}
          >
            <h1>{i.title}</h1>
            <h6>{i.body}</h6>
          </div>
        ))}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePosts: (id) => {
      dispatch(deletePost(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

import React from "react";
import { connect } from "react-redux";
const PostsComponent = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <>
      <div>
        {posts?.map((i) => (
          <div key={i.id}>
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
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(PostsComponent);

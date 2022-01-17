//selectors
export const getAllPosts = ({ posts }) => {
  return posts;
};

export const getSinglePost = ({ posts }, postId) =>
  posts.filter((post) => post.id === postId);

export const getPostsExceptSelected = ({ posts }, postId) =>
  posts.filter((post) => post.id !== postId);

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// action creators
export const deletePost = (payload) => ({
  type: DELETE_POST,
  payload,
});

//
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return [...statePart].filter((post) => post.id !== action.payload.postId);
    default:
      return statePart;
  }
};

export default postsReducer;

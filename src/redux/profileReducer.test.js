import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
  posts: [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "Hi! How are you?", likesCount: 11 },
    { id: 3, message: "It's my last post", likesCount: 2 }
  ]
}

// add post

test('length of posts must be incremented', () => {
  const postBody = "76rg238u4 23ugfewfjsd 8428234";
  const action = addPost(postBody);
  const result = profileReducer(state, action);

  expect(result.posts.length).toBe(4);
});

test('post must be not added if body of post is empty', () => {
  const postBody = "";
  const action = addPost(postBody);
  const result = profileReducer(state, action);

  expect(result.posts.length).toBe(3);
});

test('body of new post must be correct', () => {
  const postBody = "76rg238u4 23ugfewfjsd 8428234";
  const action = addPost(postBody);
  const result = profileReducer(state, action);

  expect(result.posts[3].message).toBe(postBody);
});

// delete post
test('length of posts must be decremented', () => {
  const deletedPostId = 1;
  const action = deletePost(deletedPostId);
  const result = profileReducer(state, action);

  expect(result.posts.length).toBe(2);
});

test('deleting id must be > 0 and < length of posts', () => {
  const deletedPostId1 = 0;
  const deletedPostId2 = 1000;

  let action = deletePost(deletedPostId1);
  let result = profileReducer(state, action);
  expect(result.posts.length).toBe(3);


  action = deletePost(deletedPostId2);
  result = profileReducer(state, action);
  expect(result.posts.length).toBe(3);
});

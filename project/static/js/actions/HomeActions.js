import Home from '../constants/HomeConstants';

export const pullBlog = date => ({
  type: Home.PULL_BLOG,
  payload: {
    date: date
  },
});

export const pullBlogSuccess = blogs => ({
  type: Home.PULL_BLOG_SUCCESS,
  payload: blogs,
});

export const pullBlogFailure = error => ({
  type: Home.PULL_BLOG_FAILURE,
  payload: { error: error },
});

export const pullBlogLoading = () => ({
  type: Home.PULL_BLOG_LOADING,
});

export const toggleMenu = () => ({
  type: Home.TOGGLE_MENU,
});

export const pushBlog = (id, title, tags, text) => ({
  type: Home.PUSH_BLOG,
  payload: {
    id: id,
    title: title,
    tags: tags,
    text: text,
  }
});

export const pushBlogSuccess = (blogs) => ({
  type: Home.PUSH_BLOG_SUCCESS,
  payload: blogs,
});

export const enableTag = (tag) => ({
  type: Home.ENABLE_TAG,
  payload: tag,
});

export const disableTag = (tag) => ({
  type: Home.DISABLE_TAG,
  payload: tag,
});

export const selectTag = (tag) => ({
  type: Home.SELECT_TAG,
  payload: tag,
});

export const setAvailableTags = (tags) => ({
  type: Home.SET_AVAILABLE_TAG,
  payload: tags,
});
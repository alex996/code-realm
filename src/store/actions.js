const actions = store => ({
  async fetchPosts (state) {
    const posts = await (await fetch('/blog/index.json')).json()

    return {
      ...state,
      posts
    }
  },
  async fetchPost (state, slug) {
    const post = await (await fetch(`/blog/${slug}.json`)).json()

    return {
      ...state,
      postDetails: [...state.postDetails, post]
    }
  }
})

export default actions

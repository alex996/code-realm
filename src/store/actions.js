const actions = store => ({
  async fetchPosts (state) {
    const posts = await (await fetch('/blog/index.json')).json()

    return {
      ...state,
      posts
    }
  }
})

export default actions

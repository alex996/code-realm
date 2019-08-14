import { h, Fragment, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Post, { PostI } from './Post'

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState([])

  useEffect((): void => {
    (async (): Promise<void> => {
      const posts = await (await fetch('/blog/index.json')).json()

      setPosts(posts)
    })()
  }, [])

  return (
    <Fragment>
      {posts.map(
        (post: PostI): JSX.Element => (
          <Post key={post.slug} {...post} />
        )
      )}
    </Fragment>
  )
}

export default Posts

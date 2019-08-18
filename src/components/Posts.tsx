import { h, Fragment, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { PostPreview } from '../types'
import { Post } from './'

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState([])

  useEffect((): void => {
    fetch('/blog/index.json')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <Fragment>
      {posts.map(
        (post: PostPreview): JSX.Element => (
          <Post preview key={post.slug} {...post} />
        )
      )}
    </Fragment>
  )
}

export default Posts

import { h, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Params } from 'wouter'
import { Post } from '../components'
import { PostDetails, HttpError } from '../types'
import { Error } from './'

interface Props {
  params: Params
}

const PostPage = ({ params: { slug } }: Props): JSX.Element | false => {
  const [post, setPost] = useState<PostDetails | null>(null)
  const [error, setError] = useState<HttpError | null>(null)

  useEffect(() => {
    fetch(`/blog/${slug}.json`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }

        setError({ code: res.status, message: res.statusText })
      })
      .then(setPost)
      .catch(setError)
  }, [])

  if (error) {
    return <Error {...error} />
  }

  if (!post) {
    return false
  }

  return (
    <div class='post-page'>
      <section class='section'>
        <div class='container'>
          <Post {...post} />
        </div>
      </section>
      <section class='section'>
        <div class='container'>
          <div
            class='content'
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>
    </div>
  )
}

export default PostPage

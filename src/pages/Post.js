import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import NotFound from './404'

const Post = ({ url }) => {
  const [post, setPost] = useState()
  const [error, setError] = useState()

  useEffect(async () => {
    try {
      const post = await (await fetch(`${url}.json`)).json()

      setPost(post)
    } catch (e) {
      console.error(e)

      setError(e)
    }
  }, [url])

  if (error) {
    return <NotFound />
  }

  if (!post) {
    return
  }

  const { title, subtitle, createdAt, minsToRead, tags, body } = post

  return (
    <div class='post-page'>
      <section class='hero'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title is-spaced'>{title}</h1>

            <h2 class='subtitle'>{subtitle}</h2>

            <div class='caption has-text-grey is-flex'>
              <span class='item'>{createdAt}</span>

              <span class='separator'>&bull;</span>

              <span class='item'>{minsToRead} minutes</span>

              <span class='separator'>&bull;</span>

              <div class='item'>
                <div class='tags'>
                  {tags.map(tag => (
                    <span class='tag is-rounded'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='section'>
        <div class='container'>
          <div class='content' dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </section>
    </div>
  )
}

export default Post

import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { connect, actions } from '../store'
import NotFound from './404'

const Post = ({ slug, post, fetchPost }) => {
  const [error, setError] = useState()

  useEffect(async () => {
    if (!post) {
      try {
        await fetchPost(slug)
      } catch (e) {
        setError(e)
      }
    }
  }, [slug])

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

const mapStateToProps = (state, props) => ({
  post: state.postDetails.find(post => post.slug === props.slug)
})

export default connect(
  mapStateToProps,
  actions
)(Post)

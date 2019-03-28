import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { connect, actions } from '../store'
import { Post } from '../components'
import NotFound from './404'

const PostPage = ({ slug, post, fetchPost }) => {
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

  return (
    <div class='post-page'>
      <section class='hero'>
        <div class='hero-body'>
          <div class='container'>
            <Post {...post} />
          </div>
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

const mapStateToProps = (state, props) => ({
  post: state.postDetails.find(post => post.slug === props.slug)
})

export default connect(
  mapStateToProps,
  actions
)(PostPage)

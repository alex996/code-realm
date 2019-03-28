import { h, Fragment } from 'preact'
import { useEffect } from 'preact/hooks'
import { connect, actions } from '../store'
import { Post } from '../components'

const Home = ({ posts, fetchPosts }) => {
  useEffect(() => {
    if (!posts.length) {
      fetchPosts()
    }
  }, [])

  return (
    <Fragment>
      <section class='hero'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title is-spaced'>Modern Web Development</h1>
            <h2 class='subtitle'>With latest tooling and tech</h2>
          </div>
        </div>
      </section>
      <div class='container'>
        <hr />
      </div>
      <section class='section'>
        <div class='container'>
          {posts.map(post => (
            <Post {...post} />
          ))}
        </div>
      </section>
    </Fragment>
  )
}

export default connect(
  'posts',
  actions
)(Home)

import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Post } from '../components'

const Home = props => {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const posts = await (await fetch('/blog/index.json')).json()

    setPosts(posts)
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

export default Home

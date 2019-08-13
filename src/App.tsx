import { h, Fragment, JSX } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Navbar } from './layout'

interface PostI {
  title: string
  subtitle: string
  slug: string
  readingTime: string
  tags: string[]
  createdAt: string
}

interface PostProps extends PostI {
  key?: string
}

const Post = ({
  title,
  subtitle,
  createdAt,
  readingTime,
  tags
}: PostProps): JSX.Element => (
  <article class='box post'>
    <h3 class='title is-4 is-spaced'>{title}</h3>

    <h4 class='subtitle is-6'>{subtitle}</h4>

    <div class='caption has-text-grey is-flex'>
      <span class='item'>{createdAt}</span>

      <span class='separator'>&bull;</span>

      <span class='item'>{readingTime}</span>

      <span class='separator'>&bull;</span>

      <div class='item'>
        <div class='tags'>
          {tags.map(
            (tag, index): JSX.Element => (
              <span key={index} class='tag is-rounded'>
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </article>
)

const Posts = (): JSX.Element => {
  const [posts, setPosts] = useState([])

  useEffect((): void => {
    (async (): Promise<void> => {
      const posts = await (await fetch('/blog/index.json')).json()

      setPosts(posts)
    })()
  }, [])

  return (
    <section>
      {posts.map(
        (post: PostI): JSX.Element => (
          <Post key={post.slug} {...post} />
        )
      )}
    </section>
  )
}

const App = (): JSX.Element => (
  <Fragment>
    <header class='container'>
      <Navbar />
    </header>
    <main>
      <section class='hero'>
        <div class='hero-body'>
          <div class='container'>
            <div class='box'>
              <h1 class='title is-spaced'>Modern web development</h1>
              <h2 class='subtitle'>With next-gen JavaScript and React</h2>
            </div>
          </div>
        </div>
      </section>

      <hr class='container' />

      <section class='section'>
        <div class='container'>
          <Posts />
        </div>
      </section>
    </main>
  </Fragment>
)

export default App

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

const Post = ({ title, subtitle }: PostProps): JSX.Element => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
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
      <Posts />
    </main>
  </Fragment>
)

export default App

import { h, Fragment } from 'preact'
import { Post } from '../components'

const posts = [
  {
    path: '/blog/building-a-library-with-next-gen-js',
    title: 'Building a library with next-gen JS',
    subtitle: `You don't need Webpack at all`,
    createdAt: 'Mar 17, 2019',
    minsToRead: 10,
    tags: ['JavaScript', 'Babel']
  },
  {
    path: '/blog/jumping-through-hoops-with-mongoose',
    title: 'Jumping through hoops with Mongoose',
    subtitle: 'From quirky validation and model hooks to faulty unique indexes',
    createdAt: 'Mar 15, 2019',
    minsToRead: 14,
    tags: ['Mongoose', 'Node.js']
  },
  {
    path: '/blog/building-a-microsite-with-latest-js',
    title: 'Building a microsite with latest JS',
    subtitle: `You don't need a macroframework like React`,
    createdAt: 'Mar 12, 2019',
    minsToRead: 9,
    tags: ['JavaScript', 'Peact', 'Bulma']
  }
]

const Home = props => (
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

export default Home

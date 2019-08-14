import { h, Fragment, JSX } from 'preact'
import { Posts } from '../components'

const Home = (): JSX.Element => (
  <Fragment>
    <section class='hero'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title is-spaced'>Modern web development</h1>
          <h2 class='subtitle'>With next-gen JavaScript and React</h2>
        </div>
      </div>
    </section>

    <hr class='container' />

    <section class='section'>
      <div class='container'>
        <Posts />
      </div>
    </section>
  </Fragment>
)

export default Home

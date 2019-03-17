import { h } from 'preact'

const NotFound = props => (
  <section class='hero'>
    <div class='hero-body'>
      <div class='container'>
        <h1 class='title is-spaced'>404 Not Found</h1>
        <h2 class='subtitle'>Nothing to see here.</h2>
        <a href='/' class='button is-primary is-outlined is-rounded'>
          Get back home
        </a>
      </div>
    </div>
  </section>
)

export default NotFound

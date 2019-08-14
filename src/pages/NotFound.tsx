import { h, JSX } from 'preact'
import { Link } from 'wouter'

const NotFound = (): JSX.Element => (
  <section class='hero'>
    <div class='hero-body'>
      <div class='container'>
        <h1 class='title is-spaced'>404 Not Found</h1>

        <h2 class='subtitle'>Nothing to see here.</h2>

        <Link href='/' class='button is-primary is-outlined is-rounded'>
          Get back home
        </Link>
      </div>
    </div>
  </section>
)

export default NotFound

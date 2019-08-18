import { h, JSX } from 'preact'
import { Link } from 'wouter'

interface Props {
  code?: number
  message?: string
}

const Error = ({ code = 404, message = 'Not Found' }: Props): JSX.Element => (
  <section class='hero'>
    <div class='hero-body'>
      <div class='container'>
        <h1 class='title is-spaced'>
          {code} {message}
        </h1>

        <h2 class='subtitle'>Nothing to see here.</h2>

        <Link href='/' class='button is-link is-outlined is-rounded'>
          Get back home
        </Link>
      </div>
    </div>
  </section>
)

export default Error

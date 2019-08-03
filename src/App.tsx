import { h, Fragment, JSX } from 'preact'

const App = (): JSX.Element => (
  <Fragment>
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h1>Code Realm</h1>
        <h2>Modern web development blog</h2>
      </section>
      <section>
        <ul>
          <li>
            <a href="#">
              <h3>Building a UI library with next-gen JS</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              </h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>The ultimate starter kit with Webpack</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h3>Building a microsite with modern JS</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              </h4>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </Fragment>
)

export default App

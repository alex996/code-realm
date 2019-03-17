import { h, Fragment } from 'preact'
import Router from 'preact-router'
import { Navbar } from './layouts'
import { Home, NotFound } from './pages'

const App = props => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main>
      <Router>
        <Home path='/' />
        <NotFound default />
      </Router>
    </main>
  </Fragment>
)

export default App

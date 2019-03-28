import { h, Fragment } from 'preact'
import Router from 'preact-router'
import { Provider, store } from './store'
import { Navbar } from './layouts'
import { Home, Post, NotFound } from './pages'

const App = props => (
  <Provider store={store}>
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Home path='/' />
          <Post path='/blog/:slug' />
          <NotFound default />
        </Router>
      </main>
    </Fragment>
  </Provider>
)

export default App

import { h, Fragment, JSX } from 'preact'
import { Switch, Route } from 'wouter'
import { Navbar } from './layout'
import { Home, Post, NotFound } from './pages'

const App = (): JSX.Element => (
  <Fragment>
    <header class='container'>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/blog/:slug' component={Post} />
        <Route path='/:rest' component={NotFound} />
      </Switch>
    </main>
  </Fragment>
)

export default App

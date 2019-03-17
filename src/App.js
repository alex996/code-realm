import { h, Fragment } from 'preact'
import { Navbar } from './layouts'

const App = props => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main />
  </Fragment>
)

export default App

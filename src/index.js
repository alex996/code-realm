import './style.scss'
import { h, render } from 'preact'
import App from './App'

const root = document.getElementById('app')

if (root.hasChildNodes()) {
  render(<App />, root, root.firstElementChild)
} else {
  render(<App />, root)
}

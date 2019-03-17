import { h } from 'preact'
import { useState } from 'preact/hooks'
import { homepage, version } from '../../package.json'

const Navbar = props => {
  const [open, setOpen] = useState(false)
  const active = open ? ' is-active' : ''

  const handleToggle = () => setOpen(!open)

  return (
    <nav
      class='navbar is-transparent'
      role='navigation'
      aria-label='main navigation'
    >
      <div class='container'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='#'>
            <strong>Code Realm</strong>
          </a>

          <a
            role='button'
            class={`navbar-burger burger${active}`}
            aria-label='menu'
            aria-expanded={open}
            onClick={handleToggle}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div class={`navbar-menu${active}`}>
          <div class='navbar-start'>
            <a class='navbar-item' href='#'>
              YouTube
            </a>

            <a class='navbar-item' href='#'>
              GitHub
            </a>

            <a class='navbar-item' href='#'>
              StackOverflow
            </a>

            <a class='navbar-item' href='#'>
              Minds
            </a>
          </div>

          <div class='navbar-end'>
            <div class='navbar-item'>
              <div class='buttons'>
                <a class='button is-rounded' href={homepage} target='_blank'>
                  {version}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

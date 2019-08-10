import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'
import logo from '../logo.png'
import { homepage, version } from '../../package.json'

const links = [
  {
    href: 'https://www.youtube.com/c/CodeRealm',
    text: 'YouTube'
  },
  {
    href: 'https://github.com/alex996',
    text: 'GitHub'
  },
  {
    href: 'https://stackoverflow.com/users/5610777/alex',
    text: 'StackOverflow'
  },
  {
    href: 'https://medium.com/@coderealm',
    text: 'Medium'
  },
  {
    href: 'https://www.minds.com/CodeRealm',
    text: 'Minds'
  }
]

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const activeClass = open ? ' is-active' : ''

  const handleToggle = (): void => setOpen(!open)

  return (
    <nav
      class='navbar is-spaced is-transparent has-shadow'
      role='navigation'
      aria-label='main navigation'
    >
      <div class='navbar-brand'>
        <a class='navbar-item' href='/'>
          <img src={logo} alt='Code Realm' />
        </a>

        {links.map(
          ({ href }, index): JSX.Element => (
            <a
              key={index}
              href={href}
              class='navbar-item is-hidden-desktop'
              rel='noopener noreferrer'
              target='_blank'
            >
              i
            </a>
          )
        )}

        <a
          role='button'
          class={`navbar-burger${activeClass}`}
          aria-label='menu'
          aria-expanded={`${open}`}
          onClick={handleToggle}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>

      <div class={`navbar-menu${activeClass}`}>
        <div class='navbar-start'>
          {links.map(
            ({ href, text }, index): JSX.Element => (
              <a
                key={index}
                href={href}
                class='navbar-item'
                rel='noopener noreferrer'
                target='_blank'
              >
                {text}
              </a>
            )
          )}
        </div>

        <div class='navbar-end'>
          <div class='navbar-item'>
            <a
              href={homepage}
              class='button is-rounded'
              rel='noopener noreferrer'
              target='_blank'
            >
              {version}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

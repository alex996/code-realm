import { h } from 'preact'
import { useState } from 'preact/hooks'
import logo from '../logo.png'
import { YouTube, GitHub, Medium, StackOverflow, Minds } from '../icons'
import { homepage, version } from '../../package.json'

const links = [
  {
    href: 'https://www.youtube.com/c/CodeRealm',
    icon: YouTube,
    title: 'YouTube'
  },
  {
    href: 'https://github.com/alex996',
    icon: GitHub,
    title: 'GitHub'
  },
  {
    href: 'https://stackoverflow.com/users/5610777/alex',
    icon: StackOverflow,
    title: 'StackOverflow'
  },
  {
    href: 'https://medium.freecodecamp.org/@coderealm',
    icon: Medium,
    title: 'Medium'
  },
  {
    href: 'https://www.minds.com/CodeRealm',
    icon: Minds,
    title: 'Minds'
  }
]

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
          <a class='navbar-item' href='/'>
            <img src={logo} alt='Code Realm' />
          </a>

          <a
            role='button'
            class={`navbar-burger burger${active}`}
            aria-label='menu'
            aria-expanded={`${open}`}
            onClick={handleToggle}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div class={`navbar-menu${active}`}>
          <div class='navbar-start'>
            {links.map(({ href, icon, title }) => (
              <a
                href={href}
                title={title}
                target='_blank'
                class='navbar-item is-flex'
              >
                <span class='icon'>
                  <img src={`/${icon}`} alt={title} />
                </span>
                <span class='is-hidden-desktop'>{title}</span>
              </a>
            ))}
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

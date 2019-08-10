import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'
import {
  SvgIcon,
  YouTube,
  GitHub,
  StackOverflow,
  Medium,
  Minds
} from '../icons'
import { homepage, version } from '../../package.json'
import logo from '../logo.png'

const links = [
  {
    href: '#',
    text: 'Blog'
  },
  {
    href: '#',
    text: 'Projects'
  },
  {
    href: '#',
    text: 'About'
  }
]

const social = [
  {
    href: 'https://www.youtube.com/c/CodeRealm',
    text: 'YouTube',
    icon: YouTube
  },
  {
    href: 'https://github.com/alex996',
    text: 'GitHub',
    icon: GitHub
  },
  {
    href: 'https://stackoverflow.com/users/5610777/alex',
    text: 'StackOverflow',
    icon: StackOverflow
  },
  {
    href: 'https://medium.com/@coderealm',
    text: 'Medium',
    icon: Medium
  },
  {
    href: 'https://www.minds.com/CodeRealm',
    text: 'Minds',
    icon: Minds
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

        {social.map(
          ({ href, icon, text }, index): JSX.Element => (
            <a
              key={index}
              href={href}
              class='navbar-item is-hidden-desktop'
              rel='noopener noreferrer'
              target='_blank'
            >
              <SvgIcon src={icon} alt={text} />
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
              <a key={index} href={href} class='navbar-item'>
                {text}
              </a>
            )
          )}
        </div>
        <div class='navbar-end'>
          {social.map(
            ({ href, icon, text }, index): JSX.Element => (
              <a
                key={index}
                href={href}
                class='navbar-item is-hidden-touch'
                rel='noopener noreferrer'
                target='_blank'
              >
                <SvgIcon src={icon} alt={text} />
              </a>
            )
          )}
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

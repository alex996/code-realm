import { h, JSX } from 'preact'

interface Props {
  href: string
  alt: string
}

const SvgIcon = ({ href, alt }: Props): JSX.Element => (
  <span class='icon'>
    <svg role='img' aria-label={alt}>
      <use href={href} />
    </svg>
  </span>
)

export default SvgIcon

import { h, JSX } from 'preact'

interface Props {
  src: string
  alt: string
}

const SvgIcon = (props: Props): JSX.Element => (
  <span class='icon'>
    <img {...props} />
  </span>
)

export default SvgIcon

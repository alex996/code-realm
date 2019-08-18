import { h, JSX } from 'preact'
import { Link } from 'wouter'
import { PostPreview } from '../types'

interface PostProps extends PostPreview {
  key?: string
  preview?: boolean
}

const Post = ({
  slug,
  title,
  subtitle,
  createdAt,
  readingTime,
  tags,
  preview = false
}: PostProps): JSX.Element => (
  <article class={`post${preview ? ' is-preview' : ''}`}>
    {preview ? (
      <h3 class='title is-4 is-spaced'>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
    ) : (
      <h1 class='title is-spaced'>{title}</h1>
    )}

    {preview ? (
      <h4 class='subtitle is-6'>{subtitle}</h4>
    ) : (
      <h2 class='subtitle'>{subtitle}</h2>
    )}

    <div class='caption has-text-grey is-flex'>
      <span class='item'>{createdAt}</span>

      <span class='separator'>&bull;</span>

      <span class='item'>{readingTime}</span>

      <span class='separator'>&bull;</span>

      <div class='item'>
        <div class='tags'>
          {tags.map(
            (tag, index): JSX.Element => (
              <span key={index} class='tag is-rounded'>
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </article>
)

export default Post

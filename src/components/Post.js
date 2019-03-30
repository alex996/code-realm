import { h } from 'preact'
import clsx from 'clsx'

const Post = ({
  prefix = 'blog',
  slug,
  title,
  subtitle,
  createdAt,
  readingTime,
  tags,
  preview
}) => {
  const titleProps = {
    class: clsx('title is-spaced', preview && 'is-size-4'),
    children: title
  }

  const subtitleProps = {
    class: 'subtitle',
    children: subtitle
  }

  return (
    <article class={clsx('post', preview && 'post-preview')}>
      {preview ? (
        <a href={`/${prefix}/${slug}`}>
          <h3 {...titleProps} />
        </a>
      ) : (
        <h1 {...titleProps} />
      )}

      {preview ? <h4 {...subtitleProps} /> : <h2 {...subtitleProps} />}

      <div class='caption has-text-grey is-flex'>
        <span class='item'>{createdAt}</span>

        <span class='separator'>&bull;</span>

        <span class='item'>{readingTime}</span>

        <span class='separator'>&bull;</span>

        <div class='item'>
          <div class='tags'>
            {tags.map(tag => (
              <span class='tag is-rounded'>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post

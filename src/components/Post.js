import { h } from 'preact'
import clsx from 'clsx'

const Post = ({
  prefix = 'blog',
  slug,
  title,
  subtitle,
  createdAt,
  minsToRead,
  tags,
  preview
}) => {
  const heading = (
    <h3 class={clsx('title is-spaced', preview && 'is-size-4')}>{title}</h3>
  )

  return (
    <article class={clsx('post', preview && 'post-preview')}>
      {preview ? <a href={`/${prefix}/${slug}`}>{heading}</a> : heading}

      <h4 class={clsx('subtitle', preview && 'is-size-6')}>{subtitle}</h4>

      <div class={clsx('caption has-text-grey is-flex', preview && 'is-small')}>
        <span class='item'>{createdAt}</span>

        <span class='separator'>&bull;</span>

        <span class='item'>{minsToRead} mins</span>

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

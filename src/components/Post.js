import { h } from 'preact'
import clsx from 'clsx'

const Article = ({ class: className, children }) => (
  <article class={clsx('post', className)}>{children}</article>
)

const Title = ({ class: className, children, slug, prefix = 'blog' }) => {
  const title = <h3 class={clsx('title is-spaced', className)}>{children}</h3>

  return slug ? <a href={`/${prefix}/${slug}`}>{title}</a> : title
}

const Subtitle = ({ class: className, children }) => (
  <h4 class={clsx('subtitle', className)}>{children}</h4>
)

const Caption = ({ class: className, children }) => (
  <div class={clsx('caption has-text-grey is-flex', className)}>{children}</div>
)

const Post = ({
  slug,
  title,
  subtitle,
  createdAt,
  minsToRead,
  tags,
  preview
}) => (
  <Article class={preview && 'post-preview'}>
    <Title class={preview && 'is-size-4'} slug={preview && slug}>
      {title}
    </Title>

    <Subtitle class={preview && 'is-size-6'}>{subtitle}</Subtitle>

    <Caption class={preview && 'is-small'}>
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
    </Caption>
  </Article>
)

export default Post

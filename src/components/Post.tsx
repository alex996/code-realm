import { h, JSX } from 'preact'
import { Link } from 'wouter'

export interface PostI {
  title: string
  subtitle: string
  slug: string
  readingTime: string
  tags: string[]
  createdAt: string
}

interface PostProps extends PostI {
  key?: string
}

const Post = ({
  slug,
  title,
  subtitle,
  createdAt,
  readingTime,
  tags
}: PostProps): JSX.Element => (
  <article class='post'>
    <h3 class='title is-4 is-spaced'>
      <Link href={`/blog/${slug}`} class='has-text-dark'>
        {title}
      </Link>
    </h3>

    <h4 class='subtitle is-6'>{subtitle}</h4>

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

import { h } from 'preact'

const Post = ({ slug, title, subtitle, createdAt, minsToRead, tags }) => (
  <article class='post'>
    <a href={`/${slug}`}>
      <h3 class='title is-size-4 is-spaced'>{title}</h3>
    </a>
    <h4 class='subtitle is-size-6'>{subtitle}</h4>

    <div class='caption has-text-grey is-flex'>
      <span>{createdAt}</span>

      <span class='separator'>&bull;</span>

      <span>{minsToRead} mins</span>

      <span class='separator'>&bull;</span>

      <div class='tags is-normal'>
        {tags.map(tag => (
          <span class='tag is-rounded'>{tag}</span>
        ))}
      </div>
    </div>
  </article>
)

export default Post

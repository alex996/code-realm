import { h } from 'preact'

const Post = ({ slug, title, subtitle, createdAt, minsToRead, tags }) => (
  <article class='post'>
    <a href={`/${slug}`}>
      <h3 class='title is-size-4 is-spaced'>{title}</h3>
    </a>
    <h4 class='subtitle is-size-6'>{subtitle}</h4>

    <div class='caption has-text-grey is-small is-flex'>
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

export default Post

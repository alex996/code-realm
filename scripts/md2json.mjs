/* eslint-disable @typescript-eslint/explicit-function-return-type */
import fs from 'fs-extra'
import readingTime from 'reading-time'
import fecha from 'fecha'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import yaml from 'remark-parse-yaml'
import remark2retext from 'remark-retext'
import english from 'retext-english'
import text from 'retext-stringify'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import minify from 'rehype-preset-minify'
import vfile from 'to-vfile'
import report from 'vfile-reporter'

const entry = './content'

const output = './dist/blog'

const posts = {}

function time () {
  return (tree, vfile) => {
    const plaintext = this.stringify(tree)
    const mins = parseInt(readingTime(plaintext).text)
    const post = posts[vfile.history[0]]

    post.readingTime = `${mins} min${mins > 1 ? 's' : ''}`
  }
}

const metadata = () => (tree, vfile) => {
  const [frontmatter] = tree.children
  const { parsedValue } = frontmatter.data
  const post = posts[vfile.history[0]]

  Object.assign(post, {
    ...parsedValue,
    createdAt: fecha.format(parsedValue.createdAt, 'MMM D, YYYY')
  })
}

;(async () => {
  const processor = unified() // core API
    .use(markdown) // parses Markdown to AST
    .use(frontmatter) // parses Markdown frontmatter
    .use(yaml) // builds frontmatter into POJO
    .use(
      remark2retext, // bridges Mardown AST to natural language CST
      unified()
        .use(english) // parses English into natural language CST
        .use(text) // stringifies natural language CST
        .use(time)
    )
    .use(metadata)
    .use(remark2rehype) // converts Markdown AST into HTML AST
    .use(html) // converts HTML AST into HTML
    .use(minify) // minifies HTML

  const [dirnames] = await Promise.all([fs.readdir(entry), fs.mkdirp(output)])

  const writes = dirnames.map(async dirname => {
    const pathToMd = `${entry}/${dirname}/index.md`

    const post = (posts[pathToMd] = { slug: dirname })

    const vFile = await vfile.read(pathToMd)

    const file = await processor.process(vFile)

    console.log(report(file))

    const pathToJson = `${output}/${dirname}.json`

    return fs.writeJson(pathToJson, { ...post, body: String(file) })
  })

  await Promise.all(writes)

  await fs.writeJson(`${output}/index.json`, Object.values(posts))
})()

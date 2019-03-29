const readingTime = require('reading-time')
const unified = require('unified')
const markdown = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const yaml = require('remark-parse-yaml')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')
const minify = require('rehype-preset-minify')
const fs = require('fs').promises
const path = require('path')

;(async () => {
  const posts = []

  const metadata = () => (tree, vfile) => {
    const { minutes } = readingTime(String(vfile))

    posts.push({
      ...tree.children[0].data.parsedValue,
      minsToRead: Math.round(minutes)
    })
  }

  const processor = unified()
    .use(markdown)
    .use(frontmatter)
    .use(yaml)
    .use(metadata)
    .use(remark2rehype)
    .use(html)
    .use(minify)

  const inputDir = 'content'
  const outputDir = 'json'

  const [filenames] = await Promise.all([
    await fs.readdir(inputDir),
    fs.mkdir(outputDir, { recursive: true })
  ])

  const ops = filenames.map(async (filename, index) => {
    const buffer = await fs.readFile(`${inputDir}/${filename}`)

    const file = await processor.process(buffer)

    const post = { ...posts[index], body: String(file) }

    const data = JSON.stringify(post)

    const pathname = `${outputDir}/${path.basename(filename, '.md')}.json`

    return fs.writeFile(pathname, data, 'utf-8')
  })

  await Promise.all(ops)

  console.log('Done')
})()

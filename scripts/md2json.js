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
const fecha = require('fecha')

;(async () => {
  const posts = []

  const metadata = () => (tree, vfile) => {
    const { parsedValue } = tree.children[0].data
    const { minutes } = readingTime(String(vfile))

    posts.push({
      ...parsedValue,
      readingTime: `${Math.ceil(minutes)} min${minutes > 1 ? 's' : ''}`,
      createdAt: fecha.format(parsedValue.createdAt, 'MMM D, YYYY')
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
  const outputDir = 'build/blog'

  const [filenames] = await Promise.all([
    await fs.readdir(inputDir),
    fs.mkdir(outputDir, { recursive: true })
  ])

  const ops = filenames.map(async (filename, index) => {
    const buffer = await fs.readFile(`${inputDir}/${filename}`)

    const file = await processor.process(buffer)

    const basename = path.basename(filename, '.md')

    const pathname = `${outputDir}/${basename}.json`

    posts[index].slug = basename

    const post = { ...posts[index], body: String(file) }

    return fs.writeFile(pathname, JSON.stringify(post), 'utf-8')
  })

  await Promise.all(ops)

  await fs.writeFile(`${outputDir}/index.json`, JSON.stringify(posts), 'utf-8')

  console.log('Done')
})()

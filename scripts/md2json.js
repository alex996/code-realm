const unified = require('unified')
const markdown = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const yaml = require('remark-parse-yaml')
const remark2rehype = require('remark-rehype')
const html = require('rehype-stringify')
const minify = require('rehype-preset-minify')
const fs = require('fs').promises

;(async () => {
  const posts = []

  const metadata = () => tree => {
    posts.push(tree.children[0].data.parsedValue)
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

    return fs.writeFile(`${outputDir}/${filename}.json`, data, 'utf-8')
  })

  await Promise.all(ops)

  console.log('Done')
})()

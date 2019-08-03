/**
 * unified -> core API
 *
 * remark-parse -> Markdown parser
 * remark-rehype -> Markdown to HTML converter
 *
 * rehype-stringify -> HTML stringifier
 * rehype-minify -> HTML minifier
 */

import vfile from 'to-vfile'
import report from 'vfile-reporter'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import minify from 'rehype-preset-minify'
//
;(async () => {
  const filePath = './content/building-a-microsite-with-modern-js/index.md'

  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .use(minify)

  const file = await processor.process(await vfile.read(filePath))

  console.log(String(file))

  console.log(report(file))
})()

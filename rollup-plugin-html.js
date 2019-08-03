import fs from 'fs-extra'
import path from 'path'

export const html = ({
  template,
  filename = 'index.html',
  attributes = [],
  minify = true
}) => ({
  name: 'rollup-plugin-html',
  generateBundle: async (options, info) => {
    const dir = options.dir || path.dirname(options.file)

    if (await fs.pathExists(`${dir}/${filename}`)) {
      return
    }

    const html = await fs.readFile(template, 'utf-8')

    const bodyClosingTag = html.indexOf('</body>')

    const [bundle] = Object.entries(info).find(([, { isEntry }]) => isEntry)

    const script = `<script src="/${bundle}"${
      attributes.length ? ` ${attributes.join(' ')}` : ''
    }></script>\n`

    let result =
      html.substring(0, bodyClosingTag) +
      script +
      html.substring(bodyClosingTag)

    if (minify) {
      result = result.replace(/([\n\r])|(\s{2,})/g, '') // newlines or 2+ spaces
    }

    await fs.outputFile(`${dir}/${filename}`, result)

    console.log(`\ncreated ${dir}/${filename}\n`)
  }
})

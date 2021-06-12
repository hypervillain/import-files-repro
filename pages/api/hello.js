import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export default (req, res) => {
  const file = fs.readFileSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, 'included-folder', 'hello.txt'),
    'utf-8'
  )
  res.send(file)
}

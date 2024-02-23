import { Interface } from 'nbit-ytt'
import fs from 'fs'
import path from 'path'

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function getName(interfaceInfo: Interface) {
  const { path, method } = interfaceInfo

  const arr = String(path)
    // split by camel case
    // eslint-disable-next-line
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    // eslint-disable-next-line
    .split(/[\s-_\/\{\}]+/)

  const toBeExclude = ['v1', 'v2', 'v3', 'v4']
  const resolvedArr: string[] = []

  let version = ''
  arr
    .filter(x => !!x)
    .forEach(item => {
      if (toBeExclude.includes(item.toLowerCase())) {
        version = item.toUpperCase()
        return
      }
      resolvedArr.push(item)
    })

  // include version info to be unique
  if (version) {
    resolvedArr.push(version)
  }

  resolvedArr.push(method)
  resolvedArr.push('api')

  let name = ''
  resolvedArr.forEach(item => {
    name += capitalizeFirstLetter(item)
  })

  return name
}

export function deleteFilesSync(targetFolder: string) {
  fs.readdir(targetFolder, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(targetFolder, file), err => {
        if (err) throw err
      })
    }
  })
}

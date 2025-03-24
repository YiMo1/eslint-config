import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

import inquirer from 'inquirer'
import { loadPackageJSONSync } from 'local-pkg'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pkgJson = loadPackageJSONSync()!
const version = pkgJson.version!.split('.').
  map((item) => Number(item)) as [major: number, minor: number, patch: number]

const answer = await inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: '请选择需要发行的类型',
    choices: ['patch', 'minor', 'major'],
    default: 'patch',
  },
])

switch (answer.type as 'patch' | 'minor' | 'major') {
  case 'patch': {
    version[2] += 1
    break
  }
  case 'minor': {
    version[1] += 1
    version[2] = 0
    break
  }
  case 'major': {
    version[0] += 1
    version[1] = 0
    version[2] = 0
    break
  }
}

pkgJson.version = version.join('.')
writeFileSync(resolve(__dirname, '../package.json'), JSON.stringify(pkgJson, null, 2), 'utf8')
const execOption = { encoding: 'utf8', cwd: __dirname } as const
execSync('git add ../package.json', execOption)
execSync(`git commit -m "release: v${pkgJson.version}"`, execOption)
execSync(`git tag v${pkgJson.version}`, execOption)

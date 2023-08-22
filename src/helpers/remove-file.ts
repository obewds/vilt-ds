// ./src/helpers/remove-file.ts

import fs from 'fs-extra'

import cliSuccessMessage from './cli-success-message.js'
import cwd from './cwd.js'

export default function (filenamePath:string): void {

    fs.removeSync( cwd + filenamePath)

    cliSuccessMessage('.' + filenamePath + ' file was deleted successfully!', false, false)

}

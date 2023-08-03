// ./src/helpers/install-when-no-file.ts

import fs from 'fs-extra'

import cliSuccessMessage from './cli-success-message.js'
import cliWarningMessage from './cli-warning-message.js'
import cwd from './cwd.js'
import projectFileDoesExist from './project-file-does-exist.js'

export default function (rootRelativePath:string, filenameStr:string, newFileData:string): void {

    const filename = filenameStr
    const filepath = rootRelativePath + filename

    if ( ! projectFileDoesExist(filepath) ) {

        fs.outputFileSync(cwd + filepath, newFileData, { flag: 'w+' })

        cliSuccessMessage('.' + filepath + ' file was created successfully!', false, false)

    } else {

        cliWarningMessage('A .' + filepath + ' file was found, so no changes were made!', false, false)

    }

}

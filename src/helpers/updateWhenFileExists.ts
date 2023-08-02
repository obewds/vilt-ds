// ./src/helpers/updateWhenFileExists.ts

import fs from 'fs-extra'

import cliSuccessMessage from './cliSuccessMessage.js'
import cliWarningMessage from './cliWarningMessage.js'
import cwd from './cwd.js'
import projectFileDoesExist from './projectFileDoesExist.js'

export default function (rootRelativePath:string, filenameStr:string, newFileData:string): void {

    const filename = filenameStr
    const filepath = rootRelativePath + filename

    if ( projectFileDoesExist(filepath) ) {

        fs.outputFileSync(cwd + filepath, newFileData, { flag: 'w+' })

        cliSuccessMessage('.' + filepath + ' file was updated successfully!', false, false)

    } else {

        cliWarningMessage('.' + filepath + ' was not found, so no updates were made!', false, false)

    }

}

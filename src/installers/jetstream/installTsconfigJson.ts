// ./src/installers/installTsconfigJson.ts

import fs from 'fs-extra'

import cliSuccessMessage from '../../helpers/cliSuccessMessage.js'
import cliWarningMessage from '../../helpers/cliWarningMessage.js'
import cwd from '../../helpers/cwd.js'
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js'

import viltDsTypescriptConfig from '../../data/typescript/viltDsTypescriptConfig.js'

export default function (): void {

    const filename = 'tsconfig.json'
    const filepath = '/' + filename

    if ( ! projectFileDoesExist(filepath) ) {

        fs.outputFileSync(cwd + filepath, JSON.stringify(viltDsTypescriptConfig, null, 4), { flag: 'w+' })

        cliSuccessMessage(cwd + filepath + ' file was created successfully!', false, false)

    } else {

        cliWarningMessage(cwd + filepath + ' was found, so no changes were made!', false, false)

    }


}

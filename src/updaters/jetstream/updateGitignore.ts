// ./src/updaters/jetstream/updateGitignore.ts

import fs from 'fs-extra'

import generateGitignore from '../../generators/jetstream/generateGitignore.js'

import cliSuccessMessage from '../../helpers/cli-success-message.js'
import cliWarningMessage from '../../helpers/cli-warning-message.js'
import cwd from '../../helpers/cwd.js'
import projectFileDoesExist from '../../helpers/project-file-does-exist.js'

export default function (): void {

    const filepath = '/.gitignore'

    // check if user's current repo root directory has a Laravel/Jetstream .gitignore file
    if ( projectFileDoesExist(filepath) ) {

        // extract the contents of the Laravel/Jetstream .gitignore file
        fs.readFile(cwd + filepath, 'utf8', function(err, data) {
            
            // error check
            if (err) { throw err }
            
            // If no error, then overwrite the current gitignore file content wrapped in VILT DS gitignore code
            fs.outputFileSync(cwd + filepath, generateGitignore(String(data)), { flag: 'w+' })

            cliSuccessMessage('.' + filepath + ' file was updated successfully!', false, false)

        })

    } else {

        cliWarningMessage('.' + filepath + ' was not found, so no updates were made!', false, false)

    }

}

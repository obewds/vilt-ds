// ./src/updaters/jetstream/updateJetstreamGitignore.ts

import fs from 'fs-extra'

import generateJetstreamGitignore from '../../generators/jetstream/generateJetstreamGitignore.js'

import cwd from '../../helpers/cwd.js'
import ifProjectFileExists from '../../helpers/ifProjectFileExists.js'

export default function (): void {

    const filepath = '/.gitignore'

    // check if user's current repo root directory has a Laravel/Jetstream .gitignore file
    if (ifProjectFileExists(filepath)) {

        // extract the contents of the Laravel/Jetstream .gitignore file
        fs.readFile(cwd + filepath, 'utf8', function(err, data) {
            
            // error check
            if (err) { throw err }
            
            // If no error, then overwrite the current gitignore file content wrapped in VILT DS gitignore code
            fs.outputFileSync(cwd + filepath, generateJetstreamGitignore(String(data)), { flag: 'w+' })

        })

    }

}

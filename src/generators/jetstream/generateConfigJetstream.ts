// ./src/generators/jetstream/generateConfigJetstream.ts

import fs from 'fs-extra'

import cwd from '../../helpers/cwd.js'
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js'

export default function (jetstreamGitignoreText:string): string {

    const filename = 'jetstream.php'
    const filepath = '/config/' + filename

    if ( projectFileDoesExist(filepath) ) {

        fs.readFile(cwd + filepath, 'utf8', function(err, data) {
            
            // error check
            if (err) { throw err }

            let modifiedData = String(data).replace(
                /\/\/Features::termsAndPrivacyPolicy(),/g, 'Features::termsAndPrivacyPolicy(),'
            ).replace(
                /\/\/Features::api(),/g, 'Features::api(),'
            )
            
            // If no error, then overwrite the current gitignore file content wrapped in VILT DS gitignore code
            // fs.outputFileSync(cwd + filepath, generateJetstreamGitignore(String(data)), { flag: 'w+' })

        })

    }

    return ''

}
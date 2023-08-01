// ./src/updaters/jetstream/updateConfigJetstream.ts

import fs from 'fs-extra'

import cwd from '../../helpers/cwd.js'
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js'

export default function (): void {

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
            
            // If no error, then overwrite the current config/jetstream.php file content with the modifications
            fs.outputFileSync(cwd + filepath, modifiedData, { flag: 'w+' })

        })

    }

}
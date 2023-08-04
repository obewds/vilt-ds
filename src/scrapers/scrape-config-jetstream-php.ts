// ./src/scrapers/scrape-config-jetstream-php.ts

import fs from 'fs-extra'
import cwd from '../helpers/cwd.js'
import projectFileDoesExist from '../helpers/project-file-does-exist.js'

export default function (): string|null {

    const path = '/config/jetstream.php'

    if ( projectFileDoesExist(path) ) {

        var scraped = fs.readFileSync(cwd + path, 'utf8')

        let modifiedData = String(scraped).replace(
            '// Features::termsAndPrivacyPolicy()',
            'Features::termsAndPrivacyPolicy()'
        ).replace(
            '// Features::api()',
            'Features::api()'
        )

        return modifiedData

    } else {

        return null

    }

}

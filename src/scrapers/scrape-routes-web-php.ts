// ./src/scrapers/scrape-routes-web-php.ts

import fs from 'fs-extra'
import cwd from '../helpers/cwd.js'
import projectFileDoesExist from '../helpers/project-file-does-exist.js'

export default function (): string|null {

    const path = '/routes/web.php'

    if ( projectFileDoesExist(path) ) {

        var scraped = fs.readFileSync(cwd + path, 'utf8')

        return scraped

    } else {

        return null

    }

}

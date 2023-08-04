// ./src/scrapers/scrape-gitignore.ts

import fs from 'fs-extra'
import cwd from '../helpers/cwd.js'
import projectFileDoesExist from '../helpers/project-file-does-exist.js'

export default function (): string|null {

    const path = cwd + '/.gitignore'

    if ( projectFileDoesExist(path) ) {

        var scraped = fs.readFileSync(path,'utf8')

        return scraped

    } else {

        return null

    }

}

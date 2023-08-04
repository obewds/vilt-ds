// ./src/scrapers/scrape-routes-web-php.ts
import fs from 'fs-extra';
import cwd from '../helpers/cwd.js';
import projectFileDoesExist from '../helpers/project-file-does-exist.js';
export default function () {
    const path = cwd + '/routes/web.php';
    if (projectFileDoesExist(path)) {
        var scraped = fs.readFileSync(path, 'utf8');
        return scraped;
    }
    else {
        return null;
    }
}
//# sourceMappingURL=scrape-routes-web-php.js.map
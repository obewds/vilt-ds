// ./src/scrapers/scrape-gitignore.ts
import fs from 'fs-extra';
import cwd from '../helpers/cwd.js';
import projectFileDoesExist from '../helpers/project-file-does-exist.js';
export default function () {
    const path = cwd + '/.gitignore';
    const fileExists = projectFileDoesExist(path);
    if (fileExists) {
        var scraped = fs.readFileSync(path, 'utf8');
        let modifiedData = String(scraped).replace('// Features::termsAndPrivacyPolicy()', 'Features::termsAndPrivacyPolicy()').replace('// Features::api()', 'Features::api()');
        return modifiedData;
    }
    else {
        return null;
    }
}
//# sourceMappingURL=scrape-gitignore.js.map
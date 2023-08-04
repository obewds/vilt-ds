// ./src/generators/jetstream/generate-gitignore.ts
import scrapeGitignore from '../../scrapers/scrape-gitignore.js';
import viltDsDeveloperGitignore from '../../data/gitignore/vilt-ds-developer-gitignore.js';
import viltDsMacGitignore from '../../data/gitignore/vilt-ds-mac-gitignore.js';
import viltDsWindowsGitignore from '../../data/gitignore/vilt-ds-windows-gitignore.js';
const filepathComment = '# ./.gitignore';
const defaultCode = `${filepathComment}

${viltDsDeveloperGitignore}

${viltDsMacGitignore}

${viltDsWindowsGitignore}
`;
export default function () {
    const scrapedData = scrapeGitignore();
    const output = scrapedData === null ? defaultCode : defaultCode.replace(filepathComment, `${filepathComment}

${scrapedData}`);
    return output;
}
//# sourceMappingURL=generate-gitignore.js.map
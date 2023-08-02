// ./src/generators/jetstream/generateGitignore.ts

import viltDsDeveloperGitignore from '../../data/gitignore/vilt-ds-developer-gitignore.js'
import viltDsMacGitignore from '../../data/gitignore/vilt-ds-mac-gitignore.js'
import viltDsWindowsGitignore from '../../data/gitignore/vilt-ds-windows-gitignore.js'

export default function (installedGitignoreText:string): string {

return `# ./.gitignore

${installedGitignoreText}

${viltDsDeveloperGitignore}

${viltDsMacGitignore}

${viltDsWindowsGitignore}
`;

}

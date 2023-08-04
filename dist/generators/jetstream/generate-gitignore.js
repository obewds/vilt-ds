// ./src/generators/jetstream/generate-gitignore.ts
import viltDsDeveloperGitignore from '../../data/gitignore/vilt-ds-developer-gitignore.js';
import viltDsMacGitignore from '../../data/gitignore/vilt-ds-mac-gitignore.js';
import viltDsWindowsGitignore from '../../data/gitignore/vilt-ds-windows-gitignore.js';
export default function (installedGitignoreText) {
    return `# ./.gitignore

${installedGitignoreText}

${viltDsDeveloperGitignore}

${viltDsMacGitignore}

${viltDsWindowsGitignore}
`;
}
//# sourceMappingURL=generate-gitignore.js.map
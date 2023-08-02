// ./src/generators/jetstream/generateGitignore.ts
import developer from '../../data/gitignore/developer.js';
import mac from '../../data/gitignore/mac.js';
import windows from '../../data/gitignore/windows.js';
export default function (installedGitignoreText) {
    return `# ./.gitignore

${installedGitignoreText}

${developer}

${mac}

${windows}
`;
}
//# sourceMappingURL=generateGitignore.js.map
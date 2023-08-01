// ./src/generators/jetstream/generateJetstreamGitignore.ts
import developer from '../../data/gitignore/developer.js';
import mac from '../../data/gitignore/mac.js';
import windows from '../../data/gitignore/windows.js';
export default function (jetstreamGitignoreText) {
    return `# ./.gitignore

${jetstreamGitignoreText}

${developer}

${mac}

${windows}

`;
}
//# sourceMappingURL=generateJetstreamGitignore.js.map
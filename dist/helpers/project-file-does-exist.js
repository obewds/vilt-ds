// ./src/helpers/project-file-does-exist.ts
import fs from 'fs-extra';
import cwd from './cwd.js';
export default function (filepath) {
    const currentFilepath = cwd + filepath;
    try {
        if (fs.existsSync(currentFilepath) && filepath !== '') {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.error(err);
    }
}
//# sourceMappingURL=project-file-does-exist.js.map
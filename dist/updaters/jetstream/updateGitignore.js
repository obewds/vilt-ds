// ./src/updaters/jetstream/updateGitignore.ts
import fs from 'fs-extra';
import generateGitignore from '../../generators/jetstream/generateGitignore.js';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
export default function () {
    const filepath = '/.gitignore';
    // check if user's current repo root directory has a Laravel/Jetstream .gitignore file
    if (projectFileDoesExist(filepath)) {
        // extract the contents of the Laravel/Jetstream .gitignore file
        fs.readFile(cwd + filepath, 'utf8', function (err, data) {
            // error check
            if (err) {
                throw err;
            }
            // If no error, then overwrite the current gitignore file content wrapped in VILT DS gitignore code
            fs.outputFileSync(cwd + filepath, generateGitignore(String(data)), { flag: 'w+' });
            cliSuccessMessage(cwd + filepath + ' file updated successfully!', false, false);
        });
    }
    else {
        cliWarningMessage(cwd + filepath + ' not found, so no updates were made!', false, false);
    }
}
//# sourceMappingURL=updateGitignore.js.map
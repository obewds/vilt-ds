// ./src/installers/installViltDsJetstream.ts
import fs from 'fs-extra';
import gitignore from '../generators/jetstream/gitignore.js';
import cwd from '../helpers/cwd.js';
import ifProjectFileExists from '../helpers/ifProjectFileExists.js';
export default function () {
    // console.log(gitignore())
    const gitignoreFilepath = cwd + '/.gitignore';
    // check if user's current repo root directory has a Laravel/Jetstream .gitignore file
    if (ifProjectFileExists('/.gitignore')) {
        // extract the contents of the Laravel/Jetstream .gitignore file
        const currentGitignore = fs.readFile(gitignoreFilepath, 'utf8', function (err, data) {
            // error check
            if (err) {
                throw err;
            }
            // If no error then add the contents of the extracted file to the cli gitignore generator method
            // and overwrite the current gitignore file content wrapped in VILT DS gitignore code
            fs.outputFileSync(gitignoreFilepath, gitignore(String(data)), { flag: 'w+' });
        });
    }
    else {
        // otherwise just output a fresh gitignore file
        fs.outputFileSync(gitignoreFilepath, gitignore(''), { flag: 'w+' });
    }
}
//# sourceMappingURL=installViltDsJetstream.js.map
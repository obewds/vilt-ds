// ./src/updaters/jetstream/updateConfigJetstreamPhpFile.ts
import fs from 'fs-extra';
import cliSuccessMessage from '../../helpers/cli-success-message.js';
import cliWarningMessage from '../../helpers/cli-warning-message.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/project-file-does-exist.js';
export default function () {
    const filename = 'jetstream.php';
    const filepath = '/config/' + filename;
    if (projectFileDoesExist(filepath)) {
        fs.readFile(cwd + filepath, 'utf8', function (err, data) {
            // error check
            if (err) {
                throw err;
            }
            let modifiedData = String(data).replace('// Features::termsAndPrivacyPolicy()', 'Features::termsAndPrivacyPolicy()').replace('// Features::api()', 'Features::api()');
            // If no error, then overwrite the current config/jetstream.php file content with the modifications
            fs.outputFileSync(cwd + filepath, modifiedData, { flag: 'w+' });
            cliSuccessMessage('.' + filepath + ' file was updated successfully!', false, false);
        });
    }
    else {
        cliWarningMessage('.' + filepath + ' was not found, so no updates were made!', false, false);
    }
}
//# sourceMappingURL=updateConfigJetstreamPhp.js.map
// ./src/installers/installViteConfigTs.ts
import fs from 'fs-extra';
import generateViteConfigTs from '../../generators/jetstream/generateViteConfigTs.js';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
export default function () {
    const filename = 'vite.config.ts';
    const filepath = '/' + filename;
    if (!projectFileDoesExist(filepath)) {
        fs.outputFileSync(cwd + filepath, generateViteConfigTs(), { flag: 'w+' });
        cliSuccessMessage(filepath + ' file was created successfully!', false, false);
    }
    else {
        cliWarningMessage(filepath + ' was found, so no changes were made!', false, false);
    }
}
//# sourceMappingURL=installViteConfigTs.js.map
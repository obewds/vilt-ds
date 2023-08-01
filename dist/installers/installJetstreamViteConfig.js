// ./src/installers/installJetstreamViteConfig.ts
import fs from 'fs-extra';
import generateJetstreamViteConfig from '../generators/jetstream/generateJetstreamViteConfig.js';
import cliSuccessMessage from '../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../helpers/cliWarningMessage.js';
import cwd from '../helpers/cwd.js';
import projectFileDoesExist from '../helpers/projectFileDoesExist.js';
export default function () {
    const filename = 'vite.config.ts';
    const filepath = '/' + filename;
    if (!projectFileDoesExist(filepath)) {
        fs.outputFileSync(cwd + filepath, generateJetstreamViteConfig(), { flag: 'w+' });
        cliSuccessMessage(filepath + ' file was created successfully!', false, false);
    }
    else {
        cliWarningMessage(filepath + ' was found, so no changes were made!', false, false);
    }
}
//# sourceMappingURL=installJetstreamViteConfig.js.map
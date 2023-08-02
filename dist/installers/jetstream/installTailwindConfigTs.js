// ./src/installers/installTailwindConfigTs.ts
import fs from 'fs-extra';
import generateTailwindConfigTs from '../../generators/jetstream/generateTailwindConfigTs.js';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
export default function () {
    const filename = 'tailwind.config.ts';
    const filepath = '/' + filename;
    if (!projectFileDoesExist(filepath)) {
        fs.outputFileSync(cwd + filepath, generateTailwindConfigTs(), { flag: 'w+' });
        cliSuccessMessage('.' + filepath + ' file was created successfully!', false, false);
    }
    else {
        cliWarningMessage('A .' + filepath + ' file was found, so no changes were made!', false, false);
    }
}
//# sourceMappingURL=installTailwindConfigTs.js.map
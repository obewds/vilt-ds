// ./src/installers/installVscodeExtensionsJson.ts
import fs from 'fs-extra';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
import viltDsVsCodeExtensions from '../../data/ide/viltDsVsCodeExtensions.js';
export default function () {
    const filename = 'extensions.json';
    const filepath = '/.vscode/' + filename;
    if (!projectFileDoesExist(filepath)) {
        fs.outputFileSync(cwd + filepath, JSON.stringify(viltDsVsCodeExtensions, null, 4), { flag: 'w+' });
        cliSuccessMessage(filepath + ' file was created successfully!', false, false);
    }
    else {
        cliWarningMessage(filepath + ' was found, so no changes were made!', false, false);
    }
}
//# sourceMappingURL=installVscodeExtensionsJson.js.map
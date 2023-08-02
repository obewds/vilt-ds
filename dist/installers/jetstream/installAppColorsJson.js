// ./src/installers/installAppColorsJson.ts
import fs from 'fs-extra';
import cliSuccessMessage from '../../helpers/cliSuccessMessage.js';
import cliWarningMessage from '../../helpers/cliWarningMessage.js';
import cwd from '../../helpers/cwd.js';
import projectFileDoesExist from '../../helpers/projectFileDoesExist.js';
import viltDsAppColorsJson from '../../data/colors/viltDsAppColorsJson.js';
export default function () {
    const filename = 'app.colors.json';
    const filepath = '/resources/js/' + filename;
    if (!projectFileDoesExist(filepath)) {
        fs.outputFileSync(cwd + filepath, JSON.stringify(viltDsAppColorsJson, null, 4), { flag: 'w+' });
        cliSuccessMessage('.' + filepath + ' file was created successfully!', false, false);
    }
    else {
        cliWarningMessage('A .' + filepath + ' file was found, so no changes were made!', false, false);
    }
}
//# sourceMappingURL=installAppColorsJson.js.map
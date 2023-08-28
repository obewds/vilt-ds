// ./src/helpers/install-file.ts
import fs from 'fs-extra';
import cliSuccessMessage from './cli-success-message.js';
import cwd from './cwd.js';
export default function (filenamePath, fileContents) {
    fs.outputFileSync(cwd + filenamePath, fileContents, { flag: 'w+' });
    cliSuccessMessage('.' + filenamePath + ' file was installed successfully!', false, false);
}
//# sourceMappingURL=install-file.js.map
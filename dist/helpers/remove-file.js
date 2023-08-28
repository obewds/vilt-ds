// ./src/helpers/remove-file.ts
import fs from 'fs-extra';
import cliSuccessMessage from './cli-success-message.js';
import cwd from './cwd.js';
export default function (filenamePath) {
    fs.removeSync(cwd + filenamePath);
    cliSuccessMessage('.' + filenamePath + ' file was deleted successfully!', false, false);
}
//# sourceMappingURL=remove-file.js.map
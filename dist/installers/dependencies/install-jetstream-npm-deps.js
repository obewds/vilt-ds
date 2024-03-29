// ./src/installers/dependencies/install-jetstream-npm-deps.ts
import cliSuccessMessage from '../../helpers/cli-success-message.js';
import run from '../../helpers/run.js';
import viltDsJetstreamDeps from '../../data/npm/vilt-ds-jetstream-deps.js';
export default function () {
    const command = 'npm install -D ' + viltDsJetstreamDeps.join(' ');
    run(command);
    console.log(' ');
    viltDsJetstreamDeps.forEach((dep) => cliSuccessMessage(dep + ' dependency installed!', false, false));
    console.log(' ');
}
//# sourceMappingURL=install-jetstream-npm-deps.js.map
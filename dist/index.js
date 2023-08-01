#!/usr/bin/env node
// ./src/index.ts
import cliStartMessage from './helpers/cliStartMessage.js';
import selectInstallation from './helpers/selectInstallation.js';
import installViltDsJetstream from './installers/installViltDsJetstream.js';
let userInstallation = null;
cliStartMessage();
userInstallation = await selectInstallation();
console.log(' ');
if (userInstallation === 'Install VILT DS Into A Laravel Jetstream Starter App') {
    installViltDsJetstream();
}
//# sourceMappingURL=index.js.map
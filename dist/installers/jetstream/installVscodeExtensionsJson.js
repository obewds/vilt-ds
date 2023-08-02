// ./src/installers/jetstream/installVscodeExtensionsJson.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import viltDsVsCodeExtensions from '../../data/ide/viltDsVsCodeExtensions.js';
export default function () {
    installWhenNoFile('/.vscode/', 'extensions.json', JSON.stringify(viltDsVsCodeExtensions, null, 4));
}
//# sourceMappingURL=installVscodeExtensionsJson.js.map
// ./src/installers/jetstream/installTsconfigJson.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import viltDsTypescriptConfig from '../../data/typescript/vilt-ds-typescript-config.js';
export default function () {
    installWhenNoFile('/', 'tsconfig.json', JSON.stringify(viltDsTypescriptConfig, null, 4));
}
//# sourceMappingURL=installTsconfigJson.js.map
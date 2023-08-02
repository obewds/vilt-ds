// ./src/installers/jetstream/installTsconfigJson.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import viltDsTypescriptConfig from '../../data/typescript/viltDsTypescriptConfig.js';
export default function () {
    installWhenNoFile('/', 'tsconfig.json', JSON.stringify(viltDsTypescriptConfig, null, 4));
}
//# sourceMappingURL=installTsconfigJson.js.map
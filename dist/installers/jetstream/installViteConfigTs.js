// ./src/installers/jetstream/installViteConfigTs.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import generateViteConfigTs from '../../generators/jetstream/generateViteConfigTs.js';
export default function () {
    installWhenNoFile('/', 'vite.config.ts', generateViteConfigTs());
}
//# sourceMappingURL=installViteConfigTs.js.map
// ./src/installers/jetstream/installBootstrapTs.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateBootstrapTs from '../../generators/jetstream/generateBootstrapTs.js';
export default function () {
    installWhenNoFile('/resources/js/', 'bootstrap.ts', generateBootstrapTs());
}
//# sourceMappingURL=installBootstrapTs.js.map
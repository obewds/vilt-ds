// ./src/installers/jetstream/installTailwindConfigTs.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import generateTailwindConfigTs from '../../generators/jetstream/generate-tailwind-config-ts.js';
export default function () {
    installWhenNoFile('/', 'tailwind.config.ts', generateTailwindConfigTs());
}
//# sourceMappingURL=installTailwindConfigTs.js.map
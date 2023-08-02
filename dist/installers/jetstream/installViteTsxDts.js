// ./src/installers/jetstream/installViteTsxDts.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateViteTsxDts from '../../generators/jetstream/generateViteTsxDts.js';
export default function () {
    installWhenNoFile('/resources/js/', 'vite-tsx.d.ts', generateViteTsxDts());
}
//# sourceMappingURL=installViteTsxDts.js.map
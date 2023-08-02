// ./src/installers/jetstream/installViteWindowDts.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import generateViteWindowDts from '../../generators/jetstream/generateViteWindowDts.js';
export default function () {
    installWhenNoFile('/resources/js/', 'vite-window.d.ts', generateViteWindowDts());
}
//# sourceMappingURL=installViteWindowDts.js.map
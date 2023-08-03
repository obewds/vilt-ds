// ./src/installers/jetstream/installViteWindowDts.ts
import installWhenNoFile from '../../helpers/install-when-no-file.js';
import generateViteWindowDts from '../../generators/jetstream/resources/js/generate-vite-window-d-ts.js';
export default function () {
    installWhenNoFile('/resources/js/', 'vite-window.d.ts', generateViteWindowDts());
}
//# sourceMappingURL=installViteWindowDts.js.map
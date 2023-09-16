// ./src/updaters/vueventus-tests.ts
import installFile from '../helpers/install-file.js';
import generateVvAnchorTestTs from '../generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-anchor-test-ts.js';
import generateVvInertiaLinkTestTs from '../generators/jetstream/tests/Vitest/Components/vv/anchors/generate-vv-inertia-link-test-ts.js';
import generateVvButtonTestTs from '../generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-button-test-ts.js';
import generateVvColorModeButtonTestTs from '../generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-color-mode-button-test-ts.js';
import generateVvScrollUpTestTs from '../generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-scroll-up-test-ts.js';
import generateVvElTestTs from '../generators/jetstream/tests/Vitest/Components/vv/elements/generate-vv-el-test-ts.js';
import generateVvFormGroupTestTs from '../generators/jetstream/tests/Vitest/Components/vv/forms/generate-vv-form-group-test-ts.js';
import generateVvQuadFormGroupTestTs from '../generators/jetstream/tests/Vitest/Components/vv/forms/generate-vv-quad-form-group-test-ts.js';
import generateVvCheckboxTestTs from '../generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-checkbox-test-ts.js';
import generateVvInputTestTs from '../generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-input-test-ts.js';
import generateVvRadioTestTs from '../generators/jetstream/tests/Vitest/Components/vv/inputs/generate-vv-radio-test-ts.js';
import generateVvListItemTestTs from '../generators/jetstream/tests/Vitest/Components/vv/lists/generate-vv-list-item-test-ts.js';
import generateVvListTestTs from '../generators/jetstream/tests/Vitest/Components/vv/lists/generate-vv-list-test-ts.js';
import generateVvListboxTestTs from '../generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-listbox-test-ts.js';
import generateVvSelectTestTs from '../generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-select-test-ts.js';
import generateVvTextareaTestTs from '../generators/jetstream/tests/Vitest/Components/vv/textareas/generate-vv-textarea-test-ts.js';
export default function () {
    installFile('/test/Vitest/Components/vv/anchors/VvAnchor.test.ts', generateVvAnchorTestTs());
    installFile('/test/Vitest/Components/vv/anchors/VvInertiaLink.test.ts', generateVvInertiaLinkTestTs());
    installFile('/test/Vitest/Components/vv/buttons/VvButton.test.ts', generateVvButtonTestTs());
    installFile('/test/Vitest/Components/vv/buttons/VvColorModeButton.test.ts', generateVvColorModeButtonTestTs());
    installFile('/test/Vitest/Components/vv/buttons/VvScrollUp.test.ts', generateVvScrollUpTestTs());
    installFile('/test/Vitest/Components/vv/elements/VvEl.test.ts', generateVvElTestTs());
    installFile('/test/Vitest/Components/vv/forms/VvFormGroup.test.ts', generateVvFormGroupTestTs());
    installFile('/test/Vitest/Components/vv/forms/VvQuadFormGroup.test.ts', generateVvQuadFormGroupTestTs());
    installFile('/test/Vitest/Components/vv/inputs/VvCheckbox.test.ts', generateVvCheckboxTestTs());
    installFile('/test/Vitest/Components/vv/inputs/VvInput.test.ts', generateVvInputTestTs());
    installFile('/test/Vitest/Components/vv/inputs/VvRadio.test.ts', generateVvRadioTestTs());
    installFile('/test/Vitest/Components/vv/lists/VvListItem.test.ts', generateVvListItemTestTs());
    installFile('/test/Vitest/Components/vv/lists/VvList.test.ts', generateVvListTestTs());
    installFile('/test/Vitest/Components/vv/selects/VvListbox.test.ts', generateVvListboxTestTs());
    installFile('/test/Vitest/Components/vv/selects/VvSelect.test.ts', generateVvSelectTestTs());
    installFile('/test/Vitest/Components/vv/textareas/VvTextarea.test.ts', generateVvTextareaTestTs());
}
//# sourceMappingURL=vueventus-tests.js.map
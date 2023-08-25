// ./src/updaters/vueventus.ts

import installFile from '../helpers/install-file.js'

import generateVvAnchorVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue.js'
import generateVvInertiaLinkVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue.js'
import generateVvButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue.js'
import generateVvColorModeButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue.js'
import generateVvScrollUpVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue.js'
import generateVvElVue from '../generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue.js'
import generateVvFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue.js'
import generateVvQuadFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue.js'
import generateVvCheckboxVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue.js'
import generateVvInputVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue.js'
import generateVvRadioVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue.js'
import generateVvListItemVue from '../generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-item-vue.js'
import generateVvListVue from '../generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-vue.js'
import generateVvListboxVue from '../generators/jetstream/resources/js/Components/vv/selects/generate-vv-listbox-vue.js'
import generateVvSelectVue from '../generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue.js'
import generateVvTextareaVue from '../generators/jetstream/resources/js/Components/vv/textareas/generate-vv-textarea-vue.js'

export default function (): void {

    installFile( '/resources/js/Components/vv/anchors/VvAnchor.vue', generateVvAnchorVue() )
    installFile( '/resources/js/Components/vv/anchors/VvInertiaLink.vue', generateVvInertiaLinkVue() )
    installFile( '/resources/js/Components/vv/buttons/VvButton.vue', generateVvButtonVue() )
    installFile( '/resources/js/Components/vv/buttons/VvColorModeButton.vue', generateVvColorModeButtonVue() )
    installFile( '/resources/js/Components/vv/buttons/VvScrollUp.vue', generateVvScrollUpVue() )
    installFile( '/resources/js/Components/vv/elements/VvEl.vue', generateVvElVue() )
    installFile( '/resources/js/Components/vv/forms/VvFormGroup.vue', generateVvFormGroupVue() )
    installFile( '/resources/js/Components/vv/forms/VvQuadFormGroup.vue', generateVvQuadFormGroupVue() )
    installFile( '/resources/js/Components/vv/inputs/VvCheckbox.vue', generateVvCheckboxVue() )
    installFile( '/resources/js/Components/vv/inputs/VvInput.vue', generateVvInputVue() )
    installFile( '/resources/js/Components/vv/inputs/VvRadio.vue', generateVvRadioVue() )
    installFile( '/resources/js/Components/vv/lists/VvListItem.vue', generateVvListItemVue() )
    installFile( '/resources/js/Components/vv/lists/VvList.vue', generateVvListVue() )
    installFile( '/resources/js/Components/vv/selects/VvListbox.vue', generateVvListboxVue() )
    installFile( '/resources/js/Components/vv/selects/VvSelect.vue', generateVvSelectVue() )
    installFile( '/resources/js/Components/vv/textareas/VvTextarea.vue', generateVvTextareaVue() )

}

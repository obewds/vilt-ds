// ./src/generators/jetstream/resources/js/Pages/generate-vue-ventus-vue.ts
export default function () {
    return `<!-- ./resources/js/Pages/VueVentus.vue -->

<script setup lang="ts">

    import AppLayout from '../Layouts/AppLayout.vue'
    import VvAnchor from '../Components/vv/anchors/VvAnchor.vue'
    import VvButton from '../Components/vv/buttons/VvButton.vue'
    import VvEl from '../Components/vv/elements/VvEl.vue'
    import VvFormGroup from '../Components/vv/forms/VvFormGroup.vue'
    import VvInertiaLink from '../Components/vv/anchors/VvInertiaLink.vue'
    import VvInput from '../Components/vv/inputs/VvInput.vue'
    import VvList from '../Components/vv/lists/VvList.vue'
    import VvQuadFormGroup from '../Components/vv/forms/VvQuadFormGroup.vue'
    import VvTextarea from '../Components/vv/textareas/VvTextarea.vue'


    const classes = {
        pb: 'pb-12',
        wrap: 'max-w-7xl mx-auto sm:px-6 lg:px-8',
        card: 'bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-6',
        mb: 'mb-3',
        cardH3: 'text-2xl',
        cardSubHead: 'pb-4',
    }

    const docsComponentLink = ( filepath: string ) => 'https://obewds.github.io/vueventus/components/' + filepath + '.html'

</script>

<template>

    <AppLayout
        title="Dashboard"
    >

        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                VueVentus Examples
            </h2>
        </template>

        <!-- VvInertiaLink -->
        <div :class="['pt-12', classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvInertiaLink
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        Docs Coming Soon!
                    </div>
                    <VvInertiaLink href="/">No Props VvInertiaLink</VvInertiaLink>
                    <br>
                    <VvInertiaLink href="/" color="default">VvInertiaLink color="default"</VvInertiaLink>
                    <br>
                    <VvInertiaLink href="/" color="error">VvInertiaLink color="error"</VvInertiaLink>
                    <br>
                    <VvInertiaLink href="/" color="primary">VvInertiaLink color="primary"</VvInertiaLink>
                    <br>
                    <VvInertiaLink href="/" color="secondary">VvInertiaLink color="secondary"</VvInertiaLink>
                    <br>
                    <VvInertiaLink href="/" color="success">VvInertiaLink color="success"</VvInertiaLink>
                </div>
            </div>
        </div>

        <!-- VvAnchor -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        <span class="block">VvAnchor</span>
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('anchors/vv-anchor')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvAnchor>No Props VvAnchor</VvAnchor>
                    <br>
                    <VvAnchor color="default">VvAnchor color="default"</VvAnchor>
                    <br>
                    <VvAnchor color="error">VvAnchor color="error"</VvAnchor>
                    <br>
                    <VvAnchor color="primary">VvAnchor color="primary"</VvAnchor>
                    <br>
                    <VvAnchor color="secondary">VvAnchor color="secondary"</VvAnchor>
                    <br>
                    <VvAnchor color="success">VvAnchor color="success"</VvAnchor>
                </div>
            </div>
        </div>

        <!-- VvButton palettes/colors -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvButton Palettes/Colors
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('buttons/vv-button')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvButton class="mb-3">No Props VvButton</VvButton>
                    <br>
                    <VvButton color="default" class="mb-3">VvButton color="default"</VvButton>
                    <br>
                    <VvButton color="error" class="mb-3">VvButton color="error"</VvButton>
                    <br>
                    <VvButton color="primary" class="mb-3">VvButton color="primary"</VvButton>
                    <br>
                    <VvButton color="secondary" class="mb-3">VvButton color="secondary"</VvButton>
                    <br>
                    <VvButton color="success" class="mb-3">VvButton color="success"</VvButton>

                    <br>
                    <VvButton palette="outline" color="default" class="border mb-3">palette="outline" color="default"</VvButton>
                    <br>
                    <VvButton palette="outline" color="error" class="mb-3">palette="outline" color="error"</VvButton>
                    <br>
                    <VvButton palette="outline" color="primary" class="mb-3">palette="outline" color="primary"</VvButton>
                    <br>
                    <VvButton palette="outline" color="secondary" class="mb-3">palette="outline" color="secondary"</VvButton>
                    <br>
                    <VvButton palette="outline" color="success">palette="outline" color="success"</VvButton>
                </div>
            </div>
        </div>

        <!-- VvButton sizes -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvButton Sizes
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('buttons/vv-button')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvButton size="4xs" class="mb-3">VvButton size="4xs"</VvButton>
                    <br>
                    <VvButton size="3xs" class="mb-3">VvButton size="3xs"</VvButton>
                    <br>
                    <VvButton size="2xs" class="mb-3">VvButton size="2xs"</VvButton>
                    <br>
                    <VvButton size="xs" class="mb-3">VvButton size="xs"</VvButton>
                    <br>
                    <VvButton size="sm" class="mb-3">VvButton size="sm"</VvButton>
                    <br>
                    <VvButton size="md" class="mb-3">VvButton size="md"</VvButton>
                    <br>
                    <VvButton size="lg" class="mb-3">VvButton size="lg"</VvButton>
                    <br>
                    <VvButton size="xl" class="mb-3">VvButton size="xl"</VvButton>
                    <br>
                    <VvButton size="2xl" class="mb-3">VvButton size="2xl"</VvButton>
                    <br>
                    <VvButton size="3xl" class="mb-3">VvButton size="3xl"</VvButton>
                    <br>
                    <VvButton size="4xl">VvButton size="4xl"</VvButton>
                </div>
            </div>
        </div>

        <!-- VvEl -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvEl
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('elements/vv-el')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvEl tag="span" text-color="default">VvEl text-color="default"</VvEl>
                    <br>
                    <VvEl tag="span" text-color="error">VvEl text-color="error"</VvEl>
                    <br>
                    <VvEl tag="span" text-color="primary">VvEl text-color="primary"</VvEl>
                    <br>
                    <VvEl tag="span" text-color="secondary">VvEl text-color="secondary"</VvEl>
                    <br>
                    <VvEl tag="span" text-color="success">VvEl text-color="success"</VvEl>
                </div>
            </div>
        </div>

        <!-- VvFormGroup -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvFormGroup
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('forms/vv-form-group')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvFormGroup
                        label="Example Label:"
                        label-for="displayHelp-id"
                        :display-help="true"
                        help-text="Example help text"
                    >
                        <VvInput id="displayHelp-id" placeholder="Example VvInput"/>
                    </VvFormGroup>
                </div>
            </div>
        </div>

        <!-- VvQuadFormGroup -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvQuadFormGroup
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('forms/vv-quad-form-group')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvQuadFormGroup
                        label="Default State Example:"
                        label-for="default-state-input"
                        :display-help="true"
                        help-text="Example help text..."
                    >
                        <template v-slot:top>
                            <VvEl>Top Slot</VvEl>
                        </template>

                        <VvInput id="default-state-input"/>

                        <template v-slot:bottom>
                            <VvEl>Bottom Slot</VvEl>
                        </template>
                    </VvQuadFormGroup>
                </div>
            </div>
        </div>

        <!-- VvInput -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvInput
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('inputs/vv-input')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvInput color="default" value='VvInput color="default"'/>
                    <br>
                    <VvInput color="error" value='VvInput color="error"'/>
                    <br>
                    <VvInput color="success" value='VvInput color="success"'/>
                </div>
            </div>
        </div>

        <!-- VvList -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvList
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('lists/vv-list')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvList list-style-type-class="list-disc" marker-color="default" class="pl-6">
                        <li>VvList list-style-type-class="list-disc"</li>
                        <li>VvList marker-color="default"</li>
                    </VvList>
                    <VvList list-style-type-class="list-disc" marker-color="error" class="pl-6">
                        <li>VvList marker-color="error"</li>
                    </VvList>
                    <VvList list-style-type-class="list-disc" marker-color="primary" class="pl-6">
                        <li>VvList marker-color="primary"</li>
                    </VvList>
                    <VvList list-style-type-class="list-disc" marker-color="secondary" class="pl-6">
                        <li>VvList marker-color="secondary"</li>
                    </VvList>
                    <VvList list-style-type-class="list-disc" marker-color="success" class="pl-6">
                        <li>VvList marker-color="success"</li>
                    </VvList>
                </div>
            </div>
        </div>

        <!-- VvTextarea -->
        <div :class="[classes.pb]">
            <div :class="[classes.wrap]">
                <div :class="[classes.card]">
                    <h3 :class="[classes.cardH3]">
                        VvTextarea
                    </h3>
                    <div :class="[classes.cardSubHead]">
                        <VvAnchor
                            :external="true"
                            color="primary"
                            :href="docsComponentLink('textareas/vv-textarea')"
                        >
                            Docs
                        </VvAnchor>
                    </div>
                    <VvTextarea color="default" value='VvTextarea color="default"'/>
                    <br>
                    <VvTextarea color="error" value='VvTextarea color="error"'/>
                    <br>
                    <VvTextarea color="success" value='VvTextarea color="success"'/>
                </div>
            </div>
        </div>

    </AppLayout>

</template>
`;
}
//# sourceMappingURL=generate-vue-ventus-vue.js.map
// ./src/generators/jetstream/resources/js/generate-app-ts.ts
export default function () {
    return `// ./resources/js/app.ts

import type { DefineComponent } from 'vue'
import type { CreateInertiaAppProps } from './Types/app-types'
import type { VvAppGenericColors, VvAppDefaultTintsShades } from './Types/app-colors-types'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.es'
import { Ziggy as ziggyGeneratedData } from './ziggy'
import appColorsJson from './app.colors.json'

import './bootstrap'
import '../css/app.css'
import './gsap'

const appName = import.meta.env.VITE_APP_NAME || 'No VITE_APP_NAME found'
const appColors: VvAppGenericColors<VvAppDefaultTintsShades> = appColorsJson

const inertiaProps: CreateInertiaAppProps = {
    title: (title: string) => ` + "`${title} - ${appName}`" + `,
    resolve: (name: string) => resolvePageComponent(
        ` + "`./Pages/${name}.vue`" + `,
        import.meta.glob<DefineComponent>('./Pages/**/*.vue')
    ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, ziggyGeneratedData)
        .mount(el)
    },
    progress: {
        color: appColors.blue["500"],
    },
}

createInertiaApp(inertiaProps)
`;
}
//# sourceMappingURL=generate-app-ts.js.map
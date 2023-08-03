// ./src/generators/jetstream/resources/js/generate-app-vv-ts.ts
export default function () {
    return `// ./resources/js/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// appVv.defaults['VvInput'].size = 'md'
appVv.defaults['VvFormGroup'].labelClasses= 'capitalize opacity-75'
appVv.defaults['VvFormGroup'].labelTextSize = 'sm'

// Empty string value removes TWCSS underline classes from VueVentus anchor component default classes
// appVv.anchors.text = ''

// appVv.anchors.palettes.default = {
//     default: 'text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200',
//     error: 'text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200',
//     primary: 'text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200',
//     secondary: 'text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200',
//     success: 'text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200',
// }

// appVv.borders.palettes.default = {
//     '': '',
//     default: 'border-gray-200 dark:border-gray-600',
//     error: 'border-rose-600 dark:border-rose-300',
//     primary: 'border-blue-600 dark:border-blue-300',
//     secondary: 'border-teal-600 dark:border-teal-300',
//     success: 'border-green-600 dark:border-green-300',
// }

// appVv.hover = {
//     scale: 'hover:scale-103 focus:scale-103',
// }

// appVv.buttons.border = ''
// appVv.buttons.transition += ' ' + appVv.hover.scale

// appVv.buttons.palettes.outline = {
//     default: 'text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900',
//     error: 'text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900',
//     primary: 'text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900',
//     secondary: 'text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900',
//     success: 'text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900',
// }

// appVv.buttons.palettes.solid = {
//     default: 'text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50',
//     error: 'text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200',
//     primary: 'text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200',
//     secondary: 'text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200',
//     success: 'text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200',
// }

// appVv.buttons.palettes.default = appVv.buttons.palettes.solid

// appVv.checkboxes.palettes.default = {
//     default: 'focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300',
//     error: 'focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300',
//     primary: 'focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300',
//     secondary: 'focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300',
//     success: 'focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300',
// }

// appVv.colorModes.dark.ground = 'dark:bg-gray-900'
// appVv.colorModes.dark.hex = '#242426'
// appVv.colorModes.dark.text = 'dark:text-gray-100'

// appVv.colorModes.light.ground = 'bg-gray-100'
// appVv.colorModes.light.hex = '#e1e1e3'
// appVv.colorModes.light.text = 'text-gray-900'

// appVv.fills.palettes.default = {
//     default: 'dark:fill-gray-100 fill-gray-900',
//     error: 'fill-rose-500 dark:fill-rose-300',
//     primary: 'fill-blue-500 dark:fill-blue-300',
//     secondary: 'fill-teal-500 dark:fill-teal-300',
//     success: 'fill-green-600 dark:fill-green-300',
// }

// appVv.grounds.palettes.console = {
//     default: 'font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
//     error: 'font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
//     primary: 'font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
//     secondary: 'font-mono text-teal-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
//     success: 'font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
// }

// appVv.grounds.palettes.default = {
//     default: '',
//     error: 'text-white bg-rose-500 dark:bg-rose-600',
//     primary: 'text-white bg-blue-500 dark:bg-blue-600',
//     secondary: 'text-white bg-teal-500 dark:bg-teal-600',
//     success: 'text-white bg-green-500 dark:bg-green-600',
// }

// appVv.grounds.palettes.monochromatic = {
//     default: 'text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200',
//     error: 'text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200',
//     primary: 'text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200',
//     secondary: 'text-teal-800 bg-teal-200 dark:bg-teal-800 dark:text-teal-200',
//     success: 'text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300',
// }

// appVv.grounds.palettes.pastel = {
//     default: 'text-black bg-gray-100 dark:bg-gray-200',
//     error: 'text-black bg-rose-200 dark:bg-rose-300',
//     primary: 'text-black bg-blue-200 dark:bg-blue-300',
//     secondary: 'text-black bg-teal-200 dark:bg-teal-300',
//     success: 'text-black bg-green-300 dark:bg-green-400',
// }

// appVv.inputs.palettes.default = {
//     default: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white',
//     error: 'text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white',
//     success: 'text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white',
// }

// appVv.inputs.palettes.underlined = {
//     default: 'focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white',
//     error: 'focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white',
//     success: 'focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white',
// }

// appVv.listboxes.buttonPalettes.default = {
//     default: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500',
//     error: 'text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500',
//     success: 'text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500',
// }

// appVv.listboxes.buttonPalettes.underlined = {
//     default: 'focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500',
//     error: 'text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500',
//     success: 'text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500',
// }

// appVv.listboxes.optionPalettes.default = {
//     default: 'ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
//     error: 'ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
//     success: 'ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
// }

// appVv.listboxes.optionPalettes.underlined = {
//     default: 'ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
//     error: 'ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
//     success: 'ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white',
// }

// appVv.radios.palettes.default = {
//     default: 'focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300',
//     error: 'focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300',
//     primary: 'focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300',
//     secondary: 'focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300',
//     success: 'focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300',
// }

// appVv.scrollbars.palettes.default = {
//     '': '',
//     default: 'scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800',
//     error: 'scrollbar scrollbar-thumb-rose-100 scrollbar-track-rose-200 dark:scrollbar-thumb-rose-600 dark:scrollbar-track-rose-800',
//     primary: 'scrollbar scrollbar-thumb-blue-100 scrollbar-track-blue-200 dark:scrollbar-thumb-blue-600 dark:scrollbar-track-blue-800',
//     secondary: 'scrollbar scrollbar-thumb-teal-100 scrollbar-track-teal-200 dark:scrollbar-thumb-teal-600 dark:scrollbar-track-teal-800',
//     success: 'scrollbar scrollbar-thumb-green-100 scrollbar-track-green-200 dark:scrollbar-thumb-green-600 dark:scrollbar-track-green-800',
// }

// appVv.selects.palettes.default = {
//     default: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white',
//     error: 'text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white',
//     success: 'text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white',
// }

// appVv.textareas.palettes.default = appVv.inputs.palettes.default
// appVv.textareas.palettes.underlined = appVv.inputs.palettes.underlined

// appVv.text.palettes.default = {
//     default: '',
//     error: 'text-rose-500 dark:text-rose-300',
//     primary: 'text-blue-500 dark:text-blue-300',
//     secondary: 'text-teal-500 dark:text-teal-300',
//     success: 'text-green-600 dark:text-green-300',
//     neutral: 'dark:text-gray-100 text-gray-900',
// }

export default appVv

`;
}
//# sourceMappingURL=generate-app-vv-ts.js.map
// ./src/generators/jetstream/generate-tailwind-config-ts.ts

export default function (): string {

return `// ./tailwind.config.ts

import type { Config } from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'
import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import headlessUiTailwindCss from '@headlessui/tailwindcss'
import tailwindScrollbar from 'tailwind-scrollbar'

import vvExtendAnimation from './node_modules/@obewds/vueventus/dist/data/extend.animation.json'
import vvExtendKeyframes from './node_modules/@obewds/vueventus/dist/data/extend.keyframes.json'
import vvExtendMaxWidth from './node_modules/@obewds/vueventus/dist/data/extend.maxWidth.json'
import vvExtendRotate from './node_modules/@obewds/vueventus/dist/data/extend.rotate.json'
import vvExtendScale from './node_modules/@obewds/vueventus/dist/data/extend.scale.json'
import vvExtendTransitionDuration from './node_modules/@obewds/vueventus/dist/data/extend.transitionDuration.json'
import vvExtendWidth from './node_modules/@obewds/vueventus/dist/data/extend.width.json'
// import vvDefaultAppColors from './node_modules/@obewds/vueventus/dist/data/app.color.data.json'
import vvAppColors from './resources/js/app.colors.json'
// import vvThemeFontSize from './node_modules/@obewds/vueventus/dist/data/theme.fontSize.json'
import vvThemeListStyleType from './node_modules/@obewds/vueventus/dist/data/theme.listStyleType.json'
import vvThemeOpacity from './node_modules/@obewds/vueventus/dist/data/theme.opacity.json'
import vvThemeScreens from './node_modules/@obewds/vueventus/dist/data/theme.screens.json'

export default <Partial<Config>>{

    darkMode: 'class',

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        // Include VueVentus default TWCSS classes (for prototyping):
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
        './resources/js/**/*.ts',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: vvExtendAnimation,
            keyframes: vvExtendKeyframes,
            maxWidth: vvExtendMaxWidth,
            rotate: vvExtendRotate,
            scale: vvExtendScale,
            transitionDuration: vvExtendTransitionDuration,
            width: vvExtendWidth,
        },
        // colors: vvDefaultAppColors
        colors: vvAppColors,
        fontSize: {
            "5xs": ["0.35rem", { "lineHeight": "0.5rem" }],
            "4xs": ["0.45rem", { "lineHeight": "0.9rem" }],
            "3xs": ["0.55rem", { "lineHeight": "1rem" }],
            "2xs": ["0.65rem", { "lineHeight": "1rem" }],
            "xxs": ["0.65rem", { "lineHeight": "1rem" }],
            "xs": ["0.75rem", { "lineHeight": "1.125rem" }],
            "sm": ["0.875rem", { "lineHeight": "1.25rem" }],
            "tiny": ["0.875rem", { "lineHeight": "1.375rem" }],
            "base": ["1rem", { "lineHeight": "1.5rem" }],
            "md": ["1rem", { "lineHeight": "1.5rem" }],
            "lg": ["1.125rem", { "lineHeight": "1.75rem" }],
            "xl": ["1.25rem", { "lineHeight": "1.75rem" }],
            "xxl": ["1.5rem", { "lineHeight": "2rem" }],
            "2xl": ["1.5rem", { "lineHeight": "2rem" }],
            "3xl": ["1.875rem", { "lineHeight": "2.25rem" }],
            "4xl": ["2.25rem", { "lineHeight": "2.5rem" }],
            "5xl": ["2.5rem", { "lineHeight": "2.875rem" }],
            "6xl": ["2.875rem", { "lineHeight": "3.25rem" }],
            "7xl": ["3.25rem", { "lineHeight": "3.5rem" }],
            "8xl": ["3.5rem", { "lineHeight": "3.875rem" }],
            "9xl": ["3.875rem", { "lineHeight": "4.25rem" }],
            "10xl": ["4.25rem", { "lineHeight": "4.5rem" }],
            "11xl": ["4.5rem", { "lineHeight": "4.875rem" }],
            "12xl": ["4.875rem", { "lineHeight": "5.25rem" }]
        },
        listStyleType: vvThemeListStyleType,
        opacity: vvThemeOpacity,
        screens: vvThemeScreens,
    },

    variants: {
        extend: {
            opacity: ['disabled']
        },
        scrollbar: ['dark']
    },

    plugins: [aspectRatio, forms, typography, headlessUiTailwindCss, tailwindScrollbar],
}
`;

}

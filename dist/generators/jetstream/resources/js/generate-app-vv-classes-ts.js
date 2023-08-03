// ./src/generators/jetstream/resources/js/generate-app-vv-classes-ts.ts
export default function () {
    return `// ./resources/js/app.vv.classes.ts

import type { AppVvClasses } from './Types/app-vv-classes-types'

export default <AppVvClasses>{
    headings: {
        wrapper: 'flex justify-between items-center gap-5',
        heading: 'font-heading',
    },
    headlines: {
        display1: 'text-8xl md:text-9xl xl:text-10xl font-bold',
        display2: 'text-7xl md:text-8xl xl:text-9xl font-bold',
        display3: 'text-6xl md:text-7xl xl:text-8xl font-bold',
        display4: 'text-5xl md:text-6xl xl:text-7xl font-bold',
        h1: 'text-4xl md:text-5xl xl:text-6xl font-bold',
        h2: 'text-3xl md:text-4xl xl:text-5xl font-bold',
        h3: 'text-2xl md:text-3xl xl:text-4xl font-bold',
        h4: 'text-xl md:text-2xl xl:text-3xl font-bold',
        h5: 'text-lg md:text-xl xl:text-2xl font-bold',
        h6: 'text-base md:text-xl xl:text-xl font-bold',
        page: 'font-heading pb-5',
    },
    modals: {
        offCan: {
            dialog: 'relative z-50',
            container: 'fixed inset-0 overflow-hidden',
            wrapper: 'absolute inset-0 overflow-hidden',
            positioning: 'pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10',
            dialogPanel: 'pointer-events-auto w-screen max-w-md',
            panelContent: 'flex h-full flex-col overflow-y-auto bg-white dark:bg-gray-900 py-6 shadow-xl',
            contentHead: 'px-4 sm:px-6 pb-4 border-b border-gray-400 dark:border-black',
            contentHeader: 'flex items-start justify-between',
            marquee: 'text-sm uppercase opacity-75 pb-2',
            headline: 'text-4xl font-medium font-heading',
            closeWrapper: 'ml-3 flex h-7 items-center',
            contentBody: 'relative flex-1 px-4 sm:px-6',
            bodyWrap: 'absolute inset-0',
        },
    },
    pages: {
        internal: {
            wrapper: 'max-w-4xl mx-auto px-6 pt-10',
        },
    },
}
`;
}
//# sourceMappingURL=generate-app-vv-classes-ts.js.map
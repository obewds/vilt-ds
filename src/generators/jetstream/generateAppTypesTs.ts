// ./src/generators/jetstream/generateAppTypesTs.ts

export default function (): string {

return `// ./resources/js/Types/app-types.ts

import type { App as VueApp, DefineComponent, Plugin } from 'vue'
import type { Page } from '@inertiajs/core'
import type { InertiaApp, InertiaAppProps } from '@inertiajs/vue3/types/app'

export interface ImportMetaEnv {
    readonly APP_NAME: string
    readonly APP_ENV: string
    readonly APP_URL: string
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_NAME: string
    readonly VITE_PUSHER_APP_KEY: string
    readonly VITE_PUSHER_HOST: string
    readonly VITE_PUSHER_PORT: string
    readonly VITE_PUSHER_SCHEME: string
    readonly VITE_PUSHER_APP_CLUSTER: string
}

export interface ImportMeta {
    readonly env: ImportMetaEnv
}

export interface CreateInertiaAppProps {
    id?: string;
    resolve: (name: string) => DefineComponent | Promise<DefineComponent> | {
        default: DefineComponent;
    };
    setup: (props: {
        el: Element;
        App: InertiaApp;
        props: InertiaAppProps;
        plugin: Plugin;
    }) => void | VueApp;
    title?: (title: string) => string;
    progress?: false | {
        delay?: number;
        color?: string;
        includeCSS?: boolean;
        showSpinner?: boolean;
    };
    page?: Page;
    render?: (app: VueApp) => Promise<string>;
}
`;

}

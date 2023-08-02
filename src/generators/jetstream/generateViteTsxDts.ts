// ./src/generators/jetstream/generateViteTsxDts.ts

export default function (): string {

return `// ./resources/js/vite-tsx.d.ts

import type { VNode } from 'vue'
import Vue from 'vue'

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
            [elem: string]: any
        }
    }
}
`;

}
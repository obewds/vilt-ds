// ./test-puff-js.js

import { generateVvAnchorVue } from '@obewds/puff-js'

// import puffJs from '@obewds/puff-js';
// const { generateVvAnchorVue } = puffJs;

// const puffJs = require('@obewds/puff-js');
// console.log('puffJs:')
// console.log(puffJs)

let output = generateVvAnchorVue({
    filePathComment: './resources/js/Components/vv/anchors/VvAnchor.vue',
    appVvFilePath: '../../../app.vv',
})

console.log('OUTPUT:')
console.log(output)
